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
    }

    return `<a href="#" class="lore-link" data-link="${link}">${label}</a>`;
  });

  // SYSTEM / GENERAL INLINE IMAGE
  parsed = parsed.replace(
    /\[img\](.*?)\[\/img\]/g,
    `<div class="text-image-wrap"><img src="$1" class="text-image" alt=""></div>`
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

  // BULLET LISTS
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
        finalText += trimmed + "<br>";
      }
    }
  });

  closeList();

  return finalText;
};
