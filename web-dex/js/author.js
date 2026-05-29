function createAuthorPopup() {
  if (document.getElementById("authorPopup")) return;

  const popupHTML = `
    <div class="author-popup" id="authorPopup">
      <div class="author-popup-box">

        <div class="author-popup-header">
          ABOUT AUTHOR
          <button class="author-close-btn" onclick="closeAuthorPopup()">
            BACK
          </button>
        </div>

        <div class="author-popup-content">
          <div class="author-card">

            <p>
              Hi! I’m <strong>Froggy</strong>, the creator of <strong>CreatureMatsu</strong>.
            </p>

            <p>
              CreatureMatsu is my personal art project, creature archive, and fictional universe.
              I created the creature designs, artwork, icons, lore structure, characters, and visual direction with care over the years.
            </p>

            <p>
              Please do not steal, trace, repost, resell, trade, tokenize, or use my artwork and creature designs without permission.
              This project is very personal to me, and I want to protect it as part of my art.
            </p>

            <p>
              This website was developed by Froggy with assistance from artificial intelligence tools.
              AI helped with coding, debugging, structure, wording, and technical support,
              but the creative ideas, artwork, characters, creature designs, and worldbuilding belong to Froggy.
            </p>

            <p>
              Please remember that this website is still an early version,
              so some sections may be incomplete, imperfect, adjusted, or improved over time.
            </p>

            <p class="author-thanks">
              Thank you for visiting and exploring my little buggies!
            </p>

            <button class="author-frog-btn" onclick="ribbitFroggy()" aria-label="Froggy">
  <img src="images/froggy.png" class="author-frog-icon" id="authorFrogIcon" alt="Froggy icon">
</button>

          </div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", popupHTML);
}

function openAuthorPopup() {
  createAuthorPopup();

  const popup = document.getElementById("authorPopup");
  if (!popup) return;

  popup.classList.add("active");
}

function closeAuthorPopup() {
  const popup = document.getElementById("authorPopup");
  if (!popup) return;

  popup.classList.remove("active");
}

function ribbitFroggy() {
  const frogBtn = document.querySelector(".author-frog-btn");
  const frogIcon = document.getElementById("authorFrogIcon");

  if (!frogBtn || !frogIcon) return;

  frogBtn.classList.remove("ribbit-hop");

  void frogBtn.offsetWidth;

  frogIcon.src = "images/froggy1.png";
  frogBtn.classList.add("ribbit-hop");

  setTimeout(() => {
    frogIcon.src = "images/froggy.png";
    frogBtn.classList.remove("ribbit-hop");
  }, 200);
}