(() => {
  const background = document.getElementById("quizBackground");
  if (!background) return;

  let resizeFrame = 0;

  const updateBackgroundMode = () => {
    resizeFrame = 0;

    const width = window.innerWidth;
    const height = window.innerHeight;
    let mode = "pc";

    if (width <= 767) {
      mode = "mobile";
    } else if (width <= 1199) {
      mode = width > height ? "tablet-landscape" : "tablet-portrait";
    }

    background.dataset.mode = mode;
    document.documentElement.style.setProperty("--quiz-background-height", `${height}px`);
  };

  const scheduleBackgroundUpdate = () => {
    if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(updateBackgroundMode);
  };

  updateBackgroundMode();
  window.addEventListener("resize", scheduleBackgroundUpdate, { passive: true });
  window.addEventListener("orientationchange", scheduleBackgroundUpdate, { passive: true });
})();

