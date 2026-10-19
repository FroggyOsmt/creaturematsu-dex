(() => {
  const questionView = document.getElementById("quizQuestionView");
  const hintButton = document.getElementById("quizHintButton");
  const hintImage = document.getElementById("quizHintImage");
  const hintProgress = document.getElementById("quizHintProgressValue");
  const hintStars = document.getElementById("quizHintStars");
  const nextButton = document.getElementById("quizNextButton");
  const answers = [...questionView.querySelectorAll(".quiz-answer")];

  if (
    !questionView ||
    !hintButton ||
    !hintImage ||
    !hintProgress ||
    !hintStars ||
    !nextButton ||
    answers.length < 3
  ) return;

  const hintDelay = 10000;
  const hintStarDirections = Array.from({ length: 9 }, (_, index) => {
    const angle = -Math.PI / 2 + index * (Math.PI * 2 / 9);
    return { x: Math.cos(angle), y: Math.sin(angle) };
  });

  let progressFrame = 0;
  let completionTimer = 0;
  let turningOnTimer = 0;
  let clickTimer = 0;
  let starCleanupTimer = 0;
  let startedAt = 0;
  let isReady = false;
  let hintsUsed = 0;
  let hintPenalty = 0;
  let incorrectAnswerOrder = [];

  const shuffleAnswers = list => {
    const shuffled = [...list];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
  };

  const stopTimers = () => {
    window.cancelAnimationFrame(progressFrame);
    window.clearTimeout(completionTimer);
    window.clearTimeout(turningOnTimer);
    window.clearTimeout(clickTimer);
    window.clearTimeout(starCleanupTimer);
    progressFrame = 0;
    completionTimer = 0;
  };

  const createHintStarBurst = () => {
    window.clearTimeout(starCleanupTimer);
    hintStars.replaceChildren();

    hintStarDirections.forEach(({ x, y }, index) => {
      const star = document.createElement("span");
      const radius = 42 + Math.random() * 15;
      const randomSize = 7 + Math.round(Math.random() * 7);

      star.className = "quiz-hint-star";
      star.style.setProperty("--hint-star-x", `${(x * radius).toFixed(1)}px`);
      star.style.setProperty("--hint-star-y", `${(y * radius).toFixed(1)}px`);
      star.style.setProperty("--hint-star-size", `${randomSize}px`);
      star.style.setProperty("--hint-star-rotation", `${Math.round(Math.random() * 100 - 50)}deg`);
      star.style.setProperty("--hint-star-duration", `${560 + Math.round(Math.random() * 130)}ms`);
      star.style.setProperty("--hint-star-delay", `${index * 9}ms`);
      hintStars.append(star);
    });

    starCleanupTimer = window.setTimeout(() => {
      hintStars.replaceChildren();
    }, 900);
  };

  const resetHint = ({ hide = false } = {}) => {
    stopTimers();
    isReady = false;
    hintButton.hidden = hide;
    hintButton.disabled = true;
    hintButton.classList.remove("is-ready", "is-turning-on", "is-clicked", "is-exhausted");
    hintButton.setAttribute("aria-label", "Hint available in 10 seconds");
    hintImage.src = "quiz-images/light-off.png";
    hintProgress.style.strokeDashoffset = "100";
    hintStars.replaceChildren();
  };

  const completeHint = () => {
    if (questionView.hidden || isReady) return;

    window.cancelAnimationFrame(progressFrame);
    progressFrame = 0;
    isReady = true;
    hintProgress.style.strokeDashoffset = "0";
    hintImage.src = "quiz-images/light-on.png";
    hintButton.disabled = false;
    hintButton.classList.add("is-ready", "is-turning-on");
    hintButton.setAttribute("aria-label", "Hint ready");
    createHintStarBurst();

    turningOnTimer = window.setTimeout(() => {
      hintButton.classList.remove("is-turning-on");
    }, 720);
  };

  const updateProgress = now => {
    if (questionView.hidden || isReady) return;

    const elapsed = Math.min(now - startedAt, hintDelay);
    const progress = elapsed / hintDelay;
    const secondsRemaining = Math.max(0, Math.ceil((hintDelay - elapsed) / 1000));

    hintProgress.style.strokeDashoffset = String(100 - progress * 100);
    hintButton.setAttribute(
      "aria-label",
      `Hint available in ${secondsRemaining} second${secondsRemaining === 1 ? "" : "s"}`
    );

    if (progress < 1) {
      progressFrame = window.requestAnimationFrame(updateProgress);
    }
  };

  const startHintCountdown = () => {
    if (questionView.hidden || hintsUsed >= 2) return;

    resetHint();
    hintButton.hidden = false;
    startedAt = performance.now();
    progressFrame = window.requestAnimationFrame(updateProgress);
    completionTimer = window.setTimeout(completeHint, hintDelay);
  };

  const resetQuestionHints = () => {
    const correctAnswer = questionView.dataset.correctAnswer || "A";

    hintsUsed = 0;
    hintPenalty = 0;
    incorrectAnswerOrder = shuffleAnswers(
      answers.filter(answer => answer.dataset.answer !== correctAnswer)
    );

    answers.forEach(answer => {
      if (answer.classList.contains("is-hint-eliminated")) {
        answer.disabled = false;
      }
      answer.classList.remove("is-hint-eliminated");
    });

    questionView.dataset.hintUses = "0";
    questionView.dataset.hintPenalty = "0";
    questionView.dataset.questionPoints = "10";
    questionView.dataset.assistedVictory = "false";
  };

  const eliminateIncorrectAnswer = () => {
    const eliminatedAnswer = incorrectAnswerOrder.find(answer => !answer.disabled);

    if (!eliminatedAnswer) return null;

    const wasSelected = eliminatedAnswer.getAttribute("aria-pressed") === "true";
    eliminatedAnswer.disabled = true;
    eliminatedAnswer.classList.remove("is-selected", "is-celebrating");
    eliminatedAnswer.classList.add("is-hint-eliminated");
    eliminatedAnswer.querySelector(".quiz-answer-stars")?.remove();
    eliminatedAnswer.setAttribute("aria-pressed", "false");

    if (wasSelected) nextButton.disabled = true;

    return eliminatedAnswer;
  };

  const useHint = () => {
    const eliminatedAnswer = eliminateIncorrectAnswer();

    if (!eliminatedAnswer) return;

    hintsUsed += 1;
    const addedPenalty = hintsUsed === 1 ? 5 : 2.5;
    hintPenalty += addedPenalty;
    const assistedVictory = hintsUsed === 2;

    questionView.dataset.hintUses = String(hintsUsed);
    questionView.dataset.hintPenalty = String(hintPenalty);
    questionView.dataset.questionPoints = String(10 - hintPenalty);
    questionView.dataset.assistedVictory = String(assistedVictory);

    hintButton.dispatchEvent(new CustomEvent("matsuquiz:hint", {
      bubbles: true,
      detail: {
        hintNumber: hintsUsed,
        addedPenalty,
        totalPenalty: hintPenalty,
        pointsRemaining: 10 - hintPenalty,
        eliminatedAnswer: eliminatedAnswer.dataset.answer,
        assistedVictory
      }
    }));
  };

  const syncHintWithQuiz = () => {
    if (questionView.hidden) {
      resetHint({ hide: true });
      return;
    }

    resetQuestionHints();
    startHintCountdown();
  };

  hintButton.addEventListener("click", () => {
    if (!isReady) return;

    isReady = false;
    hintButton.disabled = true;
    window.clearTimeout(clickTimer);
    hintButton.classList.remove("is-clicked");
    void hintButton.offsetWidth;
    hintButton.classList.add("is-clicked");
    useHint();

    clickTimer = window.setTimeout(() => {
      hintButton.classList.remove("is-clicked");

      if (hintsUsed < 2) {
        startHintCountdown();
        return;
      }

      hintButton.classList.remove("is-ready", "is-turning-on");
      hintButton.classList.add("is-exhausted");
      hintButton.setAttribute("aria-label", "All hints used");
      hintImage.src = "quiz-images/light-off.png";
      hintProgress.style.strokeDashoffset = "100";
    }, 360);
  });

  const questionObserver = new MutationObserver(syncHintWithQuiz);
  questionObserver.observe(questionView, {
    attributes: true,
    attributeFilter: ["hidden"]
  });

  syncHintWithQuiz();
})();
