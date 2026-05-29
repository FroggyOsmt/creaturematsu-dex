//SCRIPT

// PIXEL PERFECT IMAGE SIZE BY DPR
function updateIconSize() {
  const dpr = window.devicePixelRatio || 1;
  const isMobile = window.innerWidth <= 768;

  const setDprSize = (name, physicalPx, minCssPx = 0) => {
    const rawSize = physicalPx / dpr;
    const finalSize = Math.max(rawSize, minCssPx);

    document.documentElement.style.setProperty(
      name,
      `${finalSize}px`
    );
  };
  

  // GRID CARDS
  if (isMobile) {
    // En móvil prioriza tamaño visual, no pixel físico extremo
    setDprSize("--icon-size", 70, 35);
  } else {
    // En desktop sí mantiene 84px físicos
    setDprSize("--icon-size", 84, 56);
  }

    if (isMobile) {
    // En móvil prioriza tamaño visual, no pixel físico extremo
    setDprSize("--detail-title-icon-size", 70, 35);
  } else {
    // En desktop sí mantiene 84px físicos
    setDprSize("--detail-title-icon-size", 84, 56);
  }

  // TITLE / DETAIL / EXTRA
  setDprSize("--title-icon-size", 96, isMobile ? 40 : 64);
  setDprSize("--extra-gallery-arrow-icon-size", 34, 24);
  setDprSize("--back-icon-size", 34, 29);

  // AUTHOR FROGGY ICON
setDprSize("--author-frog-icon-size", 50, 32);

// SIDE BAR
if (isMobile) {
  setDprSize("--side-bar-width", 72);
  setDprSize("--side-bar-height", 256);
} else {
  setDprSize("--side-bar-width", 36);
  setDprSize("--side-bar-height", 128);
}

  console.log("DPR:", dpr, "Mobile:", isMobile);
}

updateIconSize();
window.addEventListener("resize", updateIconSize);

updateIconSize();
window.addEventListener("resize", updateIconSize);
window.addEventListener("resize", updateIconSize);

// CAMBIOS DE COLOR DE TITULO

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title-card");

  const colors = [
    "#EF5350", // OSO
    "#64B5F6", // KARA
    "#9CCC65", // CHORO
    "#BA68C8", // ICHI
    "#FFD54F", // JYUSHI
    "#F06292"  // TODO
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  title.style.setProperty("background-color", randomColor, "important");

  console.log("color aplicado:", randomColor);
});

const slider = document.getElementById("slider");
const grid = document.getElementById("grid");
const detailContent = document.getElementById("detailContent");
const creatureSearch = document.getElementById("creatureSearch");
const noCreatureFound = document.getElementById("noCreatureFound");
const dexArea = document.querySelector(".dex-area");

let currentCreature = null;

function renderGrid(list = creatures) {
  grid.innerHTML = "";

  list.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = c.id;

    const img = document.createElement("img");
    img.src = "images/creatures/" + c.icon;
    img.alt = "#" + c.id;

    const text = document.createElement("p");
    text.textContent = `#${c.id}`;

    card.appendChild(img);
    card.appendChild(text);

    card.addEventListener("click", function () {
      openDetail(c);
    });

    grid.appendChild(card);
  });
}

renderGrid();

if (creatureSearch) {
  creatureSearch.addEventListener("input", () => {
    const query = creatureSearch.value.toLowerCase().trim();

    const filtered = creatures.filter(c => {
      return (
        String(c.id).includes(query) ||
        (c.name || "").toLowerCase().includes(query) ||
        (c.matsu || "").toLowerCase().includes(query) ||
        (c.category || "").toLowerCase().includes(query) ||
        (c.pillar || "").toLowerCase().includes(query)
      );
    });

    renderGrid(filtered);

    if (filtered.length === 0 && query !== "") {
      dexArea.style.display = "none";
      noCreatureFound.style.display = "block";
    } else {
      dexArea.style.display = "";
      noCreatureFound.style.display = "none";
    }
  });
}

const detailPage = document.querySelector(".detail-page");
const backButtonPC = document.getElementById("backButtonPC");

