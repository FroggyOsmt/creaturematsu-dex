(() => {
  const backgroundMusic = document.getElementById("matsuQuizBackgroundMusic");
  if (!backgroundMusic) return;

  const targetVolume = 0.045;
  const fadeDuration = 1800;
  let fadeFrame = 0;
  let hasStarted = false;

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

  const startMusic = () => {
    if (!backgroundMusic.paused) return;

    backgroundMusic.play()
      .then(() => {
        hasStarted = true;
        fadeIn();
      })
      .catch(() => {
        hasStarted = false;
      });
  };

  startMusic();

  const startAfterInteraction = () => {
    if (!hasStarted || backgroundMusic.paused) startMusic();
  };

  window.addEventListener("pointerdown", startAfterInteraction, {
    once: true,
    capture: true
  });

  window.addEventListener("keydown", startAfterInteraction, {
    once: true,
    capture: true
  });

  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(fadeFrame);
    backgroundMusic.pause();
  });
})();
