let extraPopupActionLoadToken = 0;

function declaredActionImages(creature) {
  const declared = creature?.extras?.action;
  const images = Array.isArray(declared) ? declared : declared ? [declared] : [];
  return images.filter(name => String(name || "").trim());
}

async function discoverActionImageNames(creature) {
  const available = [];
  const prefix = `A${creature.id}-`;

  for (let index = 0; index < 26; index++) {
    const name = `${prefix}${String.fromCharCode(65 + index)}.png`;
    const url = `info-data/extra-data/extra-image/action/${encodeURIComponent(name)}`;
    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      if (!response.ok) break;
      available.push(name);
    } catch (error) {
      break;
    }
  }

  return available.length ? available : declaredActionImages(creature);
}

function renderActionImageGallery(body, images) {
  const safeImages = images.length ? images : ["placeholder-action.png"];
  body.innerHTML = `
    <div class="extra-image-slider" id="extraImageSlider">
      ${safeImages.map(src => `
        <div class="extra-image-slide">
          <img src="info-data/extra-data/extra-image/action/${encodeURIComponent(src)}" class="extra-popup-image" alt="">
        </div>
      `).join("")}
    </div>

    <div class="extra-slider-dots">
      ${safeImages.map((_, index) => `
        <div class="extra-slider-dot ${index === 0 ? "active" : ""}"></div>
      `).join("")}
    </div>
  `;
  watchExtraSliderScroll();
}

function ensureExtraPopup() {
  let popup = document.getElementById("extraPopup");

  if (popup) return popup;

  popup = document.createElement("div");
  popup.id = "extraPopup";
  popup.className = "extra-popup-overlay";

popup.innerHTML = `
  <button class="extra-gallery-arrow left" onclick="moveExtraSlide(-1)">
    <img src="images/arrow-left.png">
  </button>

  <div class="extra-popup-card">
    <div class="extra-popup-title" id="extraPopupTitle">EXTRA</div>
    <div class="extra-popup-body" id="extraPopupBody">TBA</div>

<button type="button" class="extra-popup-back">
  BACK
</button>
  </div>

  <button class="extra-gallery-arrow right" onclick="moveExtraSlide(1)">
    <img src="images/arrow-right.png">
  </button>
`;

  document.body.appendChild(popup);

  popup.querySelector(".extra-popup-back").addEventListener("click", () => {
    if (typeof window.handleExtraBack === "function") window.handleExtraBack();
    else closeExtraPopup();
  });
  return popup;
  
}

