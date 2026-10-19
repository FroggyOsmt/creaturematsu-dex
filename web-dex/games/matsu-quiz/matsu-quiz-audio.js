(() => {
  const backgroundMusic = document.getElementById("matsuQuizBackgroundMusic");
  if (!backgroundMusic) return;

  const targetVolume = 0.045;
  const fadeDuration = 1800;
  const loopFadeVolume = 0.015;
  const loopFadeDuration = 3000;
  let fadeFrame = 0;
  let hasStarted = false;
  let startPromise = null;
  let loopFadeStarted = false;

  backgroundMusic.volume = 0;
  backgroundMusic.loop = false;

  const fadeIn = () => {
    window.cancelAnimationFrame(fadeFrame);
    const initialVolume = backgroundMusic.volume;
    const startedAt = performance.now();

    const updateVolume = now => {
      const progress = Math.min(1, (now - startedAt) / fadeDuration);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      backgroundMusic.volume = initialVolume
        + (targetVolume - initialVolume) * easedProgress;

      if (progress < 1) {
        fadeFrame = window.requestAnimationFrame(updateVolume);
      }
    };

    fadeFrame = window.requestAnimationFrame(updateVolume);
  };

  const fadeOutForLoop = () => {
    if (loopFadeStarted) return;

    loopFadeStarted = true;
    window.cancelAnimationFrame(fadeFrame);

    const initialVolume = backgroundMusic.volume;
    const remainingDuration = Math.max(
      0,
      (backgroundMusic.duration - backgroundMusic.currentTime) * 1000
    );
    const activeDuration = Math.min(loopFadeDuration, remainingDuration);
    const startedAt = performance.now();

    const updateVolume = now => {
      const progress = activeDuration > 0
        ? Math.min(1, (now - startedAt) / activeDuration)
        : 1;
      const easedProgress = progress * progress;

      backgroundMusic.volume = initialVolume
        + (loopFadeVolume - initialVolume) * easedProgress;

      if (progress < 1 && !backgroundMusic.ended) {
        fadeFrame = window.requestAnimationFrame(updateVolume);
      }
    };

    fadeFrame = window.requestAnimationFrame(updateVolume);
  };

  const stopWaitingForInteraction = () => {
    window.removeEventListener("pointerdown", startAfterInteraction, true);
    window.removeEventListener("keydown", startAfterInteraction, true);
  };

  const startMusic = () => {
    if (!backgroundMusic.paused) {
      hasStarted = true;
      stopWaitingForInteraction();
      fadeIn();
      return Promise.resolve();
    }

    if (startPromise) return startPromise;

    startPromise = backgroundMusic.play()
      .then(() => {
        hasStarted = true;
        stopWaitingForInteraction();
        fadeIn();
      })
      .catch(() => {
        hasStarted = false;
        waitForInteraction();
      })
      .finally(() => {
        startPromise = null;
      });

    return startPromise;
  };

  const startAfterInteraction = () => {
    if (!hasStarted || backgroundMusic.paused) startMusic();
  };

  const waitForInteraction = () => {
    window.addEventListener("pointerdown", startAfterInteraction, true);
    window.addEventListener("keydown", startAfterInteraction, true);
  };

  waitForInteraction();

  backgroundMusic.addEventListener("timeupdate", () => {
    if (
      loopFadeStarted ||
      !Number.isFinite(backgroundMusic.duration)
    ) {
      return;
    }

    const remainingTime = backgroundMusic.duration - backgroundMusic.currentTime;

    if (remainingTime > 0 && remainingTime <= loopFadeDuration / 1000) {
      fadeOutForLoop();
    }
  });

  backgroundMusic.addEventListener("ended", () => {
    window.cancelAnimationFrame(fadeFrame);
    backgroundMusic.currentTime = 0;
    backgroundMusic.volume = loopFadeVolume;
    loopFadeStarted = false;

    backgroundMusic.play()
      .then(() => {
        hasStarted = true;
        stopWaitingForInteraction();
        fadeIn();
      })
      .catch(() => {
        hasStarted = false;
        waitForInteraction();
      });
  });

  startMusic();

  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(fadeFrame);
    backgroundMusic.pause();
  });
})();
