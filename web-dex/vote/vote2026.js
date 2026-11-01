(function initializeVote2026Demo() {
  const pillarButtons = Array.from(document.querySelectorAll("[data-vote-pillar]"));
  const categoryList = document.getElementById("voteCategoryList");
  const creatureGrid = document.getElementById("voteCreatureGrid");
  const selectionList = document.getElementById("voteSelectionList");
  const resetButton = document.getElementById("voteResetButton");
  const submitButton = document.getElementById("voteSubmitButton");

  if (
    !categoryList ||
    !creatureGrid ||
    !selectionList ||
    !resetButton ||
    !submitButton
  ) {
    return;
  }

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

  const selectedCreatures = [];
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
    card.setAttribute(
      "aria-label",
      `${selected ? "Remove" : "Select"} #${creature.id} ${creature.name}`
    );

    image.className = "vote-creature-image";
    image.src = `../info-data/creature-data/creature-image/${creature.image}`;
    image.alt = creature.name;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = `../info-data/creature-data/creature-icon/${creature.icon}`;
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
      text.textContent = creature
        ? creature.name
        : `Select creature ${index + 1}`;

      item.append(check, text);
      selectionList.appendChild(item);
    }

    submitButton.disabled = selectedCreatures.length === 0;
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
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.votePillar === activePillar)
      );
    });

    renderCategories();
    renderCreatures();
  }

  pillarButtons.forEach(button => {
    button.addEventListener("click", () => {
      setActivePillar(button.dataset.votePillar);
    });
  });

  resetButton.addEventListener("click", () => {
    selectedCreatures.splice(0, selectedCreatures.length);
    renderCreatures();
    renderSelection();
  });

  renderCategories();
  renderCreatures();
  renderSelection();
})();
