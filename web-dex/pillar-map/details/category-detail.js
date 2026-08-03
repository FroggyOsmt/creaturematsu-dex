// ========================================
// PILLAR MAP - CATEGORY DETAIL
// ========================================

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

      return `
        <div
          class="category-detail-item"
          style="--category-color: ${currentItem.color || "#6F3022"};"
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

          <div class="category-detail-middle">
            <span class="category-detail-name">
              ${label}
            </span>

            <span class="category-detail-value">
              ${value}
            </span>
          </div>

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

        </div>
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
