(() => {
  const splash = document.getElementById("matsuSplash");
  const splashTip = document.getElementById("matsuSplashTip");
  const quiz = document.getElementById("matsu-game");

  const tips = [
    "Read carefully! Some questions can be tricky.",
    "Not sure? Trust your Matsu instincts!",
    "Wrong answers are okay! You might learn something new about little buggies."
  ];

  if (!splash) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      splash.classList.add("show");
    });
  });

  if (splashTip) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const tipLabel = document.createElement("span");
    const tipText = document.createElement("span");

    tipLabel.className = "matsu-splash-tip-label";
    tipLabel.textContent = "TIP:";
    tipText.className = "matsu-splash-tip-text";
    tipText.textContent = randomTip;
    splashTip.append(tipLabel, tipText);
  }

  window.addEventListener("load", () => {
    window.setTimeout(() => {
      let revealFallback;

      const revealQuiz = event => {
        if (event && event.propertyName !== "opacity") return;

        splash.removeEventListener("transitionend", revealQuiz);
        window.clearTimeout(revealFallback);
        quiz?.classList.add("is-ready");
        quiz?.setAttribute("aria-hidden", "false");
      };

      splash.addEventListener("transitionend", revealQuiz);
      splash.classList.add("hide");
      revealFallback = window.setTimeout(revealQuiz, 800);
    }, 2500);
  }, { once: true });
})();