function hasExtraInfo(c, key) {
  const value = c?.extras?.[key];

  // ARRAY
  if (Array.isArray(value)) {
    return value.some(item => {

      // string
      if (typeof item === "string") {
        return item.trim() !== "";
      }

      // object
      if (typeof item === "object" && item !== null) {
        return Object.values(item).some(v =>
          v && v.toString().trim() !== ""
        );
      }

      return false;
    });
  }

  // OBJECT
  if (typeof value === "object" && value !== null) {
    return Object.values(value).some(v =>
      v && v.toString().trim() !== ""
    );
  }

  // STRING
  return value && value.toString().trim() !== "";
}

function getExtraButton(c, type, key, iconName) {
  const active = hasExtraInfo(c, key);

  return `
    <button
      class="extra-icon-btn ${active ? "extra-on" : "extra-off"}"
      ${active ? `onclick="openExtraPopup('${type}')"` : "disabled"}
    >
      <img src="images/extras/${iconName}-${active ? "on" : "off"}.png">
      <span>${type}</span>
    </button>
  `;
}

// DETAIL RIGHT

function openDetail(c) {

  currentCreature = c;

  const isSextuplet = Number(c.id) <= 6;

  const descriptionCard = isSextuplet
    ? ""
    : `
      <div class="text-card-row">
        <div class="info-label text-card-label">DESCRIPTION</div>
        <div class="info-value text-card-value">${parseMarkdown((c.description || "TBA").trim())}</div>
      </div>
    `;

  const rightCards = [
    !isSextuplet && ["FUNCTION", c.functionText],
    !isSextuplet && ["NAME ORIGIN", c.nameOrigin],
    ["GENERAL ORIGIN", c.generalOrigin],
    !isSextuplet && ["REFERENCE TO OSOMATSU-SAN", c.reference],
    !isSextuplet && ["EXTRA", "extra-icons"]
  ]
    .filter(Boolean)
    .filter(([title, text]) => text && text.trim() !== "")
  .map(([title, text]) => {
  if (text === "extra-icons") {
    return `
      <div class="text-card-row extra-card-row">
        <div class="info-label text-card-label">EXTRA</div>

        <div class="extra-icon-grid">
  ${getExtraButton(c, "ACTION", "action", "action")}
  ${getExtraButton(c, "SHEET", "sheet", "sheet")}
  ${getExtraButton(c, "LOG", "log", "log")}
  ${getExtraButton(c, "FUN FACT", "funFact", "funfact")}
</div>
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="text-card-row">
      <div class="info-label text-card-label">${title}</div>
      <div class="info-value text-card-value">${parseMarkdown(text.trim())}</div>
    </div>
  `;
})
    .join("");

const currentIndex = creatures.findIndex(item => item.id === c.id);
const prevCreature = creatures[currentIndex - 1];
const nextCreature = creatures[currentIndex + 1];

detailContent.innerHTML = `
<div class="detail-title-card">
  <div class="detail-title-main">
    <img src="images/creatures/${c.icon}" class="detail-title-icon">
    <div class="detail-title-text">#${c.id} - ${c.name}</div>
  </div>

<div class="detail-nav-pc">
  ${prevCreature ? `
    <div class="detail-nav-card">◀ #${prevCreature.id} - ${prevCreature.name}</div>
  ` : ""}

  ${prevCreature && nextCreature ? `
    <div class="detail-nav-line">—</div>
  ` : ""}

  ${nextCreature ? `
    <div class="detail-nav-card">#${nextCreature.id} - ${nextCreature.name} ▶</div>
  ` : ""}
</div>
</div>

<div class="detail-mobile-top">
  <button class="back-button-mobile" onclick="closeDetail()">
    <img src="images/arrow-left.png" class="back-icon">
    BACK
  </button>

  <div class="detail-nav-mobile-card">
    ${prevCreature ? `
      <button class="detail-nav-mobile-btn" onclick="openDetailById('${prevCreature.id}')">
        ◀ #${prevCreature.id}
      </button>
    ` : ""}

    ${prevCreature && nextCreature ? `
      <span class="detail-nav-mobile-line">–</span>
    ` : ""}

    ${nextCreature ? `
      <button class="detail-nav-mobile-btn" onclick="openDetailById('${nextCreature.id}')">
        #${nextCreature.id} ▶
      </button>
    ` : ""}
  </div>
</div>

    <div class="detail-main-layout">
      <div class="detail-left-column">

        <div class="detail-image-card">
          <div class="detail-image-inner">
            <img src="images/creatures/${c.image}" class="detail-creature-image">
          </div>
        </div>

        <div class="detail-info-grid">
          <div class="info-row matsu-row">
            <div class="info-label">MATSU</div>
            <div class="info-value info-value-matsu matsu-${c.matsu || "oso"}">
              ${(c.matsu || "oso").toUpperCase()}
            </div>
          </div>

          <div class="info-row">
            <div class="info-label">CATEGORY</div>
            <div class="info-value category-name">${c.category || "TBA"}</div>
          </div>

          <div class="info-row full-row">
            <div class="info-label">PILLAR</div>
            <div class="info-value pillar-name">${c.pillar || "TBA"}</div>
          </div>

          <div class="info-row full-row">
            <div class="info-label">SIZE</div>
            <div class="info-value size-name">${c.size || "TBA"}</div>
          </div>
        </div>

        <div class="detail-text-section">
          <div class="text-card-row">
            <div class="info-label text-card-label">DESCRIPTION ACCORDING TO DR. LEEZAR</div>
            <div class="text-card-value dr-text">${(c.drDescription || "TBA").trim()}</div>
          </div>

          ${descriptionCard}
        </div>

      </div>

      <div class="detail-right-column">
        ${rightCards}
      </div>
    </div>
  `;

document.querySelectorAll(".lore-link").forEach(link => {
  link.addEventListener("click", (e) => {

    const target = link.dataset.link;

    // Si es link externo, no tocar
    if (!target) return;

    e.preventDefault();

    const found = creatures.find(c =>
      c.id === target
    );

    if (found) {
      openDetail(found);
    }
  });
});

  slider.classList.add("active");
  detailPage.classList.add("active");
  backButtonPC.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  currentCreature = null;
    detailPage.classList.remove("active");
    backButtonPC.style.display = "none";
    slider.classList.remove("active");
	document.body.style.overflow = "auto";
}

window.parseMarkdown = function(text) {
  if (!text) return "";

  let parsed = text.trim();

// INTERNAL POPUP LINKS
parsed = parsed.replace(
  /\[link:([^:]+):([^:]+):([^:\]]+)(?::([^:\]]+))?\]/g,
  function(_, label, target, from, returnId) {
    return `<span class="lore-link" data-open-popup="${target}" data-from-popup="${from}" data-return-id="${returnId || ""}">${label}</span>`;
  }
);

