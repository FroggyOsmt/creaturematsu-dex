// ========================================
// CREATUREMATSU — MARKDOWN PARSER
// ========================================

let markdownImagePopupLastFocusedElement = null;

function escapeMarkdownImageAttribute(value) {
  return String(value || "")
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function ensureMarkdownImagePopup() {
  let popup = document.getElementById("markdownImagePopup");
  if (popup) return popup;

  popup = document.createElement("div");
  popup.id = "markdownImagePopup";
  popup.className = "markdown-image-popup-overlay";
  popup.setAttribute("aria-hidden", "true");
  popup.innerHTML = `
    <section class="markdown-image-popup-card" role="dialog" aria-modal="true" aria-label="Full image view">
      <div class="markdown-image-popup-view">
        <img class="markdown-image-popup-image" src="" alt="">
      </div>
      <button type="button" class="markdown-image-popup-back">BACK</button>
    </section>
  `;

  popup.querySelector(".markdown-image-popup-back")
    .addEventListener("click", closeMarkdownImagePopup);
  popup.addEventListener("click", event => {
    if (event.target === popup) closeMarkdownImagePopup();
  });

  document.body.appendChild(popup);
  return popup;
}

function openMarkdownImagePopup(trigger) {
  const sourceImage = trigger?.querySelector("img");
  if (!sourceImage) return;

  const popup = ensureMarkdownImagePopup();
  const popupImage = popup.querySelector(".markdown-image-popup-image");
  const backButton = popup.querySelector(".markdown-image-popup-back");

  markdownImagePopupLastFocusedElement = document.activeElement;
  popupImage.src = sourceImage.currentSrc || sourceImage.src;
  popupImage.alt = sourceImage.alt || "";

  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("markdown-image-popup-open");
  document.body.classList.add("markdown-image-popup-open");

  requestAnimationFrame(() => backButton.focus());
}

function closeMarkdownImagePopup() {
  const popup = document.getElementById("markdownImagePopup");
  if (!popup || !popup.classList.contains("open")) return;

  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
  document.documentElement.classList.remove("markdown-image-popup-open");
  document.body.classList.remove("markdown-image-popup-open");

  if (markdownImagePopupLastFocusedElement?.focus) {
    markdownImagePopupLastFocusedElement.focus();
  }

  markdownImagePopupLastFocusedElement = null;
}

document.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;

  const trigger = event.target.closest("[data-markdown-image-zoom]");
  if (trigger) openMarkdownImagePopup(trigger);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMarkdownImagePopup();
});

window.parseMarkdown = function (text) {
  if (!text) return "";

  let parsed = String(text).trim();


// ========================================
// INTERNAL POPUP LINKS
// [link:LABEL:TARGET:FROM:RETURN_ID]
// ========================================

parsed = parsed.replace(
  /\[link:([^:]+):([^:]+):([^:\]]+)(?::([^:\]]+))?\]/g,
  function (_, label, target, from, returnId) {
    return `<span class="lore-link" data-open-popup="${target}" data-from-popup="${from}" data-return-id="${returnId || ""}">${label}</span>`;
  }
);


// ========================================
// LINKS
// [LABEL](URL)
// ========================================

