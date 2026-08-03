// ========================================
// PILLAR MAP — DETAIL INFORMATION
// ========================================

// ========================================
// FORMAT MARKDOWN TEXT
// ========================================

function formatDetailText(text) {
  const value = String(text || "");

  if (
    typeof window.parseMarkdown === "function"
  ) {
    return window.parseMarkdown(value);
  }

  return value;
}

// ========================================
// DETAIL TOC / SECTION IDS
// ========================================

function createDetailSectionId(title, index) {
  return "detail-section-" + index + "-" + String(title || "section")
    .replace(/\*\*/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildDetailToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="detail-toc-title">
      Contents
    </div>

    <div class="detail-toc-links">
      ${sections.map((section, index) => {
        const rawTitle = section.title || "Section";
        const cleanTitle = rawTitle.replace(/\*\*/g, "");
        const id = createDetailSectionId(rawTitle, index);

        return `
          <button
            type="button"
            class="detail-toc-link"
            data-scroll-target="${id}"
          >
            ${formatDetailText(cleanTitle)}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function buildDetailSections(sections, startIndex = 0) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return sections.map((section, index) => {
    const realIndex = startIndex + index;

    const id = createDetailSectionId(
      section.title || "section",
      realIndex
    );

    return `
      <section
        class="detail-info-section detail-log-section"
        id="${id}"
      >

        <div class="detail-section-title-row">

          <div class="detail-info-section-title">
            ${formatDetailText(section.title || "")}
          </div>

          <button
            type="button"
            class="detail-top-btn"
            data-detail-top
          >
            TOP
          </button>

        </div>

        <div class="detail-info-section-body">
          ${formatDetailText(section.text || "")}
        </div>

      </section>
    `;
  }).join("");
}

// ========================================
// CREATE BADGE COLLECTION
// ========================================

function createBadgeCollection(data) {
  if (!data) return "";

  const images = Array.isArray(data.images)
    ? data.images
    : data.image
      ? [data.image]
      : [];

  if (!images.length) return "";

  return `
    <section class="detail-badge-collection">

      <div class="detail-info-section-title">
        ${data.title || "BADGE INCLUDES"}
      </div>

      <div class="detail-badge-collection-body">

        <div class="detail-badge-collection-list">
          ${images
  .map((badge, index) => {
    const src =
      typeof badge === "string"
        ? badge
        : badge.src;

    const label =
      typeof badge === "string"
        ? ""
        : badge.label || "";

    if (!src) return "";

    return `
      <div class="detail-badge-collection-item">

        <img
          src="${src}"
          alt="${label || data.alt || "Badge"} ${index + 1}"
          class="detail-badge-collection-image"
        >

        ${
          label
            ? `
              <div class="detail-badge-collection-label">
                ${label}
              </div>
            `
            : ""
        }

      </div>
    `;
  })
  .join("")}
        </div>

      </div>

    </section>
  `;
}

// ========================================
// CREATE INFORMATION SECTION
// ========================================

function createInfoSection(section) {
  if (!section?.title) return "";

  return `
    <section class="detail-info-section">

      <div class="detail-info-section-title">
        ${section.title}
      </div>

      <div class="detail-info-section-body">
        ${formatDetailText(section.text)}
      </div>

    </section>
  `;
}

// ========================================
// FORMAT CORE THEME
// ========================================

function formatCoreTheme(value) {
  const lines = String(value || "")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const items = lines
    .filter(line => line.startsWith("- "))
    .map(line => line.substring(2));

  if (!items.length) {
    return value;
  }

  return `
    <ul class="detail-core-theme-list">
      ${items
        .map(item => `<li>${item}</li>`)
        .join("")}
    </ul>
  `;
}

// ========================================
// CREATE PILLAR DATA ROW
// ========================================

function createPillarDataRow(label, value) {
  if (!value) return "";

  return `
    <div class="detail-pillar-data-row">

      <div class="detail-pillar-data-label">
        ${label}
      </div>

<div class="detail-pillar-data-value">
  ${
    label === "CORE THEME"
      ? formatCoreTheme(value)
      : value
  }
</div>

    </div>
  `;
}

// ========================================
// CREATE CATEGORY LIST
// ========================================

function createCategoryList(drums = {}) {
  return Object.values(drums)
    .map(drum => `
      <div
        class="detail-category-item"
        style="--category-color: ${drum.color || "#6F3022"};"
      >

        <span class="detail-category-icon detail-category-icon-left">
  ${
    drum.icon
      ? `
        <img
          src="${drum.icon}"
          alt=""
          class="detail-category-icon-image"
        >
      `
      : ""
  }
</span>

        <div class="detail-category-middle">

          <span class="detail-category-name">
            ${drum.label || "UNKNOWN"}
          </span>

          <span class="detail-category-range">
            ${drum.dexRange || ""}
          </span>

        </div>

        <span class="detail-category-icon detail-category-icon-right">
  ${
    drum.rightIcon
      ? `
        <img
          src="${drum.rightIcon}"
          alt=""
          class="detail-category-icon-image"
        >
      `
      : ""
  }
</span>

      </div>
    `)
    .join("");
}

// ========================================
// RENDER DETAIL INFORMATION
// ========================================

window.renderDetailInfo = function ({
  container,
  type,
  pillar,
  drumCode = null
}) {
  if (!container || !pillar) return;

  const pillarData =
    window.pillarMapData?.[String(pillar)] || null;

  if (!pillarData) return;

  const isCategory =
    type === "category";

  const drumSummary = isCategory
    ? pillarData.drums?.[drumCode] || null
    : null;

  const categoryData = isCategory
    ? window.pillarCategoryData?.[drumCode] || null
    : null;

  const drumData = isCategory
    ? {
        ...(drumSummary || {}),
        ...(categoryData || {})
      }
    : null;

// ========================================
// DETAIL TOC LINKS
// ========================================

function initDetailTocLinks(container) {
  const tocLinks =
    container.querySelectorAll(".detail-toc-link");

  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.scrollTarget;
      const target = container.querySelector(`#${targetId}`);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function scrollDetailToContents(container) {
  const toc = container.querySelector("#detailToc");

  if (!toc) return;

  toc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function initDetailTopButtons(container) {
  container
    .querySelectorAll(".detail-top-btn")
    .forEach(button => {
      button.addEventListener("click", () => {
        scrollDetailToContents(container);
      });
    });
}

function initDetailActiveTopButtons(container) {
  const scrollBox =
    container.querySelector(".detail-info-scroll");

  const sections =
    container.querySelectorAll(".detail-log-section");

  if (!scrollBox || sections.length === 0) return;

function updateActiveTopButton() {
  const scrollRect =
    scrollBox.getBoundingClientRect();

  const toc =
    container.querySelector("#detailToc");

  if (!toc) return;

  const tocRect =
    toc.getBoundingClientRect();

  container
    .querySelectorAll(".detail-top-btn")
    .forEach(button => {
      button.classList.remove("active");
    });

  let activeButton = null;
  let bestDistance = Infinity;

  sections.forEach(section => {
    const titleRow =
      section.querySelector(".detail-section-title-row");

    const button =
      section.querySelector(".detail-top-btn");

    if (!titleRow || !button) return;

    const titleRect =
      titleRow.getBoundingClientRect();

    const sectionRect =
      section.getBoundingClientRect();

    const titleIsVisible =
      titleRect.top < scrollRect.bottom &&
      titleRect.bottom > scrollRect.top;

    const distanceFromContents =
      sectionRect.top - tocRect.bottom;

    if (
      !titleIsVisible ||
      distanceFromContents <= 120
    ) {
      return;
    }

    const distanceFromTop =
      Math.abs(titleRect.top - scrollRect.top);

    if (distanceFromTop < bestDistance) {
      bestDistance = distanceFromTop;
      activeButton = button;
    }
  });

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

  scrollBox.addEventListener(
    "scroll",
    updateActiveTopButton
  );

  requestAnimationFrame(updateActiveTopButton);
}

  // ========================================
  // CURRENT INFORMATION
  // ========================================

  const title = isCategory
    ? drumData?.label || "UNKNOWN"
    : pillarData.title || `PILLAR ${pillar}`;

  const headerText = isCategory
    ? `${pillarData.ordinal} — CATEGORY`
    : `${pillarData.ordinal} — ${pillarData.title}`;

  const smallText = isCategory
    ? drumData?.dexRange || ""
    : pillarData.age || "";

  const description = isCategory
    ? drumData?.description || ""
    : pillarData.description || "";

  const infoSections = isCategory
    ? drumData?.infoSections || []
    : pillarData.infoSections || [];


  // ========================================
  // HTML
  // ========================================

  container.innerHTML = `
    <article class="detail-info">


      <!-- HEADER COMPLETO -->

<header class="pillar-detail-preview">

  <div class="pillar-detail-type">
    ${
      isCategory
        ? "CATEGORY"
        : pillarData.ordinal
    }
  </div>

  <h1 class="pillar-detail-title">
    ${
      isCategory
        ? drumData?.label || "UNKNOWN"
        : pillarData.title
    }
  </h1>

  <div class="pillar-detail-category">
    ${
      isCategory
        ? drumData?.dexRange || "TBA"
        : pillarData.age || ""
    }
  </div>

</header>

<div class="detail-info-scroll">

<!-- DOS COLUMNAS -->

  <div class="${
    isCategory
      ? "detail-category-columns"
      : "detail-info-columns"
  }">

<!-- COLUMNA IZQUIERDA -->

<aside class="${
  isCategory
    ? "detail-category-left"
    : "detail-info-left"
}">

  ${
    isCategory
      ? (
          window.createCategoryDetailImage?.(
            drumData
          ) || ""
        )
      : `
        ${
          pillarData.image
            ? `
              <div class="detail-pillar-image">
                <img
                  src="${pillarData.image}"
                  alt="${pillarData.imageAlt || pillarData.title}"
                >
              </div>
            `
            : ""
        }

        <div class="detail-pillar-data">

          ${createPillarDataRow(
            "MATSU DEX",
            pillarData.matsuDex
          )}

          ${createPillarDataRow(
            "REPRESENTATIVE COLOR",
            pillarData.representativeColor
          )}

          ${createPillarDataRow(
            "CENTRAL SYMBOL",
            pillarData.centralSymbol
          )}

        </div>
      `
  }

</aside>


<!-- COLUMNA DERECHA -->

<main class="${
  isCategory
    ? "detail-category-right"
    : "detail-info-right"
}">

  ${
    isCategory
      ? (
          window.createCategoryDetailList?.(
            drumData
          ) || ""
        )
      : `
        <section class="detail-info-section">

          <div class="detail-info-section-title">
            CATEGORY
          </div>

          <div class="
            detail-info-section-body
            detail-category-list
          ">
            ${createCategoryList(
              pillarData.drums
            )}
          </div>

        </section>

        <div class="detail-pillar-data">

  ${createPillarDataRow(
    "CORE THEME",
    pillarData.coreTheme
  )}

</div>
      `
  }

</main>

</div>

<!-- BLOQUE COMPLETO INFERIOR -->

${
  (() => {
    const bottomSections = [
      {
        title: "DESCRIPTION",
        text: description
      },
      ...infoSections
    ].filter(section =>
      section?.title &&
      String(section?.text || "").trim() !== ""
    );

    if (!bottomSections.length) return "";

return `
  <div class="detail-info-bottom">

    <div class="detail-toc" id="detailToc">
      ${buildDetailToc(bottomSections)}
    </div>

    <div class="detail-log-card">

  ${buildDetailSections(
    [bottomSections[0]],
    0
  )}

  ${
    !isCategory
      ? createBadgeCollection(
          pillarData.badgeIncludes
        )
      : ""
  }

  ${buildDetailSections(
    bottomSections.slice(1),
    1
  )}

</div>

  </div>
`;
  })()
}

</div>

    </article>
  `;

const detailInfo =
  container.querySelector(".detail-info");

const scrollArea =
  container.querySelector(".detail-info-scroll");

enableSlowWheelScroll(
  detailInfo,
  scrollArea
);

initDetailTocLinks(container);
initDetailTopButtons(container);
initDetailActiveTopButtons(container);

};

// ========================================
// SLOW MOUSE WHEEL
// ========================================

function enableSlowWheelScroll(wrapper, scrollArea) {
  if (!wrapper || !scrollArea) return;

  const wheelStep = 35;

  wrapper.addEventListener(
    "wheel",
    event => {
      if (event.ctrlKey) return;

      const direction = Math.sign(event.deltaY);

      if (direction === 0) return;

      const maxScroll =
        scrollArea.scrollHeight -
        scrollArea.clientHeight;

      const isAtTop =
        scrollArea.scrollTop <= 0;

      const isAtBottom =
        scrollArea.scrollTop >= maxScroll - 1;

      if (
        direction < 0 &&
        isAtTop
      ) {
        return;
      }

      if (
        direction > 0 &&
        isAtBottom
      ) {
        return;
      }

      event.preventDefault();

      scrollArea.scrollTop +=
        direction * wheelStep;
    },
    {
      passive: false
    }
  );
}