// NORMAL LINKS
parsed = parsed.replace(/\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, function(_, label, link) {
  if (link.startsWith("http")) {
    return `<a href="${link}" target="_blank" class="lore-link external-link">${label}</a>`;
  } else {
    return `<a href="#" class="lore-link" data-link="${link}">${label}</a>`;
  }
});

// SYSTEM / GENERAL INLINE IMAGE
parsed = parsed.replace(
  /\[img\](.*?)\[\/img\]/g,
  `<div class="text-image-wrap">
    <img src="$1" class="text-image">
  </div>`
);

// MATSU COLOR TEXT
parsed = parsed.replace(/\[m1\](.*?)\[\/m1\]/g, `<span class="matsu-text matsu-text-oso">$1</span>`);
parsed = parsed.replace(/\[m2\](.*?)\[\/m2\]/g, `<span class="matsu-text matsu-text-kara">$1</span>`);
parsed = parsed.replace(/\[m3\](.*?)\[\/m3\]/g, `<span class="matsu-text matsu-text-choro">$1</span>`);
parsed = parsed.replace(/\[m4\](.*?)\[\/m4\]/g, `<span class="matsu-text matsu-text-ichi">$1</span>`);
parsed = parsed.replace(/\[m5\](.*?)\[\/m5\]/g, `<span class="matsu-text matsu-text-jyushi">$1</span>`);
parsed = parsed.replace(/\[m6\](.*?)\[\/m6\]/g, `<span class="matsu-text matsu-text-todo">$1</span>`);


