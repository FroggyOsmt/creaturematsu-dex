const system = {
  pillar: pillarData,
  badge: badgeData,
  matsunianLanguage: matsunianLanguageData
};

let systemHTMLReady = false;

fetch("html/system.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
    systemHTMLReady = true;
    initSystemScroll();
  });

function openSystemPage(systemData) {
  if (!systemHTMLReady) {
    console.warn("system.html todavía no cargó.");
    return;
  }

  const popup = document.getElementById("systemPage");
  if (!popup) return;

  const data = normalizeSystemData(systemData);

  document.getElementById("systemTitle").textContent = data.name || "SYSTEM";

  renderSystemMainImages(data.image, data.name || "System");

  document.getElementById("systemDescription").innerHTML =
    parseMarkdown(data.description || "TBA");

  const sections = data.sections || [];

  document.getElementById("systemToc").innerHTML =
    buildSystemToc(sections);

  document.getElementById("systemSections").innerHTML =
    buildSystemSections(sections);

  initSystemTocLinks();
  initSystemActiveTopButtons();

  popup.classList.add("active");

  requestAnimationFrame(() => {
    const systemBg = document.querySelector(".system-page-bg");

    if (systemBg) {
      systemBg.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    }

    document.querySelectorAll(".system-page-top-btn").forEach(btn => {
      btn.classList.remove("active");
    });
  });
}

function closeSystemPage() {
  const popup = document.getElementById("systemPage");
  if (!popup) return;

  popup.classList.remove("active");

  if (typeof openSystemPopup === "function") {
    openSystemPopup();
  }
}

function normalizeSystemData(systemData) {
  const data = Array.isArray(systemData)
    ? systemData[0]
    : systemData;

  if (!data) return {};

  return {
    name: data.name || data.title || "SYSTEM",
    image: data.image || data.img || data.fullImage || data.icon || "",
    description: data.description || "TBA",
    sections: data.sections || data.infoSections || data.logs || []
  };
}

function renderSystemMainImages(imageData, altText) {
  const imageGrid = document.getElementById("systemImageGrid");
  if (!imageGrid) return;

  imageGrid.innerHTML = "";

  let images = [];

  if (Array.isArray(imageData)) {
    images = imageData.filter(Boolean).slice(0, 2);
  } else if (imageData) {
    images = [imageData];
  }

  imageGrid.classList.remove("single-image", "double-image");

  if (images.length === 1) {
    imageGrid.classList.add("single-image");
  }

  if (images.length === 2) {
    imageGrid.classList.add("double-image");
  }

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = altText;
    img.className = "system-page-image";

    imageGrid.appendChild(img);
  });
}

function createSystemSectionId(title, index) {
  return "system-section-" + index + "-" + title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSystemToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="system-page-toc-title">Contents</div>

    <div class="system-page-toc-links">
      ${sections.map((section, index) => {
        const id = createSystemSectionId(section.title || "section", index);

        return `
          <button class="system-page-toc-link" data-scroll-target="${id}">
            ${parseMarkdown(section.title || "Section")}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function buildSystemSections(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return sections.map((section, index) => {
    const id = createSystemSectionId(section.title || "section", index);

    return `
      <div class="system-page-log-section" id="${id}">

        <div class="system-page-log-title-row">
          <div class="system-page-log-title">
            ${parseMarkdown(section.title || "")}
          </div>

          <button class="system-page-top-btn" onclick="scrollSystemToContents()">
            TOP
          </button>
        </div>

        <div class="system-page-log-separator"></div>

        <div class="system-page-log-text">
          ${parseMarkdown(section.text || "")}
        </div>

      </div>
    `;
  }).join("");
}

function initSystemTocLinks() {
  const tocLinks = document.querySelectorAll(".system-page-toc-link");

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

function scrollSystemToContents() {
  const toc = document.getElementById("systemToc");

  if (!toc) return;

  toc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function initSystemActiveTopButtons() {
  const scrollBox = document.querySelector(".system-page-bg");
  const sections = document.querySelectorAll(".system-page-log-section");

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

    document.querySelectorAll(".system-page-top-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    if (activeSection) {
      const toc = document.getElementById("systemToc");
      const btn = activeSection.querySelector(".system-page-top-btn");

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

function initSystemScroll() {
  const systemBg = document.querySelector(".system-page-bg");

  if (!systemBg) return;

  systemBg.addEventListener("wheel", (e) => {
    e.preventDefault();

    const direction = Math.sign(e.deltaY);
    systemBg.scrollTop += direction * 30;
  }, { passive: false });
}

function renderSystemMainImages(imageData, altText) {
  const imageGrid = document.getElementById("systemImageGrid");
  if (!imageGrid) return;

  imageGrid.innerHTML = "";

  let images = [];

  if (Array.isArray(imageData)) {
    images = imageData.filter(Boolean).slice(0, 2);
  } else if (imageData) {
    images = [imageData];
  }

  imageGrid.classList.remove("single-image", "double-image");

  if (images.length === 1) {
    imageGrid.classList.add("single-image");
  }

  if (images.length === 2) {
    imageGrid.classList.add("double-image");
  }

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = altText;
    img.className = "system-page-image";

    imageGrid.appendChild(img);
  });

  // SCROLL RAPIDO

  function createSystemSectionId(title, index) {
  return "system-section-" + index + "-" + title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSystemToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="system-page-toc-title">Contents</div>

    <div class="system-page-toc-links">
      ${sections.map((section, index) => {
        const id = createSystemSectionId(section.title || "section", index);

        return `
          <button class="system-page-toc-link" data-scroll-target="${id}">
            ${parseMarkdown(section.title || "Section")}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function initSystemTocLinks() {
  const tocLinks = document.querySelectorAll(".system-page-toc-link");

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

function createSystemSectionId(title, index) {
  return "system-section-" + index + "-" + title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSystemToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="system-page-toc-title">Contents</div>

    <div class="system-page-toc-links">
      ${sections.map((section, index) => {
        const id = createSystemSectionId(section.title || "section", index);

        return `
          <button class="system-page-toc-link" data-scroll-target="${id}">
            ${parseMarkdown(section.title || "Section")}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function initSystemTocLinks() {
  const tocLinks = document.querySelectorAll(".system-page-toc-link");

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

function scrollSystemToContents() {
  const toc = document.getElementById("systemToc");

  if (!toc) return;

  toc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function initSystemActiveTopButtons() {
  const scrollBox = document.querySelector(".system-page-bg");
  const sections = document.querySelectorAll(".system-page-log-section");

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

    document.querySelectorAll(".system-page-top-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    if (activeSection) {
      const toc = document.getElementById("systemToc");
      const btn = activeSection.querySelector(".system-page-top-btn");

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
}