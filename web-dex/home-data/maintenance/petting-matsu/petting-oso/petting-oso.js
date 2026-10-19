(() => {
  const maintenanceScreen = document.getElementById("maintenanceScreen");
  if (!maintenanceScreen || document.getElementById("pettingOso")) return;

  const assetPath = "home-data/maintenance/petting-matsu/petting-oso/";
  const oso = document.createElement("div");
  const shadow = document.createElement("img");
  const bodyMotion = document.createElement("div");
  const body = document.createElement("img");
  const tickleZone = document.createElement("div");
  const headMotion = document.createElement("div");
  const headPetMotion = document.createElement("div");
  const headTiltMotion = document.createElement("div");
  const head = document.createElement("img");
  const mouth = document.createElement("img");
  const purrAudio = new Audio(`${assetPath}purr.mp3`);
  const laughAudio = new Audio(`${assetPath}oso-laugh.mp3`);

  purrAudio.loop = true;
  purrAudio.preload = "auto";
  laughAudio.loop = true;
  laughAudio.preload = "auto";

  oso.id = "pettingOso";
  oso.className = "petting-oso";
  oso.setAttribute("aria-label", "Sitting oso");

  shadow.className = "petting-oso-layer petting-oso-shadow";
  bodyMotion.className = "petting-oso-body-motion";
  body.className = "petting-oso-body";
  tickleZone.className = "petting-oso-tickle-zone";
  headMotion.className = "petting-oso-head-motion";
  headPetMotion.className = "petting-oso-head-pet-motion";
  headTiltMotion.className = "petting-oso-head-tilt-motion";
  head.className = "petting-oso-head";
  mouth.className = "petting-oso-laugh-mouth";

  shadow.src = `${assetPath}shadow.png`;
  body.src = `${assetPath}body-1.png`;
  head.src = `${assetPath}idle.png`;
  mouth.src = `${assetPath}laugh-mouth.png`;
  shadow.alt = "";
  body.alt = "";
  head.alt = "";
  mouth.alt = "";

  bodyMotion.append(body, tickleZone);
  headTiltMotion.append(head, mouth);
  headPetMotion.append(headTiltMotion);
  headMotion.append(headPetMotion);
  oso.append(shadow, bodyMotion, headMotion);
  maintenanceScreen.insertBefore(oso, maintenanceScreen.querySelector(".maintenance-message"));

  const bodyFrames = ["body-1.png", "body-2.png", "body-3.png"];
  const blinkFrames = ["blink-1.png", "blink-2.png", "blink-3.png", "idle.png"];
  let isPetting = false;
  let isPettingActive = false;
  let isTickling = false;
  let isTicklingActive = false;
  let isTickleResetting = false;
  let isLaughDebugLocked = false;
  let pettingPointerId = null;
  let pettingStart = null;
  let ticklingPointerId = null;
  let ticklingStart = null;
  let ticklingLastMotionPoint = null;
  let isTickleMoving = false;
  let lastMouthStretchAt = 0;
  let tickleLaughTimer;
  let tickleOpenMouthTimer;
  let tickleMouthIdleTimer;

  const interactionIsBusy = () => isPetting || isTickling || isTickleResetting || isLaughDebugLocked;
  const playLoopingAudio = (audio) => {
    if (!audio.paused) return;
    audio.play().catch(() => {
      // The next pointer movement can retry if the browser briefly blocks playback.
    });
  };
  const stopLoopingAudio = (audio, reset = false) => {
    audio.pause();
    if (!reset) return;

    try {
      audio.currentTime = 0;
    } catch {
      // Metadata may not be ready yet; pausing is enough until the next interaction.
    }
  };

  const animateLaughMouth = () => {
    if (!isTickling || !isTickleMoving || !oso.classList.contains("is-tickle-laughing")) return;

    const verticalScale = 0.8 + Math.random() * 0.2;
    oso.style.setProperty("--laugh-mouth-scale-y", verticalScale.toFixed(3));
  };

  const pauseLaughMouth = () => {
    isTickleMoving = false;
    lastMouthStretchAt = 0;
    oso.style.setProperty("--laugh-mouth-scale-y", "0.8");
    stopLoopingAudio(laughAudio);
  };

  const activateLaughMouthWhileMoving = () => {
    isTickleMoving = true;
    window.clearTimeout(tickleMouthIdleTimer);

    const now = performance.now();
    if (oso.classList.contains("is-tickle-laughing") && now - lastMouthStretchAt >= 90) {
      animateLaughMouth();
      lastMouthStretchAt = now;
    }
    if (oso.classList.contains("is-tickle-laughing")) playLoopingAudio(laughAudio);

    tickleMouthIdleTimer = window.setTimeout(pauseLaughMouth, 120);
  };

  const preloadedImages = new Map();
  for (const file of [...bodyFrames, ...blinkFrames, "pet.png", "laugh-1.png", "laugh.png", "laugh-mouth.png", "tickle-body.png", "tickle-to-idle-body.png"]) {
    const preload = new Image();
    preload.src = `${assetPath}${file}`;
    preloadedImages.set(file, preload);
  }

  const bodyFramesReady = Promise.all(bodyFrames.map((file) => {
    const preload = preloadedImages.get(file);
    if (typeof preload.decode === "function") {
      return preload.decode().catch(() => undefined);
    }
    if (preload.complete) return Promise.resolve();

    return new Promise((resolve) => {
      preload.addEventListener("load", resolve, { once: true });
      preload.addEventListener("error", resolve, { once: true });
    });
  }));

  const tailFrames = ["body-2.png", "body-3.png", "body-1.png"];
  const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));
  const waitForPaint = () => new Promise((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
  });
  let isTailAnimating = false;

  const animateTail = async () => {
    if (interactionIsBusy() || isTailAnimating) return;

    const frameDuration = 110;
    isTailAnimating = true;

    try {
      await bodyFramesReady;

      for (const [index, frame] of tailFrames.entries()) {
        if (interactionIsBusy()) return;

        body.src = preloadedImages.get(frame)?.src || `${assetPath}${frame}`;
        await waitForPaint();

        if (index < tailFrames.length - 1) await wait(frameDuration);
      }
    } finally {
      isTailAnimating = false;
    }
  };

  const scheduleTail = () => {
    const animationRanges = [
      [10000, 25000],
      [30000, 45000],
      [50000, 60000]
    ];
    const activeRanges = [...animationRanges];

    if (Math.random() < 0.5) {
      const disabledAnimation = Math.floor(Math.random() * activeRanges.length);
      activeRanges.splice(disabledAnimation, 1);
    }

    activeRanges.forEach(([start, end]) => {
      const randomTime = start + Math.random() * (end - start);
      window.setTimeout(animateTail, randomTime);
    });

    window.setTimeout(scheduleTail, 60000);
  };

  scheduleTail();

  const tiltHead = () => {
    if (isTickling || isTickleResetting || isLaughDebugLocked) return;
    headTiltMotion.classList.add("is-tilting");
  };

  const scheduleHeadTilt = () => {
    if (Math.random() < 0.8) {
      window.setTimeout(tiltHead, 10000);
    }

    window.setTimeout(scheduleHeadTilt, 60000);
  };

  headTiltMotion.addEventListener("animationend", (event) => {
    if (event.animationName === "petting-oso-head-tilt") {
      headTiltMotion.classList.remove("is-tilting");
    }
  });

  scheduleHeadTilt();

  const blink = () => {
    if (interactionIsBusy()) return;

    blinkFrames.forEach((frame, index) => {
      window.setTimeout(() => {
        if (!interactionIsBusy()) head.src = `${assetPath}${frame}`;
      }, index * 45);
    });
  };

  const scheduleBlink = () => {
    const blinkRanges = [[15000, 25000], [45000, 55000]];

    blinkRanges.forEach(([start, end]) => {
      const randomTime = start + Math.random() * (end - start);
      window.setTimeout(blink, randomTime);
    });

    window.setTimeout(scheduleBlink, 60000);
  };

  scheduleBlink();

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const pointIsInside = (element, clientX, clientY) => {
    const rect = element.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  };
  const readMilliseconds = (propertyName, fallback) => {
    const value = getComputedStyle(oso).getPropertyValue(propertyName).trim();
    if (value.endsWith("ms")) return Number.parseFloat(value) || fallback;
    if (value.endsWith("s")) return (Number.parseFloat(value) || fallback / 1000) * 1000;
    return fallback;
  };
  const readNumber = (propertyName, fallback) => {
    const value = Number.parseFloat(getComputedStyle(oso).getPropertyValue(propertyName));
    return Number.isFinite(value) ? value : fallback;
  };

  const updatePettingMotion = (clientX, clientY) => {
    if (!pettingStart) return;

    const cursorX = clientX - pettingStart.x;
    const cursorY = clientY - pettingStart.y;
    const headX = clamp(cursorX * 0.08, -1, 1);
    const headY = clamp(cursorY * 0.08, -1, 1);
    const headRotation = clamp(cursorX * 0.04, -1, 1);
    const bodySkew = -headX * 0.25;
    const bodyScaleY = 1 - headY * 0.005;

    oso.style.setProperty("--pet-head-x", `${headX}px`);
    oso.style.setProperty("--pet-head-y", `${headY}px`);
    oso.style.setProperty("--pet-head-rotation", `${headRotation}deg`);
    oso.style.setProperty("--pet-body-skew", `${bodySkew}deg`);
    oso.style.setProperty("--pet-body-scale-y", bodyScaleY.toFixed(3));
  };

  const startPetting = (event) => {
    if (interactionIsBusy()) return;
    isPetting = true;
    isPettingActive = false;
    pettingPointerId = event.pointerId;
    pettingStart = { x: event.clientX, y: event.clientY };
    headTiltMotion.classList.remove("is-tilting");
    head.src = `${assetPath}idle.png`;
    body.src = `${assetPath}body-1.png`;
    headMotion.setPointerCapture(event.pointerId);
    stopLoopingAudio(purrAudio, true);
    event.preventDefault();
  };

  const movePetting = (event) => {
    if (!isPetting || event.pointerId !== pettingPointerId) return;
    if (!pointIsInside(headMotion, event.clientX, event.clientY)) {
      stopPetting(event);
      return;
    }

    if (!isPettingActive) {
      const movementX = event.clientX - pettingStart.x;
      const movementY = event.clientY - pettingStart.y;
      if (Math.hypot(movementX, movementY) < 0.5) return;

      isPettingActive = true;
      oso.classList.add("is-petting");
      head.src = `${assetPath}pet.png`;
      body.src = `${assetPath}body-1.png`;
      playLoopingAudio(purrAudio);
    }

    updatePettingMotion(event.clientX, event.clientY);
    event.preventDefault();
  };

  const stopPetting = (event) => {
    if (!isPetting) return;
    if (event?.pointerId !== undefined && event.pointerId !== pettingPointerId) return;
    const capturedPointerId = pettingPointerId;
    if (capturedPointerId !== null && headMotion.hasPointerCapture(capturedPointerId)) {
      headMotion.releasePointerCapture(capturedPointerId);
    }
    isPetting = false;
    isPettingActive = false;
    pettingPointerId = null;
    pettingStart = null;
    oso.classList.remove("is-petting");
    head.src = `${assetPath}idle.png`;
    body.src = `${assetPath}body-1.png`;
    oso.style.removeProperty("--pet-head-x");
    oso.style.removeProperty("--pet-head-y");
    oso.style.removeProperty("--pet-head-rotation");
    oso.style.removeProperty("--pet-body-skew");
    oso.style.removeProperty("--pet-body-scale-y");
    stopLoopingAudio(purrAudio, true);
  };

  const finishPettingPointer = (event) => {
    stopPetting(event);
  };

  headMotion.addEventListener("pointerdown", startPetting);
  headMotion.addEventListener("pointermove", movePetting);
  headMotion.addEventListener("pointerup", finishPettingPointer);
  headMotion.addEventListener("pointerleave", stopPetting);
  headMotion.addEventListener("pointercancel", stopPetting);

  const updateTicklingMotion = (clientX, clientY) => {
    if (!ticklingStart) return;

    const cursorX = clientX - ticklingStart.x;
    const cursorY = clientY - ticklingStart.y;
    const bodyX = clamp(cursorX * 0.05, -2, 2);
    const bodyY = clamp(cursorY * 0.035, -1.5, 1.5);
    const bodySkew = clamp(-cursorX * 0.06, -1.5, 1.5);
    const bodyScaleX = 0.98 + clamp(cursorX * 0.0004, -0.008, 0.008);
    const bodyScaleY = 0.96 - clamp(cursorY * 0.0008, -0.015, 0.015);
    const headX = bodyX * readNumber("--tickle-head-liquid-x-strength", 1);
    const headY = bodyY * readNumber("--tickle-head-liquid-y-strength", 1);
    const headRotation = clamp(cursorX * 0.02, -0.8, 0.8);

    oso.style.setProperty("--tickle-body-x", `${bodyX}px`);
    oso.style.setProperty("--tickle-body-y", `${bodyY}px`);
    oso.style.setProperty("--tickle-body-skew", `${bodySkew}deg`);
    oso.style.setProperty("--tickle-body-scale-x", bodyScaleX.toFixed(3));
    oso.style.setProperty("--tickle-body-scale-y", bodyScaleY.toFixed(3));
    oso.style.setProperty("--tickle-head-x", `${headX}px`);
    oso.style.setProperty("--tickle-head-y", `${headY}px`);
    oso.style.setProperty("--tickle-head-rotation", `${headRotation}deg`);
  };

  const startTickling = (event) => {
    if (interactionIsBusy()) return;
    isTickling = true;
    isTicklingActive = false;
    ticklingPointerId = event.pointerId;
    ticklingStart = { x: event.clientX, y: event.clientY };
    ticklingLastMotionPoint = { x: event.clientX, y: event.clientY };
    isTickleMoving = false;
    lastMouthStretchAt = 0;
    stopLoopingAudio(laughAudio, true);
    headTiltMotion.classList.remove("is-tilting");
    body.src = `${assetPath}body-1.png`;
    head.src = `${assetPath}idle.png`;
    tickleZone.setPointerCapture(event.pointerId);

    event.preventDefault();
  };

  const moveTickling = (event) => {
    if (!isTickling || event.pointerId !== ticklingPointerId) return;
    if (!pointIsInside(tickleZone, event.clientX, event.clientY)) {
      stopTickling(event);
      return;
    }

    const movementX = event.clientX - ticklingLastMotionPoint.x;
    const movementY = event.clientY - ticklingLastMotionPoint.y;
    if (Math.hypot(movementX, movementY) >= 0.5) {
      ticklingLastMotionPoint = { x: event.clientX, y: event.clientY };

      if (!isTicklingActive) {
        isTicklingActive = true;
        oso.classList.add("is-tickling");
        body.src = `${assetPath}tickle-body.png`;
        head.src = `${assetPath}pet.png`;

        tickleLaughTimer = window.setTimeout(() => {
          if (!isTickling || !isTicklingActive) return;
          head.src = `${assetPath}laugh-1.png`;

          tickleOpenMouthTimer = window.setTimeout(() => {
            if (!isTickling || !isTicklingActive) return;
            oso.classList.add("is-tickle-laughing");
            oso.style.setProperty("--laugh-mouth-scale-y", "0.8");
            if (isTickleMoving) {
              animateLaughMouth();
              lastMouthStretchAt = performance.now();
              playLoopingAudio(laughAudio);
            }
          }, 80);
        }, 220);
      }

      activateLaughMouthWhileMoving();
    }

    if (isTicklingActive) updateTicklingMotion(event.clientX, event.clientY);
    event.preventDefault();
  };

  const clearTicklingProperties = () => {
    for (const property of [
      "--tickle-body-x",
      "--tickle-body-y",
      "--tickle-body-skew",
      "--tickle-body-scale-x",
      "--tickle-body-scale-y",
      "--tickle-head-x",
      "--tickle-head-y",
      "--tickle-head-rotation"
    ]) {
      oso.style.removeProperty(property);
    }
  };

  const stopTickling = (event) => {
    if (!isTickling) return;
    if (event?.pointerId !== undefined && event.pointerId !== ticklingPointerId) return;

    window.clearTimeout(tickleLaughTimer);
    window.clearTimeout(tickleOpenMouthTimer);
    window.clearTimeout(tickleMouthIdleTimer);
    const didTickle = isTicklingActive;
    const capturedPointerId = ticklingPointerId;
    if (capturedPointerId !== null && tickleZone.hasPointerCapture(capturedPointerId)) {
      tickleZone.releasePointerCapture(capturedPointerId);
    }
    isTickling = false;
    isTicklingActive = false;
    ticklingPointerId = null;
    ticklingStart = null;
    ticklingLastMotionPoint = null;
    isTickleMoving = false;
    lastMouthStretchAt = 0;
    tickleMouthIdleTimer = undefined;
    stopLoopingAudio(laughAudio, true);
    oso.classList.remove("is-tickling", "is-tickle-laughing");
    clearTicklingProperties();
    oso.style.removeProperty("--laugh-mouth-scale-y");

    if (!didTickle) {
      body.src = `${assetPath}body-1.png`;
      head.src = `${assetPath}idle.png`;
      return;
    }

    isTickleResetting = true;
    oso.classList.add("is-tickle-resetting");

    body.src = `${assetPath}tickle-to-idle-body.png`;
    head.src = `${assetPath}blink-1.png`;
    const returnFrameDuration = readMilliseconds("--tickle-to-idle-duration", 180);
    const headReturnDuration = readMilliseconds("--tickle-head-return-speed", 100);
    const bodyReturnDuration = readMilliseconds("--tickle-body-return-speed", 180);
    const resetDuration = Math.max(returnFrameDuration, headReturnDuration, bodyReturnDuration);

    window.setTimeout(() => {
      if (isTickleResetting) head.src = `${assetPath}blink-2.png`;
    }, returnFrameDuration / 2);

    window.setTimeout(() => {
      if (!isTickleResetting) return;
      head.src = `${assetPath}idle.png`;
      body.src = `${assetPath}body-1.png`;
    }, returnFrameDuration);

    window.setTimeout(() => {
      if (!isTickleResetting) return;
      oso.classList.remove("is-tickle-resetting");
      isTickleResetting = false;
    }, resetDuration);
  };

  tickleZone.addEventListener("pointerdown", startTickling);
  tickleZone.addEventListener("pointermove", moveTickling);
  tickleZone.addEventListener("pointerup", stopTickling);
  tickleZone.addEventListener("pointerleave", stopTickling);
  tickleZone.addEventListener("pointercancel", stopTickling);

  const lockLaughForDebug = () => {
    if (interactionIsBusy()) return false;
    isLaughDebugLocked = true;
    headTiltMotion.classList.remove("is-tilting");
    oso.classList.add("is-tickling", "is-tickle-laughing", "is-laugh-debug-locked");
    body.src = `${assetPath}tickle-body.png`;
    head.src = `${assetPath}laugh-1.png`;
    oso.style.setProperty("--laugh-mouth-scale-y", "1");
    return true;
  };

  const unlockLaughForDebug = () => {
    if (!isLaughDebugLocked) return false;
    isLaughDebugLocked = false;
    oso.classList.remove("is-tickling", "is-tickle-laughing", "is-laugh-debug-locked");
    oso.style.removeProperty("--laugh-mouth-scale-y");
    body.src = `${assetPath}body-1.png`;
    head.src = `${assetPath}idle.png`;
    return true;
  };

  Object.defineProperty(window, "pettingOsoDebug", {
    configurable: true,
    value: Object.freeze({
      lockLaugh: lockLaughForDebug,
      unlockLaugh: unlockLaughForDebug
    })
  });
})();