function openExtraPopup(type) {
  window.trackCreatureExtraPageView?.(currentCreature, type);

  if (type === "THE FIRST EXPERIMENT") {
    window.creatureNewDiscovery?.markUpdateViewed(currentCreature);
  }

  const popup = ensureExtraPopup();
  const actionLoadToken = ++extraPopupActionLoadToken;

  const leftArrow = popup.querySelector(".extra-gallery-arrow.left");
const rightArrow = popup.querySelector(".extra-gallery-arrow.right");

  const title = document.getElementById("extraPopupTitle");
  if (currentCreature?.id === "057" && type === "FUN FACT") {
    title.innerHTML = "<del>Fun</del> Sad Fact";
  } else {
    title.textContent = type === "STATUS"
      ? "The Suspect of Creation"
      : type === "THE FIRST EXPERIMENT"
        ? "The First Experiment"
      : type === "ABOUT MY PAST"
        ? "About My Past"
        : type;
  }

  const body = document.getElementById("extraPopupBody");

  const extras = currentCreature?.extras;

  extraSlideIndex = 0;

  if (!extras) {
    body.innerHTML = "TBA";
    popup.style.display = "flex";
popup.classList.add("open");
    return;
  }

  // ACTION
  if (type === "ACTION") {

    leftArrow.style.display = "flex";
  rightArrow.style.display = "flex";
    const creature = currentCreature;
    body.innerHTML = '<div class="extra-image-gallery-loading">LOADING ACTION...</div>';
    discoverActionImageNames(creature).then(images => {
      if (
        actionLoadToken !== extraPopupActionLoadToken ||
        currentCreature?.id !== creature.id ||
        !popup.classList.contains("open")
      ) return;
      renderActionImageGallery(body, images);
    });

  }

  // SHEET
if (type === "SHEET") {
  const images = extras.sheet
    ? (Array.isArray(extras.sheet) ? extras.sheet : [extras.sheet])
    : [];
  const sheetZoomEnabled = !window.matchMedia("(max-width: 768px)").matches;

  body.innerHTML = `
    <div class="extra-image-slider" id="extraImageSlider">
      ${images.map((item, index) => `
        <div
          class="extra-image-slide${sheetZoomEnabled ? " sheet-image-zoom-trigger" : ""}"
          ${sheetZoomEnabled ? `data-markdown-image-zoom role="button" tabindex="0" aria-label="Ampliar imagen SHEET ${index + 1}"` : ""}
        >
          <img src="info-data/extra-data/extra-image/sheet/${item.src}" class="extra-popup-image" alt="">
        </div>
      `).join("")}
    </div>

    <div class="extra-slider-dots">
      ${images.map((_, i) => `
        <div class="extra-slider-dot ${i === 0 ? "active" : ""}"></div>
      `).join("")}
    </div>

    <div class="extra-image-caption" id="extraImageCaption">
      ${images[0]?.caption || ""}
    </div>
  `;

  watchExtraSliderScroll(images);
}


  // LOG
if (type === "LOG") {

  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  const logs = Array.isArray(extras.log)
    ? extras.log
    : [extras.log];

  body.innerHTML = `
    <div class="extra-log-card">

      ${logs.map(log => `
        <div class="extra-log-section">

          <div class="extra-log-title">
            ${parseExtraMarkdown(log.title || "")}
          </div>

          <div class="extra-log-separator"></div>

          <div class="extra-log-text text-card-value">
            ${parseExtraMarkdown(log.text || "")}
          </div>

        </div>
      `).join("")}

    </div>
  `;
}

if (type === "ABOUT MY PAST") {
  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  body.innerHTML = `
    <div class="extra-past-text text-card-value">
      ${parseExtraMarkdown(extras.past || "")}
    </div>
  `;
}

if (type === "THE FIRST EXPERIMENT") {
  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  body.innerHTML = `
    <div class="extra-first-experiment-text text-card-value">
      ${parseExtraMarkdown(extras.firstExperiment || "", {
        compactQuoteAfter: true,
        compactSeparatorAfter: true
      })}
    </div>
  `;
}

if (type === "FUN FACT") {

  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  body.innerHTML = `
    <div class="extra-funfact-text text-card-value">
      ${parseExtraMarkdown(extras.funFact || "", {
        compactQuoteAfter: true,
        compactSeparatorAfter: true
      })}
    </div>
  `;
}

if (type === "STATUS") {
  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  const status = (extras.status || "").toString().trim().toUpperCase();
  const isUnstable = status === "U";
  const renderStatusText = (value, compactBlocksAfter = false) =>
    parseExtraMarkdown((value || "").toString().trim(), {
      compactQuoteAfter: compactBlocksAfter,
      compactSeparatorAfter: compactBlocksAfter
    })
      .replace(/(?:<br>)+$/, "");

  body.innerHTML = `
    <div class="extra-status-card ${isUnstable ? "extra-status-unstable" : "extra-status-stable"}">
      <div class="extra-status-field">
        <div class="extra-status-label">Code:</div>
        <div class="extra-status-code">${renderStatusText(extras.code)}</div>
      </div>

      <div class="extra-status-field">
        <div class="extra-status-label">Responsible:</div>
        <div class="extra-status-responsible">${renderStatusText(extras.responsible)}</div>
      </div>

      ${isUnstable ? `
        <div class="extra-status-separator"></div>
        <div class="extra-status-description">${renderStatusText(extras.description, true)}</div>
      ` : ""}
    </div>
  `;
}

  popup.style.display = "flex";
popup.classList.add("open");
}

function closeExtraPopup() {
  const popup = document.getElementById("extraPopup");
  if (!popup) return;

  extraPopupActionLoadToken++;
  popup.classList.remove("open");
  popup.style.display = "none";
}

let extraSlideIndex = 0;

function updateExtraDots() {
  const dots = document.querySelectorAll(".extra-slider-dot");

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === extraSlideIndex);
  });
}

function goExtraSlide(index) {
  const slider = document.getElementById("extraImageSlider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".extra-image-slide");
  if (!slides.length) return;

  extraSlideIndex = Math.max(0, Math.min(index, slides.length - 1));

  slider.scrollTo({
    left: slider.clientWidth * extraSlideIndex,
    behavior: "smooth"
  });

  updateExtraDots();
}

function moveExtraSlide(step) {
  goExtraSlide(extraSlideIndex + step);
}

function watchExtraSliderScroll() {
  const slider = document.getElementById("extraImageSlider");
  if (!slider) return;

  slider.addEventListener("scroll", () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);

    extraSlideIndex = index;
    updateExtraDots();
  });
}