// MARKDOWN BLOCK [md]
parsed = parsed.replace(
  /\[md\]([\s\S]*?)\[\/md\]/g,
  function(match, content) {

    content = content.replace(/>/g, "&gt;");

    content = content.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );

    content = content.replace(
      /\*(.*?)\*/g,
      '<em>$1</em>'
    );

    content = content.replace(
  /^---$/gm,
  `<div class="md-separator"></div>`
);

    return `%%MARKDOWN%%${content}%%ENDMARKDOWN%%`;
  }
);

// GLOBAL BOLD
parsed = parsed.replace(
  /\*\*(.*?)\*\*/g,
  '<span class="md-color">$1</span>'
);

// GLOBAL ITALIC
parsed = parsed.replace(
  /\*(.*?)\*/g,
  '<span class="md-italic">$1</span>'
);

// __underline__
parsed = parsed.replace(/__(.*?)__/g, "<u>$1</u>");

// ~~strike~~
parsed = parsed.replace(/~~(.*?)~~/g, "<s>$1</s>");

// BLOCKQUOTE >
parsed = parsed.replace(/^>\s?(.*)$/gm, `<div class="md-quote">$1</div>`);

// SEPARATOR <->
parsed = parsed.replace(/<->/g, `<div class="md-separator"></div>`);

// RESTORE MARKDOWN
parsed = parsed.replace(
  /%%MARKDOWN%%([\s\S]*?)%%ENDMARKDOWN%%/g,
  '<div class="markdown">$1</div>'
);
  
// BULLETS
const lines = parsed.split("\n");

let finalText = "";
let inList = false;

lines.forEach(line => {

  const trimmed = line.trim();

  // NORMAL BULLET •
  if (trimmed.startsWith("• ")) {

    if (!inList) {
      finalText += `<ul class="dex-bullet-list">`;
      inList = true;
    }

    finalText += `<li>${trimmed.substring(2)}</li>`;

  // ABOUT BULLET ◦
  } else if (trimmed.startsWith("◦ ")) {

    if (!inList) {
      finalText += `<ul class="about-bullet-list">`;
      inList = true;
    }

    finalText += `<li>${trimmed.substring(2)}</li>`;

  } else {

    if (inList) {
      finalText += `</ul>`;
      inList = false;
    }

    if (trimmed !== "") {
      finalText += trimmed + "<br>";
    }

  }

});

if (inList) {
  finalText += `</ul>`;
}

return finalText;

}

// KEYBOARD ARROWS - CREATURE LIST / DETAIL
document.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;

  const activeTag = document.activeElement?.tagName;
  if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

  e.preventDefault();

  const direction = e.key === "ArrowRight" ? 1 : -1;

  // Si estás en DETAIL: cambia criatura anterior/siguiente
  if (currentCreature) {
    const index = creatures.findIndex(c => c.id === currentCreature.id);
    const next = creatures[index + direction];

    if (next) {
      openDetail(next);
      flashGridCard(next.id); // <-- Aquí agregas la animación
    }

    return;
  }

  // Si estás en HOME: corre/scroll la lista
  const firstCard = grid.querySelector(".card");
  const cardStep = firstCard ? firstCard.offsetHeight + 8 : 80;

  grid.scrollBy({
    top: cardStep * direction,
    behavior: "smooth"
  });
});

function flashGridCard(creatureId) {
  const card = document.querySelector(`.card[data-id="${creatureId}"]`);
  if (!card) return;

  card.classList.remove("keyboard-target");
  void card.offsetWidth;
  card.classList.add("keyboard-target");

  setTimeout(() => {
    card.classList.remove("keyboard-target");
  }, 450);
}

