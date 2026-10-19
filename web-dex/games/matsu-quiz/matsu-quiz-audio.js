(() => {
  const backgroundMusic = document.getElementById("matsuQuizBackgroundMusic");
  if (!backgroundMusic) return;

  const targetVolume = 0.12;
  const fadeDuration = 1800;
  let fadeFrame = 0;
  let hasStarted = false;
  let startPromise = null;

  backgroundMusic.volume = 0;

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
      })
      .finally(() => {
        startPromise = null;
      });

    return startPromise;
  };

  const startAfterInteraction = () => {
    if (!hasStarted || backgroundMusic.paused) startMusic();
  };

  window.addEventListener("pointerdown", startAfterInteraction, true);
  window.addEventListener("keydown", startAfterInteraction, true);

  startMusic();

  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(fadeFrame);
    backgroundMusic.pause();
  });
})();
