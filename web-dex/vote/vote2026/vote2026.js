(async function initializeVote2026() {
  const DRAFT_STORAGE_KEY = "creaturematsu-vote2026-draft-v1";
  const LOCAL_ID_STORAGE_KEY = "creaturematsu-vote2026-local-id-v1";
  const RECEIPT_STORAGE_KEY = "creaturematsu-vote2026-receipt-v1";
  const VOTED_STORAGE_KEY = "creaturematsu-vote2026-voted-v1";
  const CONFIRM_PATH = "/vote2026/confirm";
  const THANKS_PATH = "/vote2026/thanks";
  const closeConfig = globalThis.CLOSE2026_CONFIG || {
    active: false,
    year: 2026,
    message: "Top of the Favorite Creature 2026 voting is currently closed."
  };

  const pillarCategories = {
    ORIGINS: [
      { label: "ELEMENTAL", creatures: elemental },
      { label: "STATUS", creatures: status },
      { label: "TOOL", creatures: tool },
      { label: "CRAFT", creatures: craft },
      { label: "COMBAT", creatures: combat },
      { label: "WORKER", creatures: worker }
    ],
    VARIATIONS: [
      { label: "OSO", creatures: secondPillarOso },
      { label: "KARA", creatures: secondPillarKara },
      { label: "CHORO", creatures: secondPillarChoro },
      { label: "ICHI", creatures: secondPillarIchi },
      { label: "JYUSHI", creatures: secondPillarJyushi },
      { label: "TODO", creatures: secondPillarTodo }
    ]
  };

  const matsuColors = {
    oso: "#EF5350",
    kara: "#64B5F6",
    choro: "#9CCC65",
    ichi: "#BA68C8",
    jyushi: "#FFD54F",
    todo: "#F06292"
  };

  const lightMatsuColors = {
    oso: "#FF807D",
    kara: "#91E2FF",
    choro: "#C9F992",
    ichi: "#E795F5",
    jyushi: "#FFFF7C",
    todo: "#FF8FBF"
  };

  const allCreatures = Object.values(pillarCategories)
    .flatMap(categories => categories)
    .flatMap(category => category.creatures);
  const creaturesById = new Map(
    allCreatures.map(creature => [String(creature.id), creature])
  );

  function readDraftIds() {
    try {
      const draft = JSON.parse(sessionStorage.getItem(DRAFT_STORAGE_KEY) || "null");
      if (!draft || !Array.isArray(draft.candidateIds)) return [];
      return draft.candidateIds
        .map(id => String(id))
        .filter((id, index, ids) => creaturesById.has(id) && ids.indexOf(id) === index)
        .slice(0, 3);
    } catch {
      return [];
    }
  }

  function saveDraft(creatures) {
    sessionStorage.setItem(
      DRAFT_STORAGE_KEY,
      JSON.stringify({ candidateIds: creatures.map(creature => String(creature.id)) })
    );
  }

  function creatureImagePath(creature) {
    return `/info-data/creature-data/creature-image/${creature.image}`;
  }

  function creatureIconPath(creature) {
    return `/info-data/creature-data/creature-icon/${creature.icon}`;
  }

  function createReviewCard(creature) {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const id = document.createElement("span");
    const name = document.createElement("strong");

    card.className = "vote-confirmation-card";
    card.style.setProperty(
      "--vote-card-color",
      matsuColors[creature.matsu] || "#EFB775"
    );

    image.className = "vote-confirmation-image";
    image.src = creatureImagePath(creature);
    image.alt = creature.name;
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = creatureIconPath(creature);
    });

    id.className = "vote-confirmation-id";
    id.textContent = `#${creature.id}`;
    name.className = "vote-confirmation-name";
    name.textContent = creature.name;

    card.append(image, id, name);
    return card;
  }

  function getOrCreateLocalId() {
    const existing = localStorage.getItem(LOCAL_ID_STORAGE_KEY);
    if (existing && existing.length >= 16) return existing;

    const created = typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${crypto.getRandomValues(new Uint32Array(4)).join("-")}`;
    localStorage.setItem(LOCAL_ID_STORAGE_KEY, created);
    return created;
  }

  function rememberConfirmedVote(endsAt = null) {
    localStorage.setItem(
      VOTED_STORAGE_KEY,
      JSON.stringify({ confirmed: true, endsAt })
    );
  }

  function forgetConfirmedVote() {
    localStorage.removeItem(VOTED_STORAGE_KEY);
    sessionStorage.removeItem(RECEIPT_STORAGE_KEY);
  }

  function hasStoredConfirmedVote() {
    try {
      const storedVote = JSON.parse(localStorage.getItem(VOTED_STORAGE_KEY) || "null");
      if (storedVote?.confirmed) return true;

      const receipt = JSON.parse(sessionStorage.getItem(RECEIPT_STORAGE_KEY) || "null");
      if (!receipt?.confirmed) return false;
      rememberConfirmedVote(receipt.endsAt || null);
      return true;
    } catch {
      return false;
    }
  }

  async function checkServerVotingStatus() {
    try {
      const localId = localStorage.getItem(LOCAL_ID_STORAGE_KEY);
      if (!localId || localId.length < 16) {
        forgetConfirmedVote();
        return false;
      }

      const response = await fetch("/api/vote2026/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ localId })
      });
      if (!response.ok) return null;

      const result = await response.json();
      if (!result.hasVoted) {
        forgetConfirmedVote();
        return false;
      }
      rememberConfirmedVote(result.endsAt || null);
      return true;
    } catch (error) {
      console.warn("[VOTE 2026] Voting status could not be checked.", error);
      return null;
    }
  }

  function replaceDialogContent(content) {
    const dialogInner = document.querySelector(".vote-dialog-inner");
    if (!dialogInner) return false;
    dialogInner.replaceChildren(content);
    return true;
  }

  function renderConfirmationPage() {
    const selectedCreatures = readDraftIds()
      .map(id => creaturesById.get(id))
      .filter(Boolean);

    if (selectedCreatures.length < 1 || selectedCreatures.length > 3) {
      window.location.replace("/vote2026");
      return;
    }

    document.body.classList.add("vote-confirmation-view");

    const page = document.createElement("section");
    const title = document.createElement("h1");
    const text = document.createElement("p");
    const cards = document.createElement("div");
    const actions = document.createElement("div");
    const backButton = document.createElement("button");
    const voteButton = document.createElement("button");

    page.className = "vote-confirmation";
    page.setAttribute("aria-labelledby", "voteConfirmationTitle");
    title.className = "vote-confirmation-title";
    title.id = "voteConfirmationTitle";
    title.textContent = "Confirm Your Vote";
    text.className = "vote-confirmation-text";
    text.textContent = "You chose these creatures as your favorites. Are you ready to vote for them?";
    cards.className = "vote-confirmation-cards";
    cards.id = "voteConfirmationCards";
    selectedCreatures.forEach(creature => cards.appendChild(createReviewCard(creature)));

    actions.className = "vote-confirmation-actions";
    backButton.className = "vote-action-button vote-reset-button";
    backButton.type = "button";
    backButton.textContent = "BACK";
    voteButton.className = "vote-action-button vote-submit-button";
    voteButton.type = "button";
    voteButton.textContent = "VOTE";

    backButton.addEventListener("click", () => {
      window.location.assign("/vote2026");
    });

    voteButton.addEventListener("click", async () => {
      voteButton.disabled = true;
      backButton.disabled = true;

      try {
        const response = await fetch("/api/vote2026/ballots", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            localId: getOrCreateLocalId(),
            candidateIds: selectedCreatures.map(creature => String(creature.id))
          })
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(result.message || "Your vote could not be confirmed.");
        }

        sessionStorage.setItem(
          RECEIPT_STORAGE_KEY,
          JSON.stringify({ confirmed: true, endsAt: result.endsAt || null })
        );
        rememberConfirmedVote(result.endsAt || null);
        sessionStorage.removeItem(DRAFT_STORAGE_KEY);
        window.location.assign(THANKS_PATH);
      } catch (error) {
        console.error("[VOTE 2026] Confirmation failed.", error);
        voteButton.disabled = false;
        backButton.disabled = false;
      }
    });

    actions.append(backButton, voteButton);
    page.append(title, text, cards, actions);
    replaceDialogContent(page);
  }

  function renderThanksPage() {
    let receipt = null;
    try {
      receipt = JSON.parse(sessionStorage.getItem(RECEIPT_STORAGE_KEY) || "null");
    } catch {
      receipt = null;
    }

    if (!receipt?.confirmed) {
      window.location.replace("/vote2026");
      return;
    }

    document.body.classList.add("vote-thanks-view");

    const page = document.createElement("section");
    const title = document.createElement("h1");
    const text = document.createElement("p");

    page.className = "vote-thanks";
    page.setAttribute("aria-labelledby", "voteThanksTitle");
    title.className = "vote-thanks-title";
    title.id = "voteThanksTitle";
    title.textContent = "Thank You for Voting!";
    text.className = "vote-thanks-text";
    text.textContent = "Please wait a few days for the results.";

    page.append(title, text);
    replaceDialogContent(page);
  }

  function renderAlreadyVotedPage() {
    document.body.classList.add("vote-thanks-view", "vote-already-voted-view");

    const page = document.createElement("section");
    const text = document.createElement("p");

    page.className = "vote-thanks vote-already-voted";
    page.setAttribute("aria-label", "Already voted");
    text.className = "vote-thanks-text";
    text.textContent = "You have already voted. Please wait a few days for the results.";

    page.append(text);
    replaceDialogContent(page);
  }

  function renderClosedPage() {
    document.body.classList.add(
      "vote-thanks-view",
      "vote-already-voted-view",
      "vote-closed-view"
    );

    const page = document.createElement("section");
    const text = document.createElement("p");

    page.className = "vote-thanks vote-already-voted vote-closed";
    page.setAttribute("aria-label", `Voting closed for ${closeConfig.year}`);
    text.className = "vote-thanks-text";
    text.textContent = closeConfig.message;

    page.append(text);
    replaceDialogContent(page);
  }

  const normalizedPath = window.location.pathname.replace(/\/+$/, "");
  if (closeConfig.active) {
    document.documentElement.classList.remove(
      "vote-status-loading",
      "vote-confirmation-loading"
    );
    renderClosedPage();
    return;
  }

  if (normalizedPath === CONFIRM_PATH) {
    renderConfirmationPage();
    return;
  }
  if (normalizedPath === THANKS_PATH) {
    renderThanksPage();
    return;
  }

  if (normalizedPath === "/vote2026") {
    const serverVotingStatus = await checkServerVotingStatus();
    const hasAlreadyVoted = serverVotingStatus === null
      ? hasStoredConfirmedVote()
      : serverVotingStatus;
    document.documentElement.classList.remove("vote-status-loading");
    if (hasAlreadyVoted) {
      renderAlreadyVotedPage();
      return;
    }
  }

  const pillarButtons = Array.from(document.querySelectorAll("[data-vote-pillar]"));
  const categoryList = document.getElementById("voteCategoryList");
  const creatureGrid = document.getElementById("voteCreatureGrid");
  const selectionList = document.getElementById("voteSelectionList");
  const resetButton = document.getElementById("voteResetButton");
  const submitButton = document.getElementById("voteSubmitButton");

  if (!categoryList || !creatureGrid || !selectionList || !resetButton || !submitButton) {
    return;
  }

  const selectedCreatures = readDraftIds()
    .map(id => creaturesById.get(id))
    .filter(Boolean);
  let activePillar = "ORIGINS";
  let activeCategoryIndex = 0;

  function isSelected(creatureId) {
    return selectedCreatures.some(creature => creature.id === creatureId);
  }

  function createCategoryButton(category, index) {
    const button = document.createElement("button");
    button.className = "vote-category-button";
    button.type = "button";
    button.textContent = category.label;
    button.setAttribute("aria-pressed", String(index === activeCategoryIndex));
    button.addEventListener("click", () => {
      activeCategoryIndex = index;
      renderCategories();
      renderCreatures();
    });
    return button;
  }

  function renderCategories() {
    categoryList.replaceChildren();
    pillarCategories[activePillar].forEach((category, index) => {
      categoryList.appendChild(createCategoryButton(category, index));
    });
  }

  function createCreatureCard(creature) {
    const card = document.createElement("button");
    const image = document.createElement("img");
    const id = document.createElement("span");
    const name = document.createElement("span");
    const check = document.createElement("span");
    const selected = isSelected(creature.id);

    card.className = "vote-creature-card";
    card.type = "button";
    card.style.setProperty("--vote-card-color", matsuColors[creature.matsu] || "#EFB775");
    card.setAttribute("aria-pressed", String(selected));
    card.setAttribute("aria-label", `${selected ? "Remove" : "Select"} #${creature.id} ${creature.name}`);

    image.className = "vote-creature-image";
    image.src = creatureImagePath(creature);
    image.alt = creature.name;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = creatureIconPath(creature);
    });

    id.className = "vote-creature-id";
    id.textContent = `#${creature.id}`;
    name.className = "vote-creature-name";
    name.textContent = creature.name;
    check.className = "vote-card-check";
    check.textContent = "✓";
    check.setAttribute("aria-hidden", "true");

    card.append(image, id, name, check);
    card.addEventListener("click", () => toggleCreature(creature));
    return card;
  }

  function renderCreatures() {
    const category = pillarCategories[activePillar][activeCategoryIndex];
    creatureGrid.replaceChildren();
    category.creatures.forEach(creature => {
      creatureGrid.appendChild(createCreatureCard(creature));
    });
  }

  function renderSelection() {
    selectionList.replaceChildren();

    for (let index = 0; index < 3; index += 1) {
      const creature = selectedCreatures[index];
      const item = document.createElement("li");
      const check = document.createElement("span");
      const text = document.createElement("span");

      item.className = `vote-selection-item${creature ? "" : " is-empty"}`;
      if (creature) {
        item.style.setProperty(
          "--vote-selection-color",
          lightMatsuColors[creature.matsu] || "#FFE2C1"
        );
      }
      check.className = "vote-selection-check";
      check.textContent = creature ? "✓" : String(index + 1);
      check.setAttribute("aria-hidden", "true");
      text.textContent = creature ? creature.name : `Select creature ${index + 1}`;

      item.append(check, text);
      selectionList.appendChild(item);
    }

    submitButton.disabled = selectedCreatures.length < 1;
    saveDraft(selectedCreatures);
  }

  function toggleCreature(creature) {
    const selectedIndex = selectedCreatures.findIndex(item => item.id === creature.id);

    if (selectedIndex >= 0) {
      selectedCreatures.splice(selectedIndex, 1);
    } else if (selectedCreatures.length < 3) {
      selectedCreatures.push(creature);
    } else {
      return;
    }

    renderCreatures();
    renderSelection();
  }

  function setActivePillar(pillar) {
    activePillar = pillar;
    activeCategoryIndex = 0;
    pillarButtons.forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.votePillar === activePillar));
    });
    renderCategories();
    renderCreatures();
  }

  pillarButtons.forEach(button => {
    button.addEventListener("click", () => setActivePillar(button.dataset.votePillar));
  });

  resetButton.addEventListener("click", () => {
    selectedCreatures.splice(0, selectedCreatures.length);
    sessionStorage.removeItem(DRAFT_STORAGE_KEY);
    renderCreatures();
    renderSelection();
  });

  submitButton.addEventListener("click", () => {
    if (selectedCreatures.length < 1 || selectedCreatures.length > 3) return;
    saveDraft(selectedCreatures);
    window.location.assign(CONFIRM_PATH);
  });

  renderCategories();
  renderCreatures();
  renderSelection();
})();