parsed = parsed.replace(
  /\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g,
  function (_, label, link) {
    if (
      link.startsWith("http://") ||
      link.startsWith("https://")
    ) {
      return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="lore-link external-link">${label}</a>`;
    }

    return `<a href="${link}" class="lore-link">${label}</a>`;
  }
);


// ========================================
// INLINE IMAGE
// [img]PATH[/img]
// ~[img]PATH[/img]~ (CLICK FOR FULL VIEW)
// ========================================

parsed = parsed.replace(
  /~\[img\](.*?)\[\/img\]~/g,
  function (_, imagePath) {
    const safePath = escapeMarkdownImageAttribute(imagePath);

    return `<button type="button" class="text-image-wrap text-image-zoom-trigger" data-markdown-image-zoom aria-label="Open full image view"><img src="${safePath}" class="text-image" alt=""></button>`;
  }
);

parsed = parsed.replace(
  /\[img\](.*?)\[\/img\]/g,
  function (_, imagePath) {
    const safePath = escapeMarkdownImageAttribute(imagePath);

    return `<div class="text-image-wrap"><img src="${safePath}" class="text-image" alt=""></div>`;
  }
);


  // ========================================
  // MATSU COLOR TEXT
  // ========================================

  parsed = parsed.replace(
    /\[m1\](.*?)\[\/m1\]/g,
    `<span class="matsu-text matsu-text-oso">$1</span>`
  );

  parsed = parsed.replace(
    /\[m2\](.*?)\[\/m2\]/g,
    `<span class="matsu-text matsu-text-kara">$1</span>`
  );

  parsed = parsed.replace(
    /\[m3\](.*?)\[\/m3\]/g,
    `<span class="matsu-text matsu-text-choro">$1</span>`
  );

  parsed = parsed.replace(
    /\[m4\](.*?)\[\/m4\]/g,
    `<span class="matsu-text matsu-text-ichi">$1</span>`
  );

  parsed = parsed.replace(
    /\[m5\](.*?)\[\/m5\]/g,
    `<span class="matsu-text matsu-text-jyushi">$1</span>`
  );

  parsed = parsed.replace(
    /\[m6\](.*?)\[\/m6\]/g,
    `<span class="matsu-text matsu-text-todo">$1</span>`
  );


  // ========================================
  // SPECIAL MARKDOWN BLOCK
  // [md] CONTENT [/md]
  // ========================================

  parsed = parsed.replace(
    /\[md\]([\s\S]*?)\[\/md\]/g,
    function (_, content) {
      content = content.replace(/>/g, "&gt;");

      content = content.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );

      content = content.replace(
        /\*(.*?)\*/g,
        "<em>$1</em>"
      );

      content = content.replace(
        /^---$/gm,
        `<div class="md-separator"></div>`
      );

      return (
        `%%MARKDOWN%%${content}%%ENDMARKDOWN%%`
      );
    }
  );


  // ========================================
  // GLOBAL TEXT STYLES
  // ========================================

  // **BOLD**
  parsed = parsed.replace(
    /\*\*(.*?)\*\*/g,
    `<span class="md-color">$1</span>`
  );

  // *ITALIC*
  parsed = parsed.replace(
    /\*(.*?)\*/g,
    `<span class="md-italic">$1</span>`
  );

  // __UNDERLINE__
  parsed = parsed.replace(
    /__(.*?)__/g,
    `<u>$1</u>`
  );

  // ~~STRIKE~~
  parsed = parsed.replace(
    /~~(.*?)~~/g,
    `<s>$1</s>`
  );

  // > QUOTE
  parsed = parsed.replace(
    /^>\s?(.*)$/gm,
    `<div class="md-quote">$1</div>`
  );

  // <->
  parsed = parsed.replace(
    /<->/g,
    `<div class="md-separator"></div>`
  );


  // ========================================
  // RESTORE SPECIAL MARKDOWN
  // ========================================

  parsed = parsed.replace(
    /%%MARKDOWN%%([\s\S]*?)%%ENDMARKDOWN%%/g,
    `<div class="markdown">$1</div>`
  );


  // ========================================
  // BULLET LISTS
  // ========================================

  const lines = parsed.split("\n");

  let finalText = "";
  let currentListClass = "";
  let mainItemOpen = false;
  let subListOpen = false;

  function closeSubList() {
    if (!subListOpen) return;

    finalText += "</ul>";
    subListOpen = false;
  }

  function closeMainItem() {
    closeSubList();

    if (!mainItemOpen) return;

    finalText += "</li>";
    mainItemOpen = false;
  }

  function closeList() {
    closeMainItem();

    if (!currentListClass) return;

    finalText += "</ul>";
    currentListClass = "";
  }

  lines.forEach(line => {
    const trimmed = line.trim();

    const isNormalBullet = trimmed.startsWith("• ");
    const isSubBullet = trimmed.startsWith("▪ ");
    const isAboutBullet = trimmed.startsWith("◦ ");

    if (isNormalBullet) {
      if (currentListClass !== "dex-bullet-list") {
        closeList();
        finalText += `<ul class="dex-bullet-list">`;
        currentListClass = "dex-bullet-list";
      }

      closeMainItem();
      finalText += `<li>${trimmed.substring(2)}`;
      mainItemOpen = true;
    } else if (isSubBullet) {
      if (
        currentListClass === "dex-bullet-list" &&
        mainItemOpen
      ) {
        if (!subListOpen) {
          finalText += `<ul class="dex-sub-bullet-list">`;
          subListOpen = true;
        }

        finalText += `<li>${trimmed.substring(2)}</li>`;
      } else {
        closeList();
        finalText += `<ul class="dex-sub-bullet-list"><li>${trimmed.substring(2)}</li></ul>`;
      }
    } else if (isAboutBullet) {
      if (currentListClass !== "about-bullet-list") {
        closeList();
        finalText += `<ul class="about-bullet-list">`;
        currentListClass = "about-bullet-list";
      }

      finalText += `<li>${trimmed.substring(2)}</li>`;
    } else {
      closeList();

      if (trimmed !== "") {
        finalText += `${trimmed}<br>`;
      }
    }
  });

  closeList();

  return finalText;
};
