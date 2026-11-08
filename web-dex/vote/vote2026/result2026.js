(async function initializeResult2026() {
  const matsuColors = {
    oso: "#EF5350",
    kara: "#64B5F6",
    choro: "#9CCC65",
    ichi: "#BA68C8",
    jyushi: "#FFD54F",
    todo: "#F06292"
  };

  const ordinalNames = {
    1: "First",
    2: "Second",
    3: "Third",
    4: "Fourth",
    5: "Fifth",
    6: "Sixth"
  };

  const stickerAngles = {
    1: 0,
    2: -3.4,
    3: 2.8,
    4: -2.2,
    5: 4.1,
    6: -4.3
  };

  const allCreatures = [
    elemental,
    status,
    tool,
    craft,
    combat,
    worker,
    secondPillarOso,
    secondPillarKara,
    secondPillarChoro,
    secondPillarIchi,
    secondPillarJyushi,
    secondPillarTodo
  ].flat();

  const creaturesById = new Map(
    allCreatures.map(creature => [String(creature.id), creature])
  );

  const resultState = document.getElementById("resultState");
  const resultStateText = document.getElementById("resultStateText");
  const albumSheet = document.getElementById("albumSheet");
  const revealPanel = document.getElementById("revealPanel");
  const revealButton = document.getElementById("revealResultsButton");
  const resultSummary = document.getElementById("resultSummary");
  const summaryParticipants = document.getElementById("summaryParticipants");
  const summaryParticipantCount = document.getElementById("summaryParticipantCount");
  const summaryParticipantLabel = document.getElementById("summaryParticipantLabel");
  const summaryCreatures = document.getElementById("summaryCreatures");
  const summaryPoints = document.getElementById("summaryPoints");
  const summaryNoVotesButton = document.getElementById("summaryNoVotesButton");
  const detailsDialog = document.getElementById("resultDetailsDialog");
  const dialogTitle = document.getElementById("resultDialogTitle");
  const dialogContent = document.getElementById("resultDialogContent");
  const dialogClose = document.getElementById("resultDialogClose");
  const stickerSound = document.getElementById("stickerSound");
  const medalSound = document.getElementById("medalSound");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileResultsQuery = window.matchMedia("(max-width: 560px)");
  let dialogIsClosing = false;
  let pendingDialogScrollY = null;
  let pageScrollIsLocked = false;
  let creaturesWithoutVotes = [];

  if (
    !resultState ||
    !resultStateText ||
    !albumSheet ||
    !revealPanel ||
    !revealButton ||
    !resultSummary ||
    !summaryParticipants ||
    !summaryParticipantCount ||
    !summaryParticipantLabel ||
    !summaryCreatures ||
    !summaryPoints ||
    !summaryNoVotesButton ||
    !detailsDialog ||
    !dialogTitle ||
    !dialogContent ||
    !dialogClose ||
    !stickerSound ||
    !medalSound
  ) {
    return;
  }

  stickerSound.volume = 0.22;
  medalSound.volume = 0.18;

  function creatureImagePath(creature) {
    return `/info-data/creature-data/creature-image/${creature?.image || ""}`;
  }

  function creatureIconPath(creature) {
    return `/info-data/creature-data/creature-icon/${creature?.icon || ""}`;
  }

  function pointsLabel(points) {
    return `${points} ${points === 1 ? "point" : "points"}`;
  }

  function appendWinnerNameList(container, names) {
    const safeNames = names.length > 0 ? names : ["UNKNOWN"];

    safeNames.forEach((name, index) => {
      if (index > 0) {
        const isLast = index === safeNames.length - 1;
        const separator = isLast
          ? safeNames.length === 2 ? " and " : ", and "
          : ", ";
        container.append(document.createTextNode(separator));
      }

      const winnerName = document.createElement("strong");
      winnerName.className = "winner-name";
      winnerName.textContent = name;
      container.appendChild(winnerName);
    });

    container.append(document.createTextNode("!"));
  }

  function setWinnerMessage(message, names, isShared) {
    const intro = document.createElement("span");
    const winners = document.createElement("span");
    const detail = document.createElement("span");

    intro.className = "winner-message-intro";
    intro.textContent = "Congratulations,";
    winners.className = "winner-message-names";
    appendWinnerNameList(winners, names);
    detail.className = "winner-message-detail";
    detail.textContent = isShared
      ? "First place in the 2026 vote is shared!"
      : "You won first place in the 2026 vote!";

    message.replaceChildren(intro, winners, detail);
  }

  function wait(milliseconds) {
    return new Promise(resolve => window.setTimeout(resolve, milliseconds));
  }

  function playSound(audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  async function unlockSounds() {
    const sounds = [stickerSound, medalSound];
    await Promise.allSettled(sounds.map(async audio => {
      const previousMuted = audio.muted;
      audio.muted = true;
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
      audio.muted = previousMuted;
    }));
  }

  function createCreatureImage(creature) {
    const image = document.createElement("img");
    image.src = creatureImagePath(creature);
    image.alt = creature?.name || "Creature";
    image.loading = "eager";
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true" || !creature?.icon) return;
      image.dataset.fallbackApplied = "true";
      image.src = creatureIconPath(creature);
    });
    return image;
  }

  function createCreatureCard(creature, interactive = true) {
    const card = document.createElement(interactive ? "button" : "article");
    const image = createCreatureImage(creature);
    const caption = document.createElement("div");
    const id = document.createElement("span");
    const name = document.createElement("strong");

    card.className = "sticker-card";
    if (interactive) card.type = "button";
    card.style.setProperty("--sticker-color", matsuColors[creature?.matsu] || "#EFB775");
    card.setAttribute("aria-label", creature?.name || "Creature result");

    caption.className = "sticker-caption";
    id.className = "sticker-id";
    id.textContent = `#${creature?.id || "---"}`;
    name.className = "sticker-name";
    name.textContent = creature?.name || "UNKNOWN";

    caption.append(id, name);
    card.append(image, caption);
    return card;
  }

  function createTieCard(group) {
    const card = document.createElement("button");
    const title = document.createElement("strong");
    const hint = document.createElement("span");
    card.className = "tie-sticker";
    card.type = "button";
    card.setAttribute("aria-label", `${group.length} creatures tied. Click to show.`);
    title.textContent = "TIE";
    hint.textContent = "Click to show";
    card.append(title, hint);
    return card;
  }

  function sortEntriesByCandidateId(group) {
    return [...group].sort((left, right) => {
      const leftId = Number.parseInt(String(left?.candidateId || left?.creature?.id || ""), 10);
      const rightId = Number.parseInt(String(right?.candidateId || right?.creature?.id || ""), 10);
      const safeLeftId = Number.isFinite(leftId) ? leftId : Number.MAX_SAFE_INTEGER;
      const safeRightId = Number.isFinite(rightId) ? rightId : Number.MAX_SAFE_INTEGER;
      return safeLeftId - safeRightId;
    });
  }

  function updateFirstPlaceTieDeck(deck, frontIndex) {
    const cards = Array.from(deck.querySelectorAll(".first-place-tie-card"));
    if (!cards.length) return;
    const normalizedIndex = (frontIndex + cards.length) % cards.length;
    deck.dataset.frontIndex = String(normalizedIndex);

    cards.forEach((card, index) => {
      const isFront = index === normalizedIndex;
      card.classList.toggle("is-front", isFront);
      card.classList.toggle("is-back", !isFront);
      card.tabIndex = isFront ? 0 : -1;
      card.setAttribute("aria-hidden", isFront ? "false" : "true");
    });
  }

  function cycleFirstPlaceTieDeck(deck, direction, dragState = null) {
    const cards = Array.from(deck.querySelectorAll(".first-place-tie-card"));
    if (cards.length < 2 || deck.dataset.swapping === "true") return;

    const currentIndex = Number(deck.dataset.frontIndex) || 0;
    const currentCard = cards[currentIndex];
    const nextIndex = (currentIndex + direction + cards.length) % cards.length;
    const duration = prefersReducedMotion ? 1 : 250;
    const releaseX = dragState?.x || 0;
    const isDesktopDrag = Boolean(dragState) && direction > 0;
    const exitX = isDesktopDrag
      ? Math.min(112, Math.max(96, releaseX + 16))
      : direction > 0 ? 150 : -150;
    const exitY = isDesktopDrag ? 5 : 20;
    const exitRotation = isDesktopDrag ? 10 : direction > 0 ? 14 : -14;

    deck.dataset.swapping = "true";
    currentCard.classList.remove("is-dragging");
    currentCard.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
    currentCard.style.transform = `translate(${exitX}px, ${exitY}px) rotate(${exitRotation}deg) scale(0.96)`;
    currentCard.style.opacity = "0";

    window.setTimeout(() => {
      currentCard.style.transition = "none";
      updateFirstPlaceTieDeck(deck, nextIndex);
      currentCard.style.removeProperty("transform");
      currentCard.style.removeProperty("opacity");
      void currentCard.offsetWidth;
      currentCard.style.removeProperty("transition");
      delete deck.dataset.swapping;
    }, duration);
  }

  function enableFirstPlaceTieDrag(card, deck, entry) {
    let dragState = null;

    function clearDraggedCard() {
      card.classList.remove("is-dragging");
      card.style.removeProperty("transition");
      void card.offsetWidth;
      card.style.removeProperty("transform");
      card.style.removeProperty("opacity");
    }

    card.addEventListener("pointerdown", event => {
      if (
        mobileResultsQuery.matches ||
        event.button !== 0 ||
        !card.classList.contains("is-front") ||
        !deck.classList.contains("is-stuck") ||
        deck.dataset.swapping === "true"
      ) {
        return;
      }

      dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        x: 0,
        moved: false
      };
      card.classList.add("is-dragging");
      card.style.transition = "none";
      card.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    });

    card.addEventListener("pointermove", event => {
      if (!dragState || event.pointerId !== dragState.pointerId) return;
      const rawX = event.clientX - dragState.startX;
      const rawY = event.clientY - dragState.startY;
      const x = Math.max(0, Math.min(rawX, 96));
      const progress = x / 96;
      const rotation = -5 + (15 * progress);
      dragState.x = x;
      dragState.moved ||= Math.hypot(rawX, rawY) > 5;

      card.style.transform = `translate(${x - 7}px, 5px) rotate(${rotation}deg) scale(1.02)`;
    });

    function finishDrag(event, cancelled = false) {
      if (!dragState || event.pointerId !== dragState.pointerId) return;
      const finishedDrag = dragState;
      dragState = null;
      if (card.hasPointerCapture?.(event.pointerId)) {
        card.releasePointerCapture(event.pointerId);
      }

      if (finishedDrag.moved) {
        card.dataset.ignoreClick = "true";
        window.setTimeout(() => delete card.dataset.ignoreClick, 0);
      }

      const droppedRight = !cancelled && finishedDrag.x >= 56;
      if (droppedRight) {
        cycleFirstPlaceTieDeck(deck, 1, finishedDrag);
      } else {
        clearDraggedCard();
      }
    }

    card.addEventListener("pointerup", event => finishDrag(event));
    card.addEventListener("pointercancel", event => finishDrag(event, true));
    card.addEventListener("click", event => {
      if (card.dataset.ignoreClick === "true") {
        event.preventDefault();
        return;
      }
      openSingleDialog(1, entry);
    });
  }

  function createFirstPlaceTieDeck(group) {
    const deck = document.createElement("div");
    const cardViewport = document.createElement("div");
    const controls = document.createElement("div");
    const previousButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const orderedGroup = sortEntriesByCandidateId(group);

    deck.className = "first-place-tie-deck";
    deck.setAttribute("aria-label", `${orderedGroup.length} creatures tied for first place`);
    cardViewport.className = "first-place-tie-card-viewport";
    controls.className = "first-place-tie-controls";
    previousButton.type = "button";
    previousButton.textContent = "<";
    previousButton.setAttribute("aria-label", "Show previous tied creature");
    nextButton.type = "button";
    nextButton.textContent = ">";
    nextButton.setAttribute("aria-label", "Show next tied creature");

    orderedGroup.forEach(entry => {
      const card = createCreatureCard(entry.creature, true);
      card.classList.add("first-place-tie-card");
      card.setAttribute(
        "aria-label",
        `${entry.creature?.name || entry.name || "Creature"}, tied for first place`
      );
      enableFirstPlaceTieDrag(card, deck, entry);
      cardViewport.appendChild(card);
    });

    previousButton.addEventListener("click", event => {
      event.stopPropagation();
      cycleFirstPlaceTieDeck(deck, -1);
    });
    nextButton.addEventListener("click", event => {
      event.stopPropagation();
      cycleFirstPlaceTieDeck(deck, 1);
    });
    controls.append(previousButton, nextButton);
    deck.append(cardViewport, controls);
    updateFirstPlaceTieDeck(deck, 0);
    return deck;
  }

  function createPlaceholder(place) {
    const placeholder = document.createElement("div");
    placeholder.className = "sticker-placeholder";
    placeholder.textContent = `${ordinalNames[place]} Place`;
    return placeholder;
  }

  function createMedal(place) {
    const medal = document.createElement("img");
    medal.className = "place-medal";
    medal.src = `/vote/place${place}.png`;
    medal.alt = `${ordinalNames[place]} place medal`;
    return medal;
  }

  function createStarBurst() {
    const burst = document.createElement("div");
    const directions = Array.from({ length: 18 }, (_, index) => {
      const angle = -Math.PI / 2 + index * (Math.PI * 2 / 18);
      return { x: Math.cos(angle), y: Math.sin(angle) };
    });

    burst.className = "star-burst";
    burst.setAttribute("aria-hidden", "true");
    directions.forEach(({ x, y }, index) => {
      const radius = 116 + (index % 3) * 24;
      const star = document.createElement("span");
      star.className = "winner-star";
      star.style.setProperty("--star-x", `${(x * radius).toFixed(1)}px`);
      star.style.setProperty("--star-y", `${(y * radius).toFixed(1)}px`);
      star.style.setProperty("--star-x-far", `${(x * (radius + 24)).toFixed(1)}px`);
      star.style.setProperty("--star-y-far", `${(y * (radius + 24)).toFixed(1)}px`);
      star.style.setProperty("--star-size", `${13 + (index % 4) * 6}px`);
      star.style.setProperty("--star-rotation", `${-45 + index * 17}deg`);
      star.style.setProperty("--star-delay", `${(index % 6) * 48}ms`);
      star.style.setProperty("--star-duration", `${900 + (index % 4) * 90}ms`);
      burst.appendChild(star);
    });
    return burst;
  }

  function groupResultsByPosition(payload) {
    const groups = new Map();
    const entries = [
      ...(Array.isArray(payload?.top) ? payload.top : []),
      ...(Array.isArray(payload?.ties) ? payload.ties : []),
      ...(Array.isArray(payload?.remaining) ? payload.remaining : [])
    ];

    entries.forEach(entry => {
      const position = Number(entry?.position);
      if (!Number.isInteger(position) || position < 1) return;
      if (!groups.has(position)) groups.set(position, []);
      const creature = creaturesById.get(String(entry.candidateId));
      groups.get(position).push({
        ...entry,
        candidateId: String(entry.candidateId),
        creature
      });
    });
    return { groups, entries };
  }

  function openSingleDialog(place, entry) {
    dialogTitle.textContent = `${ordinalNames[place]} Place - ${pointsLabel(entry.points)}`;
    dialogContent.replaceChildren();
    dialogContent.className = "dialog-content dialog-single-card";
    dialogContent.appendChild(createCreatureCard(entry.creature, false));
    showDetailsDialog();
  }

  function openTieDialog(place, group) {
    const points = Number(group[0]?.points) || 0;
    const grid = document.createElement("div");
    const rows = Math.max(1, Math.ceil(group.length / 3));
    const desktopColumns = group.length > 20
      ? 6
      : group.length > 12
        ? 5
        : group.length > 6
          ? 4
          : group.length > 4
            ? 3
            : group.length > 1
              ? 2
              : 1;
    const desktopCardHeight = desktopColumns === 6
      ? 150
      : desktopColumns === 5
        ? 170
        : desktopColumns === 4
          ? 200
          : desktopColumns === 3
            ? 240
            : desktopColumns === 2
              ? 250
              : 350;
    grid.className = "tie-dialog-grid";
    grid.style.setProperty("--tie-rows", String(rows));
    grid.style.setProperty("--tie-columns-desktop", String(desktopColumns));
    grid.style.setProperty("--tie-card-height-desktop", `${desktopCardHeight}px`);

    group.forEach(entry => {
      const card = document.createElement("article");
      const image = createCreatureImage(entry.creature);
      const caption = document.createElement("div");
      const id = document.createElement("span");
      const name = document.createElement("strong");
      card.className = "tie-dialog-card";
      card.style.setProperty(
        "--sticker-color",
        matsuColors[entry.creature?.matsu] || "#8F8B88"
      );
      id.textContent = `#${entry.candidateId}`;
      name.textContent = entry.creature?.name || entry.name || "UNKNOWN";
      caption.className = "tie-dialog-caption";
      caption.append(id, name);
      card.append(image, caption);
      grid.appendChild(card);
    });

    dialogTitle.textContent = `${ordinalNames[place]} Place - ${pointsLabel(points)}`;
    dialogContent.className = "dialog-content";
    dialogContent.classList.toggle("has-themed-scrollbar", desktopColumns >= 4);
    dialogContent.replaceChildren(grid);
    showDetailsDialog();
  }

  function openNoVotesDialog() {
    const group = creaturesWithoutVotes;
    const grid = document.createElement("div");
    const rows = Math.max(1, Math.ceil(group.length / 3));
    const desktopColumns = group.length > 20
      ? 6
      : group.length > 12
        ? 5
        : group.length > 6
          ? 4
          : group.length > 4
            ? 3
            : group.length > 1
              ? 2
              : 1;
    const desktopCardHeight = desktopColumns === 6
      ? 150
      : desktopColumns === 5
        ? 170
        : desktopColumns === 4
          ? 200
          : desktopColumns === 3
            ? 240
            : desktopColumns === 2
              ? 250
              : 350;

    grid.className = "tie-dialog-grid";
    grid.style.setProperty("--tie-rows", String(rows));
    grid.style.setProperty("--tie-columns-desktop", String(desktopColumns));
    grid.style.setProperty("--tie-card-height-desktop", `${desktopCardHeight}px`);

    group.forEach(entry => {
      const card = document.createElement("article");
      const image = createCreatureImage(entry.creature);
      const caption = document.createElement("div");
      const id = document.createElement("span");
      const name = document.createElement("strong");
      card.className = "tie-dialog-card";
      card.style.setProperty(
        "--sticker-color",
        matsuColors[entry.creature?.matsu] || "#8F8B88"
      );
      id.textContent = `#${entry.candidateId}`;
      name.textContent = entry.creature?.name || "UNKNOWN";
      caption.className = "tie-dialog-caption";
      caption.append(id, name);
      card.append(image, caption);
      grid.appendChild(card);
    });

    dialogTitle.textContent = "Creatures Without Votes";
    dialogContent.className = "dialog-content";
    dialogContent.classList.toggle("has-themed-scrollbar", desktopColumns >= 4);
    dialogContent.replaceChildren(grid);
    showDetailsDialog();
  }

  function showDetailsDialog() {
    const preservedScrollY = Number.isFinite(pendingDialogScrollY)
      ? pendingDialogScrollY
      : window.scrollY;
    pendingDialogScrollY = null;
    dialogIsClosing = false;
    detailsDialog.classList.remove("is-closing");
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo({ top: preservedScrollY, left: 0, behavior: "auto" });
    lockPageScroll();
    if (!detailsDialog.open) detailsDialog.showModal();
    dialogClose.focus({ preventScroll: true });
    window.scrollTo({ top: preservedScrollY, left: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: preservedScrollY, left: 0, behavior: "auto" });
    });
  }

  function lockPageScroll() {
    if (pageScrollIsLocked) return;
    pageScrollIsLocked = true;
    document.documentElement.classList.add("is-result-dialog-open");
    document.body.classList.add("is-result-dialog-open");
  }

  function unlockPageScroll() {
    if (!pageScrollIsLocked) return;
    pageScrollIsLocked = false;
    document.documentElement.classList.remove("is-result-dialog-open");
    document.body.classList.remove("is-result-dialog-open");
  }

  function closeDetailsDialog() {
    if (!detailsDialog.open || dialogIsClosing) return;
    if (prefersReducedMotion) {
      detailsDialog.close();
      unlockPageScroll();
      return;
    }

    dialogIsClosing = true;
    detailsDialog.classList.add("is-closing");
    window.setTimeout(() => {
      if (detailsDialog.open) detailsDialog.close();
      unlockPageScroll();
      detailsDialog.classList.remove("is-closing");
      dialogIsClosing = false;
    }, 300);
  }

  function renderPlace(slot, place, group) {
    const stage = slot.querySelector("[data-sticker-stage]");
    const points = slot.querySelector("[data-points]");
    if (!stage || !points) return;

    stage.replaceChildren(createPlaceholder(place));
    stage.classList.remove("has-first-place-tie");
    slot.classList.remove("has-result", "is-missing");
    points.textContent = "";

    if (!group?.length) {
      slot.classList.add("is-missing");
      return;
    }

    const angle = stickerAngles[place] || 0;
    const orderedGroup = place === 1 && group.length > 1
      ? sortEntriesByCandidateId(group)
      : group;
    const isFirstPlaceTie = place === 1 && orderedGroup.length > 1;
    const sticker = isFirstPlaceTie
      ? createFirstPlaceTieDeck(orderedGroup)
      : orderedGroup.length > 1
        ? createTieCard(orderedGroup)
        : createCreatureCard(orderedGroup[0].creature, true);
    const medal = createMedal(place);

    sticker.dataset.resultSticker = "";
    sticker.style.setProperty("--sticker-angle", `${angle}deg`);
    if (isFirstPlaceTie) {
      stage.classList.add("has-first-place-tie");
    } else if (orderedGroup.length > 1) {
      sticker.addEventListener("click", () => openTieDialog(place, orderedGroup));
    } else {
      sticker.addEventListener("click", () => openSingleDialog(place, orderedGroup[0]));
    }

    stage.append(sticker, medal);
    if (place === 1) stage.appendChild(createStarBurst());
    points.textContent = pointsLabel(Number(orderedGroup[0].points) || 0);

    if (place === 1) {
      const winnerMessage = slot.querySelector("[data-winner-message]");
      if (winnerMessage) {
        const winnerNames = orderedGroup
          .map(entry => entry.creature?.name || entry.name)
          .filter(Boolean);
        setWinnerMessage(winnerMessage, winnerNames, orderedGroup.length > 1);
      }
    }
  }

  function renderAlbum(payload) {
    const { groups, entries } = groupResultsByPosition(payload);
    const slots = Array.from(document.querySelectorAll("[data-place]"));
    slots.forEach(slot => {
      const place = Number(slot.dataset.place);
      renderPlace(slot, place, groups.get(place) || []);
    });

    const candidateIds = new Set(entries.map(entry => String(entry.candidateId)));
    const totalBallots = Math.max(0, Number(payload?.summary?.totalBallots) || 0);
    const totalPoints = Math.max(0, Number(payload?.summary?.totalPoints) || 0);
    summaryParticipantCount.textContent = String(totalBallots);
    summaryParticipantLabel.textContent = totalBallots === 1 ? "participant" : "participants";
    summaryCreatures.textContent = `${candidateIds.size} creatures received votes`;
    summaryPoints.textContent = `${totalPoints} total points`;
    creaturesWithoutVotes = Array.from(creaturesById.entries())
      .filter(([candidateId]) => !candidateIds.has(candidateId))
      .map(([candidateId, creature]) => ({ candidateId, creature }));
    summaryNoVotesButton.disabled = creaturesWithoutVotes.length === 0;
    summaryNoVotesButton.setAttribute(
      "aria-label",
      `Show ${creaturesWithoutVotes.length} creatures without votes`
    );
  }

  async function focusMobilePlace(place) {
    if (!mobileResultsQuery.matches) return;
    const slot = document.querySelector(`[data-place="${place}"]`);
    const sticker = slot?.querySelector("[data-result-sticker]");
    if (!slot || !sticker) return;

    const focusTarget = place === 1
      ? document.querySelector(".result-page")
      : slot;

    focusTarget?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: place === 1 ? "end" : "center",
      inline: "nearest"
    });
    await wait(prefersReducedMotion ? 1 : 430);
  }

  async function expandMobileAlbum() {
    if (!mobileResultsQuery.matches || prefersReducedMotion) {
      albumSheet.classList.remove("is-awaiting-reveal");
      albumSheet.classList.add("are-placeholders-ready");
      await wait(prefersReducedMotion ? 1 : 500);
      return;
    }

    const compactHeight = albumSheet.getBoundingClientRect().height;
    albumSheet.classList.add("is-expanding");
    albumSheet.classList.remove("is-awaiting-reveal");
    albumSheet.style.height = "auto";
    const expandedHeight = albumSheet.getBoundingClientRect().height;
    albumSheet.style.height = `${compactHeight}px`;
    void albumSheet.offsetHeight;

    await new Promise(resolve => {
      const duration = 1400;
      const startedAt = performance.now();

      function expandFrame(now) {
        const progress = Math.min(1, (now - startedAt) / duration);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentHeight = compactHeight + (expandedHeight - compactHeight) * easedProgress;
        albumSheet.style.height = `${currentHeight}px`;

        if (progress < 1) {
          requestAnimationFrame(expandFrame);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(expandFrame);
    });

    albumSheet.style.height = "";
    albumSheet.classList.remove("is-expanding");
    albumSheet.classList.add("are-placeholders-ready");
    await wait(500);
  }

  async function revealPlace(place) {
    const slot = document.querySelector(`[data-place="${place}"]`);
    const sticker = slot?.querySelector("[data-result-sticker]");
    const medal = slot?.querySelector(".place-medal");
    if (!slot || !sticker || !medal) {
      await wait(prefersReducedMotion ? 1 : 150);
      return;
    }

    playSound(stickerSound);
    sticker.classList.add("is-sticking");
    await wait(prefersReducedMotion ? 1 : 690);
    sticker.classList.remove("is-sticking");
    sticker.classList.add("is-stuck");
    slot.classList.add("has-result");

    playSound(medalSound);
    medal.classList.add("is-stamping");
    await wait(prefersReducedMotion ? 1 : 410);
    medal.classList.remove("is-stamping");
    medal.classList.add("is-stamped");

    if (place === 1) {
      const burst = slot.querySelector(".star-burst");
      if (burst) burst.classList.add("is-celebrating");
    }
    await wait(prefersReducedMotion ? 1 : 360);
  }

  async function revealResults() {
    await unlockSounds();
    revealPanel.classList.add("is-hidden");
    await wait(prefersReducedMotion ? 1 : 400);
    revealPanel.hidden = true;
    await expandMobileAlbum();

    for (const place of [6, 5, 4, 3, 2, 1]) {
      await focusMobilePlace(place);
      await revealPlace(place);
    }

    await wait(prefersReducedMotion ? 1 : 950);
    resultSummary.classList.add("is-visible");
  }

  function showUnavailable(message) {
    resultStateText.textContent = message;
    resultState.hidden = false;
    albumSheet.hidden = true;
  }

  document.addEventListener("pointerdown", event => {
    const trigger = event.target instanceof Element
      ? event.target.closest("[data-result-sticker], #summaryNoVotesButton")
      : null;
    if (trigger && !detailsDialog.open) pendingDialogScrollY = window.scrollY;
  }, true);
  dialogClose.addEventListener("click", closeDetailsDialog);
  detailsDialog.addEventListener("cancel", event => {
    event.preventDefault();
  });
  detailsDialog.addEventListener("close", unlockPageScroll);
  revealButton.addEventListener("click", revealResults, { once: true });
  summaryNoVotesButton.addEventListener("click", openNoVotesDialog);

  try {
    const response = await fetch("/api/vote2026/results", {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (response.status === 401 || response.status === 403) {
      showUnavailable("The results album will open when voting closes.");
      return;
    }
    if (!response.ok) throw new Error(`Result service returned ${response.status}.`);

    const payload = await response.json();
    renderAlbum(payload);
    resultState.hidden = true;
    albumSheet.hidden = false;
  } catch (error) {
    console.error("[RESULT 2026] The result album could not be loaded.", error);
    showUnavailable("The result album is temporarily unavailable. Please try again later.");
  }
})();
