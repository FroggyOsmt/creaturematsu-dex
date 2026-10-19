(() => {
  try {
    localStorage.setItem(
      "creaturematsu-matsu-quiz-seen-v0.2.x",
      "true"
    );
  } catch (error) {
    // El quiz sigue funcionando aunque el navegador bloquee localStorage.
  }

  const answerStarPattern = [
    { x: -27, y: -18, rotation: -28, delay: 0 },
    { x: 0, y: -35, rotation: 18, delay: 20 },
    { x: 28, y: -22, rotation: 42, delay: 35 },
    { x: 36, y: 3, rotation: 70, delay: 10 },
    { x: 21, y: 29, rotation: 34, delay: 45 },
    { x: -8, y: 35, rotation: -12, delay: 25 },
    { x: -33, y: 17, rotation: -48, delay: 55 }
  ];

  const createAnswerStarBurst = answer => {
    const burst = document.createElement("span");
    burst.className = "quiz-answer-stars";
    burst.setAttribute("aria-hidden", "true");

    answerStarPattern.forEach(({ x, y, rotation, delay }) => {
      const star = document.createElement("span");
      const randomSize = 7 + Math.round(Math.random() * 8);
      star.className = "quiz-answer-star";
      star.style.setProperty("--star-x", `${x}px`);
      star.style.setProperty("--star-y", `${y}px`);
      star.style.setProperty("--star-size", `${randomSize}px`);
      star.style.setProperty("--star-rotation", `${rotation}deg`);
      star.style.setProperty("--star-delay", `${delay}ms`);
      burst.append(star);
    });

    answer.append(burst);
    return burst;
  };

  document.addEventListener("click", event => {
    const answer = event.target.closest(".quiz-answer");

    if (!answer || answer.disabled) return;

    const answers = document.querySelectorAll(".quiz-answer");
    const nextButton = document.getElementById("quizNextButton");

    answers.forEach(option => {
      const isSelected = option === answer;
      option.classList.toggle("is-selected", isSelected);
      option.classList.remove("is-celebrating");
      option.querySelector(".quiz-answer-stars")?.remove();
      option.setAttribute("aria-pressed", String(isSelected));
    });

    const starBurst = createAnswerStarBurst(answer);
    void answer.offsetWidth;
    answer.classList.add("is-celebrating");
    window.setTimeout(() => {
      answer.classList.remove("is-celebrating");
      starBurst.remove();
    }, 650);

    if (nextButton) nextButton.disabled = false;
  });
})();
