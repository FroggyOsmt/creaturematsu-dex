const characters = {
  sextuplets: sextupletsData,
  drleezar: drLeezarData,
  louise: louiseData,
  teseo: teseoData
};

let charactersHTMLReady = false;

fetch("html/characters.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
    charactersHTMLReady = true;
    initCharactersScroll();
  });

function openCharactersPage(characterData) {
  if (!charactersHTMLReady) {
    console.warn("characters.html todavía no cargó.");
    return;
  }

  const popup = document.getElementById("charactersPopup");
  if (!popup) return;

  const data = normalizeCharacterData(characterData);

  document.getElementById("charactersTitle").textContent = data.name || "CHARACTER";

  const image = document.getElementById("charactersImage");
  image.src = data.image || "";
  image.alt = data.name || "Character";

  document.getElementById("charactersSpecies").textContent = data.species || "TBA";
  document.getElementById("charactersAge").textContent = data.age || "TBA";
  document.getElementById("charactersHeight").textContent = data.height || "TBA";

  const roleLabel = document.getElementById("charactersRoleLabel");
  const roleValue = document.getElementById("charactersRole");

  roleLabel.textContent = data.isDrLeezar ? "OCCUPATION" : "ROLE";
  roleValue.textContent = data.isDrLeezar
    ? (data.occupation || "TBA")
    : (data.role || "TBA");

document.getElementById("charactersDescription").innerHTML =
  parseMarkdown(data.description || "TBA");

 const sections = data.sections || [];

document.getElementById("charactersToc").innerHTML =
  buildCharacterToc(sections);

document.getElementById("charactersSections").innerHTML =
  buildCharacterSections(sections);

initCharacterTocLinks();
initCharacterActiveTopButtons();

const charactersBg = document.querySelector(".characters-bg");

if (charactersBg) {
  charactersBg.scrollTop = 0;
}

requestAnimationFrame(() => {
  document.querySelectorAll(".characters-top-btn").forEach(btn => {
    btn.classList.remove("active");
  });
});

popup.classList.add("active");

requestAnimationFrame(() => {
  const charactersBg = document.querySelector(".characters-bg");

  if (charactersBg) {
    charactersBg.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }

  document.querySelectorAll(".characters-top-btn").forEach(btn => {
    btn.classList.remove("active");
  });
});
}

function closeCharactersPage() {
  const popup = document.getElementById("charactersPopup");
  if (!popup) return;

  popup.classList.remove("active");

  if (typeof openCharacterPopup === "function") {
    openCharacterPopup();
  }
}

function normalizeCharacterData(characterData) {
  const data = Array.isArray(characterData)
    ? characterData[0]
    : characterData;

  if (!data) return {};

  const name = data.name || data.title || "CHARACTER";

  const isDrLeezar =
    name.toLowerCase().includes("leezar") ||
    data.id === "drleezar" ||
    data.type === "drleezar";

  return {
    name: name,
    image: data.image || data.img || data.fullImage || data.icon || "",
    species: data.species || "TBA",
    age: data.age || "TBA",
    height: data.height || data.size || "TBA",
    role: data.role || "TBA",
    occupation: data.occupation || data.job || "TBA",
    description: data.description || "TBA",
    sections: data.sections || data.infoSections || data.logs || [],
    isDrLeezar: isDrLeezar
  };
}

function buildCharacterSections(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return sections.map((section, index) => {
    const id = createCharacterSectionId(section.title || "section", index);

    return `
      <div class="characters-log-section" id="${id}">

        <div class="characters-log-title-row">
  <div class="characters-log-title">
    ${parseMarkdown(section.title || "")}
  </div>

  <button class="characters-top-btn" onclick="scrollCharacterToContents()">
    TOP
  </button>
</div>

        <div class="characters-log-separator"></div>

        <div class="characters-log-text">
          ${parseMarkdown(section.text || "")}
        </div>

      </div>
    `;
  }).join("");
}

function createCharacterSectionId(title, index) {
  return "character-section-" + index + "-" + title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildCharacterToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="characters-toc-title">Contents</div>

    <div class="characters-toc-links">
      ${sections.map((section, index) => {
        const id = createCharacterSectionId(section.title || "section", index);

        return `
          <button class="characters-toc-link" data-scroll-target="${id}">
            ${parseMarkdown(section.title || "Section")}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function initCharacterTocLinks() {
  const tocLinks = document.querySelectorAll(".characters-toc-link");

  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.scrollTarget;
      const target = document.getElementById(targetId);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function scrollCharacterToContents() {
  const toc = document.getElementById("charactersToc");

  if (!toc) return;

  toc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function initCharacterActiveTopButtons() {
  const scrollBox = document.querySelector(".characters-bg");
  const sections = document.querySelectorAll(".characters-log-section");

  if (!scrollBox || sections.length === 0) return;

  function updateActiveTopButton() {
    const scrollRect = scrollBox.getBoundingClientRect();
    const checkLine = scrollRect.top + scrollRect.height * 0.92;

    let activeSection = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= checkLine && rect.bottom >= checkLine) {
        activeSection = section;
      }
    });

    if (!activeSection) {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (!activeSection && rect.top < scrollRect.bottom && rect.bottom > scrollRect.top) {
          activeSection = section;
        }
      });
    }

    document.querySelectorAll(".characters-top-btn").forEach(btn => {
      btn.classList.remove("active");
    });

   if (activeSection) {
  const toc = document.getElementById("charactersToc");
  const btn = activeSection.querySelector(".characters-top-btn");

  if (!toc || !btn) return;

  const tocRect = toc.getBoundingClientRect();
  const sectionRect = activeSection.getBoundingClientRect();

  const distanceFromContents = sectionRect.top - tocRect.bottom;

  if (distanceFromContents > 120) {
    btn.classList.add("active");
  }
}
  }

  scrollBox.removeEventListener("scroll", updateActiveTopButton);
  scrollBox.addEventListener("scroll", updateActiveTopButton);

  requestAnimationFrame(updateActiveTopButton);
}

function initCharactersScroll() {
  const charactersBg = document.querySelector(".characters-bg");

  if (!charactersBg) return;

  charactersBg.addEventListener("wheel", (e) => {
    e.preventDefault();

    const direction = Math.sign(e.deltaY);
    charactersBg.scrollTop += direction * 30;
  }, { passive: false });
}