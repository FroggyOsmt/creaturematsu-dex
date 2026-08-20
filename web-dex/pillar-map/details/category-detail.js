// ========================================
// PILLAR MAP - CATEGORY DETAIL
// ========================================

function getCategoryCreatureImagePath(item = {}) {
  if (item.creatureImage) return item.creatureImage;

  const dexValue =
    item.dexRange ||
    item.number ||
    item.value ||
    "";
  const dexMatch = String(dexValue).match(/\d{3}/);

  return dexMatch
    ? `../info-data/creature-data/creature-image/c${dexMatch[0]}.png`
    : "";
}

function escapeCategoryDetailAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

window.getCategoryCreatureImagePath = getCategoryCreatureImagePath;

function createCategoryDetailItems(items = []) {
  if (!Array.isArray(items)) return "";

  return items
    .map(item => {
      const currentItem =
        typeof item === "string"
          ? { label: item }
          : item || {};

      const label =
        currentItem.label ||
        currentItem.name ||
        "UNKNOWN";

      const value =
        currentItem.dexRange ||
        currentItem.number ||
        currentItem.value ||
        "";

      const creatureImage = getCategoryCreatureImagePath(currentItem);
      const itemTag = creatureImage ? "button" : "div";
      const safeLabel = escapeCategoryDetailAttribute(label);
      const safeImage = escapeCategoryDetailAttribute(creatureImage);
      const safeImageAlt = escapeCategoryDetailAttribute(
        `${value} ${label}`.trim()
      );

      return `
        <${itemTag}
          class="category-detail-item"
          style="--category-color: ${currentItem.color || "#6F3022"};"
          ${
            creatureImage
              ? `type="button" data-creature-image="${safeImage}" data-creature-image-alt="${safeImageAlt}" aria-label="Open image of ${safeLabel}"`
              : ""
          }
        >

          <span class="category-detail-icon category-detail-icon-left">
            ${
              currentItem.icon
                ? `
                    <img
                      src="${currentItem.icon}"
                      alt=""
                      class="category-detail-icon-image"
                    >
                  `
                : ""
            }
          </span>

          <span class="category-detail-middle">
            <span class="category-detail-name">
              ${label}
            </span>

            <span class="category-detail-value">
              ${value}
            </span>
          </span>

          <span class="category-detail-icon category-detail-icon-right">
            ${
              currentItem.rightIcon
                ? `
                    <img
                      src="${currentItem.rightIcon}"
                      alt=""
                      class="category-detail-icon-image"
                    >
                  `
                : ""
            }
          </span>

        </${itemTag}>
      `;
    })
    .join("");
}

window.createCategoryDetailImage = function (data) {
  if (!data?.image) return "";

  const hasCategoryLogo =
    Object.prototype.hasOwnProperty.call(
      data,
      "categoryLogo"
    );

  return `
    <div class="detail-category-image">
      <img
        src="${data.image}"
        alt="${data.imageAlt || data.label || "Category"}"
      >
    </div>

    ${
      hasCategoryLogo
        ? `
            <div class="detail-category-logo-data">
              <div class="detail-category-logo-row">

                <div class="detail-category-logo-label">
                  CATEGORY LOGO
                </div>

                <div class="detail-category-logo-value">
                  ${data.categoryLogo || ""}
                </div>

              </div>
            </div>
          `
        : ""
    }
  `;
};

window.createCategoryDetailList = function (data) {
  const items = Array.isArray(data?.list)
    ? data.list
    : Array.isArray(data?.creatures)
      ? data.creatures
      : [];

  const listTitle = data?.listTitle || "";

  if (!listTitle && items.length === 0) {
    return "";
  }

  return `
    <section class="detail-info-section">

      ${
        listTitle
          ? `
              <div class="detail-info-section-title">
                ${listTitle}
              </div>
            `
          : ""
      }

      <div class="detail-info-section-body category-detail-list">
        ${createCategoryDetailItems(items)}
      </div>

    </section>
  `;
};

document.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;

  const trigger = event.target.closest("[data-creature-image]");

  if (!trigger || typeof window.openMarkdownImagePopupFromSource !== "function") {
    return;
  }

  window.openMarkdownImagePopupFromSource(
    trigger.dataset.creatureImage,
    trigger.dataset.creatureImageAlt || "",
    "creature"
  );
});