function openDetailById(id) {
  const found = creatures.find(c => c.id === id);
  if (!found) return;

  openDetail(found);
  flashGridCard(found.id);
}

/* SEARCH + FILTER */

const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");
const filterPanel = document.getElementById("filterPanel");
const applyFilterBtn = document.getElementById("applyFilterBtn");

function getCheckedValues(selector) {
  return [...document.querySelectorAll(selector + ":checked")]
    .map(input => input.value.toLowerCase());
}

function getCreatureIdNumber(c) {
  return parseInt(String(c.id).replace(/\D/g, ""), 10);
}

function getCreatureMatsuKey(c) {
  const directMatsu = (c.matsu || "").toLowerCase();

  if (directMatsu) return directMatsu;

  const idNum = getCreatureIdNumber(c);
  const order = ["oso", "kara", "choro", "ichi", "jyushi", "todo"];

  if (Number.isNaN(idNum)) return "";

  if (idNum >= 1 && idNum <= 42) {
    return order[(idNum - 1) % 6];
  }

  if (idNum >= 43 && idNum <= 78) {
    return order[Math.floor((idNum - 43) / 6)];
  }

  return "";
}

function getCreaturePillarKey(c) {
  const idNum = getCreatureIdNumber(c);

  if (Number.isNaN(idNum)) return "";

  if (idNum >= 1 && idNum <= 6) return "sextuplets";
  if (idNum >= 7 && idNum <= 42) return "origins";
  if (idNum >= 43 && idNum <= 78) return "variations";
  if (idNum >= 79 && idNum <= 114) return "variations2";
  if (idNum >= 115 && idNum <= 150) return "variations3";
  if (idNum >= 151 && idNum <= 186) return "variations4";

  return "";
}

function applySearchAndFilters() {
  const query = searchInput.value.toLowerCase().trim();

  const activeMatsuFilters = getCheckedValues(".matsu-filter");
  const activePillarFilters = getCheckedValues(".pillar-filter");

  const filtered = creatures.filter(c => {
    const searchableText = [
      c.id,
      `#${c.id}`,
      c.name,
      c.matsu,
      c.category,
      c.pillar,
      c.size
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const creatureName = (c.name || "").toLowerCase();
const creatureId = String(c.id || "").toLowerCase();
const creatureNumber = creatureId.replace(/\D/g, "");

const matchesSearch =
  query === "" ||
  creatureName.startsWith(query) ||
  creatureId.startsWith(query) ||
  creatureNumber.startsWith(query) ||
  `#${creatureNumber}`.startsWith(query);

    const matchesMatsu =
      activeMatsuFilters.length === 0 ||
      activeMatsuFilters.includes(getCreatureMatsuKey(c));

    const matchesPillar =
      activePillarFilters.length === 0 ||
      activePillarFilters.includes(getCreaturePillarKey(c));

    return matchesSearch && matchesMatsu && matchesPillar;
  });

  renderGrid(filtered);

  if (filtered.length === 0) {
    dexArea.style.display = "none";
    noCreatureFound.style.display = "block";
  } else {
    dexArea.style.display = "";
    noCreatureFound.style.display = "none";
  }

  console.log("Matsu:", activeMatsuFilters);
  console.log("Pillar:", activePillarFilters);
  console.log("Results:", filtered.length);
}

filterBtn.addEventListener("click", () => {
  filterPanel.classList.toggle("hidden");
});

document.querySelectorAll(".filter-option input").forEach(input => {
  input.addEventListener("change", () => {
    const label = input.closest(".filter-option");
    const img = label.querySelector(".check-img");

    img.src = input.checked
      ? "images/mark-on.png"
      : "images/mark-off.png";

    label.classList.toggle("checked", input.checked);

    applySearchAndFilters();
  });
});

applyFilterBtn.addEventListener("click", () => {
  applyFilterBtn.classList.remove("pop-ok");
  void applyFilterBtn.offsetWidth;
  applyFilterBtn.classList.add("pop-ok");

  setTimeout(() => {
    filterPanel.classList.add("hidden");
  }, 180);
});

searchInput.addEventListener("input", applySearchAndFilters);