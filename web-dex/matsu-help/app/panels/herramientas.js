(() => {
  const toolsPanel = document.querySelector("[data-tools-panel]");
  const toolsSection = toolsPanel?.closest('.panel-section[aria-label="Herramientas"]');
  const editorStage = document.querySelector(".editor-stage");
  if (!toolsPanel || !toolsSection || !editorStage) return;

  const tools = [
    ["cardboard-background", "picture.png", "Fondo de Cartón"],
    ["add-matsu", "matsu.png", "Añadir Matsu"],
    ["create-bubble", "bubble.png", "Crear Burbuja"],
    ["expression", "emotion.png", "Expresión"],
    ["create-button", "button.png", "Crear Botón"],
    ["effect", "effect.png", "Efecto"],
    ["create-mask", "mask.png", "Crear Máscara"]
  ];

  const osoHeadExpressions = [
    ["Normal", "oso-normal.png"],
    ["Calmado", "oso-normal-eyeclosed.png"],
    ["Alegre", "oso-smile-open.png"],
    ["Satisfecho", "oso-smile-open-eyeclosed.png"],
    ["Sonrisa", "oso-grin.png"],
    ["Chistoso", "oso-grin-eyeclosed.png"]
  ];

  const osoBodyExpressions = [
    ["Normal", "body-normal.png"]
  ];

  const cardboardBackgrounds = [
    ["home", "home-test.png"],
    ["pillar", "pillar-test.png"],
    ["pillar-info", "pillar-info-test.png"],
    ["sidebar", "sidebar-test.png"],
    ["creature", "creature-test.png"]
  ];

  const maskShapes = [
    ["circle", "Círculo"],
    ["square", "Cuadrado"],
    ["triangle", "Triángulo"]
  ];

  const bubbleStyles = [
    ["round", "Redonda", false],
    ["square", "Cuadrada", true],
    ["thought", "Pensada", false],
    ["explosive", "Explosiva", false]
  ];

  const balloonTails = [
    ["triangular", "Triangular", ["round", "square", "explosive"]],
    ["thought", "Pensamiento", ["thought"]]
  ];

  const createBalloonTailSvg = (tailType) => {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");

    svg.classList.add("balloon-tail-svg", `balloon-tail-svg-${tailType}`);
    svg.setAttribute("viewBox", tailType === "thought" ? "0 0 130 80" : "0 0 170 90");
    svg.setAttribute("aria-hidden", "true");
    svg.dataset.balloonTailType = tailType;
    svg.dataset.stretchable = "true";
    svg.dataset.rotatable = "true";
    svg.dataset.fusesToBubble = "true";
    svg.dataset.fusionAnchor = "start";
    svg.dataset.tipHandle = "end";
    svg.dataset.rotationOrigin = "bubble";

    if (tailType === "triangular") {
      const tail = document.createElementNS(svgNamespace, "path");
      tail.setAttribute("d", "M 16 27 L 16 63 L 154 45 Z");
      tail.dataset.balloonTailBody = "true";
      svg.append(tail);
      return svg;
    }

    [
      [32, 40, 22],
      [78, 40, 13],
      [108, 40, 7]
    ].forEach(([centerX, centerY, radius]) => {
      const circle = document.createElementNS(svgNamespace, "circle");
      circle.setAttribute("cx", String(centerX));
      circle.setAttribute("cy", String(centerY));
      circle.setAttribute("r", String(radius));
      circle.dataset.balloonTailBody = "true";
      svg.append(circle);
    });

    return svg;
  };

  const getOrCreateShadeLayer = () => {
    let shadeLayer = editorStage.querySelector('[data-cardboard-layer="shade"]');
    if (shadeLayer) return shadeLayer;

    shadeLayer = document.createElement("div");
    shadeLayer.className = "cardboard-stage-shade";
    shadeLayer.dataset.cardboardLayer = "shade";
    shadeLayer.setAttribute("aria-hidden", "true");

    const imageLayer = editorStage.querySelector('[data-cardboard-layer="image"]');
    if (imageLayer) {
      imageLayer.insertAdjacentElement("afterend", shadeLayer);
    } else {
      editorStage.prepend(shadeLayer);
    }

    return shadeLayer;
  };

  const applyMaskShape = (shape) => {
    getOrCreateShadeLayer();
    window.dispatchEvent(new CustomEvent("matsu:create-mask", {
      detail: { shape }
    }));
  };

  const applyCardboardBackground = (background, fileName) => {
    let imageLayer = editorStage.querySelector('[data-cardboard-layer="image"]');

    if (!imageLayer) {
      imageLayer = document.createElement("img");
      imageLayer.className = "cardboard-stage-image";
      imageLayer.dataset.cardboardLayer = "image";
      imageLayer.alt = "";
      imageLayer.width = 1872;
      imageLayer.height = 894;
      imageLayer.draggable = false;
      editorStage.prepend(imageLayer);
    }

    getOrCreateShadeLayer();

    imageLayer.src = `./pc-test/${fileName}`;
    imageLayer.dataset.cardboardBackground = background;
    editorStage.dataset.cardboardBackground = background;
    editorStage.setAttribute(
      "aria-label",
      `Lienzo PC de 1872 por 894 con ${fileName} como fondo de cartón`
    );
  };

  const createCardboardDialog = () => {
    const dialog = document.createElement("dialog");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("img");
    const gallery = document.createElement("div");
    const actions = document.createElement("div");
    const acceptButton = document.createElement("button");
    const optionButtons = [];

    dialog.className = "cardboard-dialog";
    dialog.setAttribute("aria-labelledby", "cardboard-dialog-title");

    header.className = "cardboard-dialog-header";

    title.className = "cardboard-dialog-title";
    title.id = "cardboard-dialog-title";
    title.textContent = "Fondo de Cartón";

    closeButton.className = "cardboard-dialog-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Cerrar Fondo de Cartón");

    closeIcon.src = "./icons/cancel.png";
    closeIcon.alt = "";
    closeIcon.width = 22;
    closeIcon.height = 22;
    closeButton.append(closeIcon);

    gallery.className = "cardboard-dialog-gallery";

    cardboardBackgrounds.forEach(([background, fileName]) => {
      const option = document.createElement("button");
      const preview = document.createElement("img");
      const label = document.createElement("span");

      option.className = "cardboard-background-option";
      option.type = "button";
      option.dataset.cardboardBackground = background;
      option.dataset.cardboardFile = fileName;
      option.setAttribute("aria-pressed", "false");

      preview.src = `./pc-test/${fileName}`;
      preview.alt = `Vista previa de ${fileName}`;

      label.textContent = fileName;
      option.append(preview, label);
      optionButtons.push(option);
      gallery.append(option);
    });

    actions.className = "cardboard-dialog-actions";

    acceptButton.className = "tools-panel-button cardboard-dialog-accept";
    acceptButton.type = "button";
    acceptButton.textContent = "Aceptar";
    acceptButton.disabled = true;
    actions.append(acceptButton);

    const resetSelection = () => {
      optionButtons.forEach((option) => option.setAttribute("aria-pressed", "false"));
      acceptButton.disabled = true;
    };

    optionButtons.forEach((selectedOption) => {
      selectedOption.addEventListener("click", () => {
        optionButtons.forEach((option) => {
          option.setAttribute("aria-pressed", String(option === selectedOption));
        });
        acceptButton.disabled = false;
      });
    });

    closeButton.addEventListener("click", () => dialog.close("cancel"));
    acceptButton.addEventListener("click", () => {
      const selectedOption = optionButtons.find(
        (option) => option.getAttribute("aria-pressed") === "true"
      );
      if (!selectedOption) return;

      applyCardboardBackground(
        selectedOption.dataset.cardboardBackground,
        selectedOption.dataset.cardboardFile
      );
      dialog.close("accept");
    });
    dialog.addEventListener("close", resetSelection);

    header.append(title, closeButton);
    dialog.append(header, gallery, actions);
    document.body.append(dialog);

    return {
      open: () => {
        resetSelection();
        dialog.showModal();
      }
    };
  };

  const cardboardDialog = createCardboardDialog();

  const createExpressionDialog = () => {
    const dialog = document.createElement("dialog");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("img");
    const content = document.createElement("div");
    const tabs = document.createElement("div");
    const previewPanel = document.createElement("aside");
    const previewTitle = document.createElement("h3");
    const previewStage = document.createElement("div");
    const previewOso = document.createElement("div");
    const previewBody = document.createElement("img");
    const previewHead = document.createElement("img");
    const tabPanels = new Map();
    const tabButtons = new Map();
    const optionButtons = [];

    dialog.className = "cardboard-dialog expression-dialog";
    dialog.setAttribute("aria-labelledby", "expression-dialog-title");
    header.className = "cardboard-dialog-header";
    title.className = "cardboard-dialog-title";
    title.id = "expression-dialog-title";
    title.textContent = "Expresión";
    closeButton.className = "cardboard-dialog-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Cerrar Expresión");
    closeIcon.src = "./icons/cancel.png";
    closeIcon.alt = "";
    closeIcon.width = 22;
    closeIcon.height = 22;
    closeButton.append(closeIcon);
    content.className = "expression-dialog-content";
    tabs.className = "expression-dialog-tabs";
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", "Partes de Oso");
    previewPanel.className = "expression-dialog-preview";
    previewPanel.setAttribute("aria-label", "Vista previa de Oso");
    previewTitle.className = "expression-dialog-preview-title";
    previewTitle.textContent = "Vista previa";
    previewStage.className = "expression-dialog-preview-stage";
    previewOso.className = "oso-object expression-dialog-preview-oso";
    previewOso.setAttribute("role", "img");
    previewOso.setAttribute("aria-label", "Oso con cabeza y cuerpo seleccionados");
    previewBody.className = "oso-layer oso-body";
    previewBody.alt = "";
    previewBody.width = 775;
    previewBody.height = 625;
    previewBody.draggable = false;
    previewHead.className = "oso-layer oso-head";
    previewHead.alt = "";
    previewHead.width = 461;
    previewHead.height = 456;
    previewHead.draggable = false;
    previewOso.append(previewBody, previewHead);
    previewStage.append(previewOso);
    previewPanel.append(previewTitle, previewStage);

    const setPreviewFile = (part, fileName) => {
      const preview = part === "head" ? previewHead : previewBody;
      preview.src = `./matsu-image/${fileName}`;
    };

    const createTab = (part, label, expressions) => {
      const tab = document.createElement("button");
      const panel = document.createElement("section");
      const gallery = document.createElement("div");
      const tabId = `expression-tab-${part}`;
      const panelId = `expression-panel-${part}`;

      tab.className = "expression-dialog-tab";
      tab.type = "button";
      tab.id = tabId;
      tab.dataset.expressionTab = part;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", panelId);
      tab.setAttribute("aria-selected", "false");
      tab.textContent = label;

      panel.className = "expression-dialog-panel";
      panel.id = panelId;
      panel.dataset.expressionPart = part;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tabId);
      panel.hidden = true;
      gallery.className = `expression-dialog-gallery expression-${part}-gallery`;

      expressions.forEach(([expressionLabel, fileName]) => {
        const option = document.createElement("button");
        const preview = document.createElement("img");
        const optionLabel = document.createElement("span");

        option.className = `cardboard-background-option expression-option expression-${part}-option`;
        option.type = "button";
        option.dataset.expressionPart = part;
        option.dataset.expressionFile = fileName;
        option.setAttribute("aria-label", `${label}: ${expressionLabel}`);
        option.setAttribute("aria-pressed", "false");
        preview.src = `./matsu-image/${fileName}`;
        preview.alt = "";
        preview.draggable = false;
        optionLabel.textContent = expressionLabel;
        option.append(preview, optionLabel);
        optionButtons.push(option);
        gallery.append(option);

        option.addEventListener("click", () => {
          optionButtons.forEach((candidate) => {
            if (candidate.dataset.expressionPart === part) {
              candidate.setAttribute("aria-pressed", String(candidate === option));
            }
          });
          setPreviewFile(part, fileName);
          window.dispatchEvent(new CustomEvent("matsu:expression-selected", {
            detail: { part, file: fileName }
          }));
        });
      });

      tab.addEventListener("click", () => {
        tabButtons.forEach((candidate, candidatePart) => {
          candidate.setAttribute("aria-selected", String(candidatePart === part));
          tabPanels.get(candidatePart).hidden = candidatePart !== part;
        });
      });

      tabButtons.set(part, tab);
      tabPanels.set(part, panel);
      tabs.append(tab);
      panel.append(gallery);
      content.append(panel);
    };

    createTab("head", "Cabeza de Oso", osoHeadExpressions);
    createTab("body", "Cuerpo de Oso", osoBodyExpressions);

    const syncSelection = () => {
      const osoObject = editorStage.querySelector('[data-canvas-object="oso"]');
      const headFile = osoObject?.dataset.osoHeadFile || "oso-normal.png";
      const bodyFile = osoObject?.dataset.osoBodyFile || "body-normal.png";
      optionButtons.forEach((option) => {
        const selectedFile = option.dataset.expressionPart === "head"
          ? headFile
          : bodyFile;
        option.setAttribute(
          "aria-pressed",
          String(option.dataset.expressionFile === selectedFile)
        );
      });
      setPreviewFile("head", headFile);
      setPreviewFile("body", bodyFile);
      previewOso.style.setProperty(
        "--oso-head-rotation",
        `${Number.parseInt(osoObject?.dataset.osoHeadRotation || "0", 10)}deg`
      );
      previewOso.style.setProperty(
        "--oso-head-mirror",
        osoObject?.dataset.osoHeadMirrored === "true" ? "-1" : "1"
      );
    };

    closeButton.addEventListener("click", () => dialog.close("cancel"));
    header.append(title, closeButton);
    content.prepend(tabs);
    content.append(previewPanel);
    dialog.append(header, content);
    document.body.append(dialog);

    return {
      open: () => {
        if (!editorStage.querySelector('[data-canvas-object="oso"]')) return;
        tabButtons.get("head").click();
        syncSelection();
        dialog.showModal();
      }
    };
  };

  const expressionDialog = createExpressionDialog();

  const createBubbleDialog = () => {
    const dialog = document.createElement("dialog");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("img");
    const content = document.createElement("div");
    const bubbleSection = document.createElement("section");
    const bubbleSectionTitle = document.createElement("h3");
    const bubbleGallery = document.createElement("div");
    const tailSection = document.createElement("section");
    const tailSectionTitle = document.createElement("h3");
    const tailGallery = document.createElement("div");
    const actions = document.createElement("div");
    const acceptButton = document.createElement("button");
    const bubbleOptionButtons = [];
    const tailOptionButtons = [];

    dialog.className = "cardboard-dialog bubble-dialog";
    dialog.setAttribute("aria-labelledby", "bubble-dialog-title");

    header.className = "cardboard-dialog-header";

    title.className = "cardboard-dialog-title";
    title.id = "bubble-dialog-title";
    title.textContent = "Crear Burbuja";

    closeButton.className = "cardboard-dialog-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Cerrar Crear Burbuja");

    closeIcon.src = "./icons/cancel.png";
    closeIcon.alt = "";
    closeIcon.width = 22;
    closeIcon.height = 22;
    closeButton.append(closeIcon);

    content.className = "bubble-dialog-content";
    bubbleSection.className = "bubble-dialog-section";
    bubbleSectionTitle.className = "bubble-dialog-section-title";
    bubbleSectionTitle.textContent = "BURBUJAS";
    bubbleGallery.className = "bubble-dialog-gallery";

    tailSection.className = "bubble-dialog-section bubble-dialog-tail-section";
    tailSectionTitle.className = "bubble-dialog-section-title";
    tailSectionTitle.textContent = "FLECHAS BOCADILLOS (OPCIONAL)";
    tailGallery.className = "bubble-dialog-gallery balloon-tail-dialog-gallery";

    bubbleStyles.forEach(([style, labelText, allowsRounding]) => {
      const option = document.createElement("button");
      const preview = document.createElement("div");
      const bubble = document.createElement("div");
      const label = document.createElement("span");

      option.className = "cardboard-background-option bubble-style-option";
      option.type = "button";
      option.dataset.bubbleStyle = style;
      option.dataset.bubbleAllowsBlur = "false";
      option.dataset.bubbleAllowsRounding = String(allowsRounding);
      option.setAttribute("aria-label", `Burbuja ${labelText}`);
      option.setAttribute("aria-pressed", "false");

      preview.className = "bubble-style-preview";
      bubble.className = `bubble-shape bubble-shape-${style}`;
      bubble.setAttribute("aria-hidden", "true");
      label.textContent = labelText;

      preview.append(bubble);
      option.append(preview, label);
      bubbleOptionButtons.push(option);
      bubbleGallery.append(option);
    });

    balloonTails.forEach(([tailType, labelText, compatibleBubbles]) => {
      const option = document.createElement("button");
      const preview = document.createElement("div");
      const tail = createBalloonTailSvg(tailType);
      const label = document.createElement("span");

      option.className = "cardboard-background-option balloon-tail-option";
      option.type = "button";
      option.dataset.balloonTail = tailType;
      option.dataset.compatibleBubbles = compatibleBubbles.join(",");
      option.dataset.balloonTailAllowsBlur = "false";
      option.dataset.balloonTailAllowsRounding = "false";
      option.dataset.balloonTailStretchable = "true";
      option.dataset.balloonTailRotatable = "true";
      option.dataset.balloonTailFuses = "true";
      option.dataset.balloonTailFusionAnchor = "start";
      option.dataset.balloonTailTipHandle = "end";
      option.dataset.balloonTailRotationOrigin = "bubble";
      option.setAttribute("aria-label", `Flecha bocadillo ${labelText}`);
      option.setAttribute("aria-pressed", "false");
      option.disabled = true;

      preview.className = "balloon-tail-preview";
      label.textContent = labelText;

      preview.append(tail);
      option.append(preview, label);
      tailOptionButtons.push(option);
      tailGallery.append(option);
    });

    bubbleSection.append(bubbleSectionTitle, bubbleGallery);
    tailSection.append(tailSectionTitle, tailGallery);
    content.append(bubbleSection, tailSection);

    actions.className = "cardboard-dialog-actions";

    acceptButton.className = "tools-panel-button cardboard-dialog-accept";
    acceptButton.type = "button";
    acceptButton.textContent = "Aceptar";
    acceptButton.disabled = true;
    actions.append(acceptButton);

    const getSelectedOption = (options) => options.find(
      (option) => option.getAttribute("aria-pressed") === "true"
    );

    const syncAcceptButton = () => {
      acceptButton.disabled = !getSelectedOption(bubbleOptionButtons);
    };

    const syncTailCompatibility = (bubbleStyle = null) => {
      tailOptionButtons.forEach((option) => {
        const compatibleBubbles = option.dataset.compatibleBubbles.split(",");
        const compatible = Boolean(bubbleStyle) && compatibleBubbles.includes(bubbleStyle);
        option.disabled = !compatible;
        option.setAttribute("aria-pressed", "false");
      });
      syncAcceptButton();
    };

    const resetSelection = () => {
      bubbleOptionButtons.forEach((option) => option.setAttribute("aria-pressed", "false"));
      syncTailCompatibility();
    };

    bubbleOptionButtons.forEach((selectedOption) => {
      selectedOption.addEventListener("click", () => {
        bubbleOptionButtons.forEach((option) => {
          option.setAttribute("aria-pressed", String(option === selectedOption));
        });
        syncTailCompatibility(selectedOption.dataset.bubbleStyle);
      });
    });

    tailOptionButtons.forEach((selectedOption) => {
      selectedOption.addEventListener("click", () => {
        const shouldSelect = selectedOption.getAttribute("aria-pressed") !== "true";
        tailOptionButtons.forEach((option) => {
          option.setAttribute("aria-pressed", String(shouldSelect && option === selectedOption));
        });
        syncAcceptButton();
      });
    });

    closeButton.addEventListener("click", () => dialog.close("cancel"));
    acceptButton.addEventListener("click", () => {
      const selectedBubble = getSelectedOption(bubbleOptionButtons);
      const selectedTail = getSelectedOption(tailOptionButtons);
      if (!selectedBubble) return;

      window.dispatchEvent(new CustomEvent("matsu:bubble-style-selected", {
        detail: {
          style: selectedBubble.dataset.bubbleStyle,
          preferences: {
            blur: selectedBubble.dataset.bubbleAllowsBlur === "true",
            rounding: selectedBubble.dataset.bubbleAllowsRounding === "true"
          },
          tail: selectedTail ? {
            type: selectedTail.dataset.balloonTail,
            svg: true,
            stretchable: selectedTail.dataset.balloonTailStretchable === "true",
            rotatable: selectedTail.dataset.balloonTailRotatable === "true",
            fusesToBubble: selectedTail.dataset.balloonTailFuses === "true",
            fusionAnchor: selectedTail.dataset.balloonTailFusionAnchor,
            tipHandle: selectedTail.dataset.balloonTailTipHandle,
            rotationOrigin: selectedTail.dataset.balloonTailRotationOrigin,
            preferences: {
              blur: selectedTail.dataset.balloonTailAllowsBlur === "true",
              rounding: selectedTail.dataset.balloonTailAllowsRounding === "true"
            }
          } : null
        }
      }));
      dialog.close("accept");
    });
    dialog.addEventListener("close", resetSelection);

    header.append(title, closeButton);
    dialog.append(header, content, actions);
    document.body.append(dialog);

    return {
      open: () => {
        resetSelection();
        dialog.showModal();
      }
    };
  };

  const bubbleDialog = createBubbleDialog();

  const createMaskDialog = () => {
    const dialog = document.createElement("dialog");
    const header = document.createElement("header");
    const title = document.createElement("h2");
    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("img");
    const gallery = document.createElement("div");
    const actions = document.createElement("div");
    const acceptButton = document.createElement("button");
    const optionButtons = [];

    dialog.className = "cardboard-dialog mask-dialog";
    dialog.setAttribute("aria-labelledby", "mask-dialog-title");

    header.className = "cardboard-dialog-header";

    title.className = "cardboard-dialog-title";
    title.id = "mask-dialog-title";
    title.textContent = "Crear Máscara";

    closeButton.className = "cardboard-dialog-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Cerrar Crear Máscara");

    closeIcon.src = "./icons/cancel.png";
    closeIcon.alt = "";
    closeIcon.width = 22;
    closeIcon.height = 22;
    closeButton.append(closeIcon);

    gallery.className = "cardboard-dialog-gallery mask-dialog-gallery";

    maskShapes.forEach(([shape, labelText]) => {
      const option = document.createElement("button");
      const preview = document.createElement("div");
      const figure = document.createElement("div");
      const label = document.createElement("span");

      option.className = "cardboard-background-option mask-shape-option";
      option.type = "button";
      option.dataset.maskShape = shape;
      option.setAttribute("aria-label", `Máscara ${labelText}`);
      option.setAttribute("aria-pressed", "false");

      preview.className = "mask-shape-preview";
      figure.className = `mask-shape mask-shape-${shape}`;
      figure.setAttribute("aria-hidden", "true");
      label.textContent = labelText;

      preview.append(figure);
      option.append(preview, label);
      optionButtons.push(option);
      gallery.append(option);
    });

    actions.className = "cardboard-dialog-actions";

    acceptButton.className = "tools-panel-button cardboard-dialog-accept";
    acceptButton.type = "button";
    acceptButton.textContent = "Aceptar";
    acceptButton.disabled = true;
    actions.append(acceptButton);

    const resetSelection = () => {
      optionButtons.forEach((option) => option.setAttribute("aria-pressed", "false"));
      acceptButton.disabled = true;
    };

    optionButtons.forEach((selectedOption) => {
      selectedOption.addEventListener("click", () => {
        optionButtons.forEach((option) => {
          option.setAttribute("aria-pressed", String(option === selectedOption));
        });
        acceptButton.disabled = false;
      });
    });

    closeButton.addEventListener("click", () => dialog.close("cancel"));
    acceptButton.addEventListener("click", () => {
      const selectedOption = optionButtons.find(
        (option) => option.getAttribute("aria-pressed") === "true"
      );
      if (!selectedOption) return;

      applyMaskShape(selectedOption.dataset.maskShape);
      dialog.close("accept");
    });
    dialog.addEventListener("close", resetSelection);

    header.append(title, closeButton);
    dialog.append(header, gallery, actions);
    document.body.append(dialog);

    return {
      open: () => {
        resetSelection();
        dialog.showModal();
      }
    };
  };

  const maskDialog = createMaskDialog();
  const maskPreferenceControls = new Map();
  let maskPreferencesTitle = null;

  const createMaskPreferences = () => {
    const preferences = document.createElement("section");
    const title = document.createElement("h3");
    const separator = document.createElement("div");
    const controls = document.createElement("div");
    const preferenceRows = [
      ["blur", "DESENFOCAR", 0, 100, 25, "%"],
      ["rounding", "REDONDEAR", 0, 100, 1, "px"],
      ["seed", "SEED", 1, 5, 1, ""]
    ];

    preferences.className = "mask-preferences";
    preferences.setAttribute("aria-label", "Preferencias");

    title.className = "mask-preferences-title";
    title.textContent = "PREFERENCIAS";
    maskPreferencesTitle = title;

    separator.className = "mask-preferences-separator";
    separator.setAttribute("aria-hidden", "true");

    controls.className = "mask-preferences-controls";

    preferenceRows.forEach(([preference, labelText, minimum, maximum, step, unit]) => {
      const row = document.createElement("label");
      const label = document.createElement("span");
      const range = document.createElement("span");
      const slider = document.createElement("input");
      const thumb = document.createElement("span");
      const scale = document.createElement("span");

      row.className = "mask-preference-row";
      label.className = "mask-preference-label";
      label.textContent = labelText;
      range.className = "mask-preference-range";

      slider.className = "mask-preference-slider";
      slider.type = "range";
      slider.min = String(minimum);
      slider.max = String(maximum);
      slider.step = String(step);
      slider.value = String(minimum);
      slider.dataset.maskPreference = preference;
      slider.setAttribute("aria-label", `${labelText}: ${minimum}${unit} a ${maximum}${unit}`);
      slider.disabled = true;
      row.classList.add("is-disabled");

      thumb.className = "mask-preference-thumb";
      thumb.setAttribute("aria-hidden", "true");

      const syncThumbPosition = () => {
        const currentMinimum = Number(slider.min);
        const currentMaximum = Number(slider.max);
        const ratio = (Number(slider.value) - currentMinimum) /
          (currentMaximum - currentMinimum);
        thumb.style.left = `calc(${ratio * 100}% + ${6 - ratio * 12}px)`;
      };
      const dispatchPreferenceChange = (commit) => {
        window.dispatchEvent(new CustomEvent("matsu:update-object-preference", {
          detail: {
            preference,
            value: Number(slider.value),
            commit
          }
        }));
      };
      slider.addEventListener("input", () => {
        syncThumbPosition();
        dispatchPreferenceChange(false);
      });
      slider.addEventListener("change", () => dispatchPreferenceChange(true));
      syncThumbPosition();

      scale.className = "mask-preference-scale";
      const renderScale = (values) => {
        scale.replaceChildren();
        values.forEach((markValue) => {
          const mark = document.createElement("span");
          const line = document.createElement("i");
          const number = document.createElement("b");

          mark.className = "mask-preference-mark";
          line.setAttribute("aria-hidden", "true");
          number.textContent = `${markValue}${unit}`;
          mark.append(line, number);
          scale.append(mark);
        });
      };
      const configureRange = (nextMaximum, nextStep, marks) => {
        slider.max = String(nextMaximum);
        slider.step = String(nextStep);
        slider.setAttribute(
          "aria-label",
          `${labelText}: ${slider.min}${unit} a ${nextMaximum}${unit}`
        );
        renderScale(marks);
      };
      renderScale(preference === "seed" ? [1, 2, 3, 4, 5] : [0, 25, 50, 75, 100]);

      range.append(slider, thumb, scale);
      row.append(label, range);
      controls.append(row);
      maskPreferenceControls.set(preference, {
        row,
        slider,
        syncThumbPosition,
        configureRange
      });
    });

    preferences.append(title, separator, controls);
    toolsSection.append(preferences);
  };

  createMaskPreferences();

  window.addEventListener("matsu:preference-selection-change", (event) => {
    const targets = Array.isArray(event.detail?.targets) ? event.detail.targets : [];
    if (maskPreferencesTitle) {
      maskPreferencesTitle.textContent = "PREFERENCIAS";
    }

    maskPreferenceControls.forEach((control, preference) => {
      const permission = preference === "rounding"
        ? "allowsRounding"
        : preference === "seed" ? "allowsSeed" : "allowsBlur";
      const applicableTargets = targets.filter((target) => target[permission]);
      const usesBubbleRoundingRange = preference === "rounding" &&
        applicableTargets.length > 0 &&
        applicableTargets.every((target) => target.kind === "bubble" && target.shape === "square");
      const usesSeedRange = preference === "seed";
      control.configureRange(
        usesSeedRange ? 5 : usesBubbleRoundingRange ? 25 : 100,
        preference === "blur" ? 25 : 1,
        usesSeedRange
          ? [1, 2, 3, 4, 5]
          : usesBubbleRoundingRange ? [0, 5, 10, 15, 20, 25] : [0, 25, 50, 75, 100]
      );
      const enabled = applicableTargets.length > 0;
      control.slider.disabled = !enabled;
      control.row.classList.toggle("is-disabled", !enabled);
      control.slider.value = String(enabled
        ? Math.min(
          Number(control.slider.max),
          applicableTargets[0][preference] ?? Number(control.slider.min)
        )
        : Number(control.slider.min));
      control.syncThumbPosition();
    });
  });

  const fragment = document.createDocumentFragment();

  tools.forEach(([tool, icon, label]) => {
    const button = document.createElement("button");
    const image = document.createElement("img");
    const text = document.createElement("span");

    button.className = "tools-panel-button";
    button.type = "button";
    button.dataset.tool = tool;
    button.disabled = ![
      "cardboard-background",
      "add-matsu",
      "create-bubble",
      "create-button",
      "create-mask"
    ].includes(tool);
    if (tool === "add-matsu") {
      button.disabled = Boolean(editorStage.querySelector('[data-canvas-object="oso"]'));
    }
    if (tool === "expression") {
      button.disabled = !editorStage.querySelector('[data-canvas-object="oso"]');
    }

    image.className = "tools-panel-button-icon";
    image.src = `./icons/${icon}`;
    image.alt = "";
    image.width = 18;
    image.height = 18;

    text.className = "tools-panel-button-label";
    text.textContent = label;

    button.append(image, text);
    if (tool === "cardboard-background") {
      button.addEventListener("click", cardboardDialog.open);
    }
    if (tool === "add-matsu") {
      button.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("matsu:add-matsu"));
      });
    }
    if (tool === "expression") {
      button.addEventListener("click", expressionDialog.open);
    }
    if (tool === "create-bubble") {
      button.addEventListener("click", bubbleDialog.open);
    }
    if (tool === "create-button") {
      button.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("matsu:create-button"));
      });
    }
    if (tool === "create-mask") {
      button.addEventListener("click", maskDialog.open);
    }
    fragment.append(button);
  });

  toolsPanel.append(fragment);
})();
