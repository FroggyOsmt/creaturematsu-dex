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

<button type="button" class="extra-popup-back" onclick="closeExtraPopup()">
  BACK
</button>
  </div>

  <button class="extra-gallery-arrow right" onclick="moveExtraSlide(1)">
    <img src="images/arrow-right.png">
  </button>
`;

  document.body.appendChild(popup);

  popup.querySelector(".extra-popup-back").addEventListener("click", closeExtraPopup);
  return popup;
  
}

function openExtraPopup(type) {
  const popup = ensureExtraPopup();

  const leftArrow = popup.querySelector(".extra-gallery-arrow.left");
const rightArrow = popup.querySelector(".extra-gallery-arrow.right");

  document.getElementById("extraPopupTitle").textContent = type;

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

    const images = extras.action
      ? (Array.isArray(extras.action)
          ? extras.action
          : [extras.action])
      : ["placeholder-action.png"];

body.innerHTML = `
  <div class="extra-image-slider" id="extraImageSlider">
    ${images.map(src => `
        <div class="extra-image-slide">
        <img src="images/extras/action/${src}" class="extra-popup-image">
      </div>
    `).join("")}
  </div>

<div class="extra-slider-dots">
  ${images.map((_, i) => `
    <div class="extra-slider-dot ${i === 0 ? "active" : ""}"></div>
  `).join("")}
</div>
`;

watchExtraSliderScroll();

  }

  // SHEET
if (type === "SHEET") {
  const images = extras.sheet
    ? (Array.isArray(extras.sheet) ? extras.sheet : [extras.sheet])
    : [];

  body.innerHTML = `
    <div class="extra-image-slider" id="extraImageSlider">
      ${images.map(item => `
        <div class="extra-image-slide">
          <img src="images/extras/sheet/${item.src}" class="extra-popup-image">
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
            ${parseMarkdown(log.title || "")}
          </div>

          <div class="extra-log-separator"></div>

          <div class="extra-log-text text-card-value">
            ${parseMarkdown(log.text || "")}
          </div>

        </div>
      `).join("")}

    </div>
  `;
}

if (type === "FUN FACT") {

  leftArrow.style.display = "none";
  rightArrow.style.display = "none";

  body.innerHTML = `
    <div class="extra-funfact-text text-card-value">
      ${parseMarkdown(extras.funFact || "")}
    </div>
  `;
}

  popup.style.display = "flex";
popup.classList.add("open");
}

function closeExtraPopup() {
  const popup = document.getElementById("extraPopup");
  if (!popup) return;

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

/* TITULO PARA LOG */

if (type === "LOG") {
  const log = extras.log;

  body.innerHTML = `
    <div class="extra-log-card">
      <div class="extra-log-title">
        ${parseMarkdown(log.title || "")}
      </div>

      <div class="extra-log-separator"></div>

      <div class="extra-log-text text-card-value">
        ${parseMarkdown(log.text || "")}
      </div>
    </div>
  `;
}