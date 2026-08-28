(() => {
  "use strict";

  const BUILD_FORMAT = "matsu-build";
  const BUILD_VERSION = 2;
  const STAGE_SELECTOR = ".editor-stage";
  const BUILD_OBJECT_SELECTOR = [
    '[data-canvas-object="mask-shape"]',
    '[data-canvas-object="free-text"]',
    '[data-canvas-object="speech-bubble"]'
  ].join(", ");
  const TEXT_CONTENT_SELECTOR = ".canvas-editable-text";
  const TEXT_FONT_FAMILY = "Matsu HP Simplified";
  const TEXT_FONT_SIZE_CANVAS_SCALE = 44 / 12;

  const DIMENSIONS = Object.freeze({
    pc: Object.freeze({ device: "pc", width: 1872, height: 894 }),
    mobile: Object.freeze({ device: "mobile", width: 1440, height: 2597 })
  });

  const PC_CARDBOARD_IDS = new Set([
    "home",
    "pillar",
    "pillar-info",
    "sidebar",
    "creature"
  ]);

  const MASK_SHAPES = new Set(["circle", "square", "triangle"]);
  const BUBBLE_STYLES = new Set(["round", "square", "thought", "explosive"]);
  const TEXT_ALIGNS = new Set(["left", "center", "right"]);

  const roundCoordinate = (value) =>
    Math.round((Number(value) || 0) * 1000) / 1000;

  const clamp = (value, minimum, maximum) =>
    Math.min(Math.max(Number(value) || 0, minimum), maximum);

  const deepFreeze = (value) => {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  };

  const getCardboardDevice = (cardboardId) => {
    if (!cardboardId) return null;
    if (cardboardId.startsWith("mobile-")) return "mobile";
    return PC_CARDBOARD_IDS.has(cardboardId) ? "pc" : null;
  };

  const readObjectGeometry = (canvasObject) => {
    const x = roundCoordinate(Number.parseFloat(canvasObject.style.left));
    const y = roundCoordinate(Number.parseFloat(canvasObject.style.top));
    const width = roundCoordinate(canvasObject.offsetWidth);
    const height = roundCoordinate(canvasObject.offsetHeight);

    return {
      coordinates: {
        origin: "top-left",
        x,
        y,
        centerX: roundCoordinate(x + width / 2),
        centerY: roundCoordinate(y + height / 2)
      },
      size: { width, height },
      transform: {
        rotation: roundCoordinate(canvasObject.dataset.rotation),
        mirrorX: canvasObject.dataset.mirrored === "true"
      }
    };
  };

  const readTextProperties = (canvasObject, defaultColor, defaultAlign) => {
    const textContent = canvasObject.querySelector(TEXT_CONTENT_SELECTOR);
    const fontSize = clamp(canvasObject.dataset.textFontSize || 12, 8, 20);
    const opacityPercent = clamp(canvasObject.dataset.textOpacity || 100, 0, 100);
    const align = TEXT_ALIGNS.has(canvasObject.dataset.textAlign)
      ? canvasObject.dataset.textAlign
      : defaultAlign;

    return {
      plainText: textContent?.textContent || "",
      html: textContent?.innerHTML || canvasObject.dataset.textHtml || "",
      fontFamily: TEXT_FONT_FAMILY,
      fontSize,
      renderFontSizePx: roundCoordinate(fontSize * TEXT_FONT_SIZE_CANVAS_SCALE),
      opacityPercent,
      opacity: roundCoordinate(opacityPercent / 100),
      color: canvasObject.dataset.textColor || defaultColor,
      align
    };
  };

  const readMaskObject = (maskObject, layer) => {
    const shape = maskObject.dataset.maskShape || null;

    return {
      id: maskObject.dataset.canvasObjectId || null,
      type: "mask",
      shape,
      layer,
      groupId: maskObject.dataset.canvasGroupId || null,
      ...readObjectGeometry(maskObject),
      preferences: {
        blurPercent: clamp(maskObject.dataset.maskBlur, 0, 100),
        roundingPx: shape === "circle"
          ? 0
          : clamp(maskObject.dataset.maskRounding, 0, 100)
      }
    };
  };

  const readFreeTextObject = (textObject, layer) => ({
    id: textObject.dataset.canvasObjectId || null,
    type: "text",
    layer,
    groupId: textObject.dataset.canvasGroupId || null,
    ...readObjectGeometry(textObject),
    text: readTextProperties(textObject, "#FFFFFF", "left")
  });

  const readSpeechBubbleObject = (bubbleObject, layer) => ({
    id: bubbleObject.dataset.canvasObjectId || null,
    type: "bubble",
    shape: bubbleObject.dataset.bubbleStyle || null,
    layer,
    groupId: bubbleObject.dataset.canvasGroupId || null,
    ...readObjectGeometry(bubbleObject),
    preferences: {
      roundingPx: bubbleObject.dataset.bubbleStyle === "square"
        ? clamp(bubbleObject.dataset.bubbleRounding, 0, 25)
        : 0,
      seed: ["thought", "explosive"].includes(bubbleObject.dataset.bubbleStyle)
        ? clamp(Math.round(Number(bubbleObject.dataset.bubbleSeed) || 1), 1, 5)
        : 1
    },
    text: readTextProperties(bubbleObject, "#000000", "center")
  });

  const readBuildObject = (canvasObject, layer) => {
    const type = canvasObject.dataset.canvasObject;
    if (type === "mask-shape") return readMaskObject(canvasObject, layer);
    if (type === "free-text") return readFreeTextObject(canvasObject, layer);
    if (type === "speech-bubble") return readSpeechBubbleObject(canvasObject, layer);
    return null;
  };

  const validateBuild = (build) => {
    const issues = [];

    if (!build.editorReference.cardboardId) {
      issues.push({
        code: "missing-cardboard",
        message: "Falta elegir un Fondo de Cartón para confirmar la dimensión."
      });
    } else if (!build.dimension.confirmed) {
      issues.push({
        code: "unknown-cardboard-id",
        message: `El ID de Fondo de Cartón \"${build.editorReference.cardboardId}\" no confirma PC ni móvil.`
      });
    }

    build.objects.forEach((object) => {
      if (!object.id) {
        issues.push({
          code: "missing-object-id",
          message: "Un objeto no tiene ID de coordinación."
        });
      }

      if (object.type === "mask" && !MASK_SHAPES.has(object.shape)) {
        issues.push({
          code: "unknown-mask-shape",
          objectId: object.id,
          message: `La máscara \"${object.id || "sin ID"}\" tiene una figura desconocida.`
        });
      }

      if (object.type === "bubble" && !BUBBLE_STYLES.has(object.shape)) {
        issues.push({
          code: "unknown-bubble-style",
          objectId: object.id,
          message: `La Burbuja \"${object.id || "sin ID"}\" tiene una forma desconocida.`
        });
      }

      if (["text", "bubble"].includes(object.type) && !TEXT_ALIGNS.has(object.text.align)) {
        issues.push({
          code: "unknown-text-alignment",
          objectId: object.id,
          message: `El texto \"${object.id || "sin ID"}\" tiene una alineación desconocida.`
        });
      }
    });

    return issues;
  };

  const collectBuild = () => {
    const editorStage = document.querySelector(STAGE_SELECTOR);
    if (!editorStage) {
      return deepFreeze({
        format: BUILD_FORMAT,
        version: BUILD_VERSION,
        status: "conflict",
        issues: [{
          code: "missing-editor-stage",
          message: "No existe la dimensión del Editor."
        }],
        dimension: {
          confirmed: false,
          device: null,
          width: null,
          height: null
        },
        editorReference: {
          cardboardId: null,
          display: "none"
        },
        maskLayer: {
          mode: "cutout",
          color: "#000000",
          opacity: 0.65
        },
        objects: []
      });
    }

    const cardboardId = editorStage.dataset.cardboardBackground || null;
    const device = getCardboardDevice(cardboardId);
    const confirmedDimension = device ? DIMENSIONS[device] : null;
    const build = {
      format: BUILD_FORMAT,
      version: BUILD_VERSION,
      status: "confirmed",
      issues: [],
      dimension: {
        confirmed: Boolean(confirmedDimension),
        device: confirmedDimension?.device || null,
        width: confirmedDimension?.width || null,
        height: confirmedDimension?.height || null
      },
      editorReference: {
        cardboardId,
        display: "none"
      },
      maskLayer: {
        mode: "cutout",
        color: "#000000",
        opacity: 0.65
      },
      objects: Array.from(editorStage.querySelectorAll(BUILD_OBJECT_SELECTOR))
        .map((canvasObject, index) => readBuildObject(canvasObject, index + 1))
        .filter(Boolean)
    };

    build.issues = validateBuild(build);
    build.status = build.issues.length === 0 ? "confirmed" : "conflict";
    return deepFreeze(build);
  };

  const normalizeProjectName = (projectName) => {
    const normalizedName = String(projectName || "").trim();
    if (!normalizedName) {
      throw new Error("Build necesita el nombre JavaScript del proyecto.");
    }
    return normalizedName;
  };

  const toJavaScript = (projectName) => {
    const normalizedName = normalizeProjectName(projectName);
    const build = collectBuild();

    if (build.status !== "confirmed") {
      const details = build.issues.map((issue) => issue.message).join(" ");
      throw new Error(`Build en conflicto. ${details}`);
    }

    const payload = {
      ...build,
      project: { javascript: normalizedName }
    };
    const serializedPayload = JSON.stringify(payload, null, 2);
    const serializedName = JSON.stringify(normalizedName);

    return [
      "(() => {",
      '  "use strict";',
      `  const scene = ${serializedPayload};`,
      "  window.MatsuHelpScenes ||= Object.create(null);",
      `  window.MatsuHelpScenes[${serializedName}] = scene;`,
      "  window.dispatchEvent(new CustomEvent(\"matsu:scene-ready\", { detail: scene }));",
      "})();",
      ""
    ].join("\n");
  };

  let currentBuild = collectBuild();
  let refreshFrame = 0;

  const syncBuildMetadata = (build) => {
    const editorStage = document.querySelector(STAGE_SELECTOR);
    if (!editorStage) return;

    editorStage.dataset.buildStatus = build.status;
    editorStage.dataset.buildDevice = build.dimension.device || "unconfirmed";
    editorStage.dataset.buildObjectCount = String(build.objects.length);
  };

  const refreshBuild = () => {
    currentBuild = collectBuild();
    syncBuildMetadata(currentBuild);
    window.dispatchEvent(new CustomEvent("matsu:build-updated", {
      detail: currentBuild
    }));
    return currentBuild;
  };

  const scheduleBuildRefresh = () => {
    if (refreshFrame) return;
    refreshFrame = window.requestAnimationFrame(() => {
      refreshFrame = 0;
      refreshBuild();
    });
  };

  const editorStage = document.querySelector(STAGE_SELECTOR);
  if (editorStage) {
    new MutationObserver(scheduleBuildRefresh).observe(editorStage, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
      attributeFilter: [
        "data-cardboard-background",
        "data-canvas-object",
        "data-canvas-object-id",
        "data-canvas-group-id",
        "data-mask-shape",
        "data-mask-blur",
        "data-mask-rounding",
        "data-bubble-style",
        "data-bubble-rounding",
        "data-bubble-seed",
        "data-free-text",
        "data-bubble-text",
        "data-text-html",
        "data-text-font-size",
        "data-text-opacity",
        "data-text-color",
        "data-text-align",
        "data-rotation",
        "data-mirrored",
        "style"
      ]
    });
  }

  const api = {
    version: BUILD_VERSION,
    collect: refreshBuild,
    toJavaScript
  };
  Object.defineProperty(api, "current", {
    enumerable: true,
    get: () => currentBuild
  });

  syncBuildMetadata(currentBuild);
  window.MatsuBuild = Object.freeze(api);
  window.dispatchEvent(new CustomEvent("matsu:build-ready", {
    detail: currentBuild
  }));
})();
