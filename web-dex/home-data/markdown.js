// ========================================
// CREATUREMATSU — GLOBAL MARKDOWN (website, Pillar Map and local editors)
// ========================================

let markdownImagePopupLastFocusedElement = null;
const markdownImagePopupHistoryKey = "creaturematsuPillarMapImage";
const markdownImagePopupMobileQuery = window.matchMedia("(max-width: 768px)");

function getMarkdownImagePopupHistoryState(state = window.history.state) {
  if (!state || typeof state !== "object") return null;

  const popupState = state[markdownImagePopupHistoryKey];

  if (
    !popupState ||
    popupState.open !== true ||
    typeof popupState.source !== "string" ||
    popupState.source === ""
  ) {
    return null;
  }

  return popupState;
}

function writeMarkdownImagePopupHistoryState(source, alt, mode) {
  if (!markdownImagePopupMobileQuery.matches) return;
  if (getMarkdownImagePopupHistoryState()) return;

  const currentState = window.history.state;
  const baseState =
    currentState && typeof currentState === "object" ? currentState : {};

  window.history.pushState(
    {
      ...baseState,
      [markdownImagePopupHistoryKey]: {
        open: true,
        source: String(source),
        alt: String(alt || ""),
        mode: String(mode || "")
      }
    },
    "",
    window.location.href
  );
}

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
  if (
    trigger?.classList.contains("sheet-image-zoom-trigger") &&
    markdownImagePopupMobileQuery.matches
  ) return;

  const sourceImage = trigger?.querySelector("img");
  if (!sourceImage) return;

  openMarkdownImagePopupFromSource(
    sourceImage.currentSrc || sourceImage.src,
    sourceImage.alt || ""
  );
}

function openMarkdownImagePopupFromSource(
  source,
  alt = "",
  mode = "",
  options = {}
) {
  if (!source) return;

  const popup = ensureMarkdownImagePopup();
  const popupImage = popup.querySelector(".markdown-image-popup-image");
  const backButton = popup.querySelector(".markdown-image-popup-back");

  markdownImagePopupLastFocusedElement = document.activeElement;
  popup.classList.toggle("markdown-image-popup-creature", mode === "creature");
  popupImage.src = source;
  popupImage.alt = alt;

  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("markdown-image-popup-open");
  document.body.classList.add("markdown-image-popup-open");

  if (options.writeHistory !== false) {
    writeMarkdownImagePopupHistoryState(source, alt, mode);
  }

  requestAnimationFrame(() => backButton.focus());
}

window.openMarkdownImagePopupFromSource = openMarkdownImagePopupFromSource;

function closeMarkdownImagePopup(options = {}) {
  const popup = document.getElementById("markdownImagePopup");
  if (!popup || !popup.classList.contains("open")) return;

  if (
    options.fromHistory !== true &&
    markdownImagePopupMobileQuery.matches &&
    getMarkdownImagePopupHistoryState()
  ) {
    window.history.back();
    return;
  }

  popup.classList.remove("open");
  popup.classList.remove("markdown-image-popup-creature");
  popup.setAttribute("aria-hidden", "true");
  document.documentElement.classList.remove("markdown-image-popup-open");
  document.body.classList.remove("markdown-image-popup-open");

  if (markdownImagePopupLastFocusedElement?.focus) {
    markdownImagePopupLastFocusedElement.focus();
  }

  markdownImagePopupLastFocusedElement = null;
}

function setMarkdownImageSpoilerState(trigger, revealed) {
  if (!trigger?.hasAttribute("data-markdown-image-spoiler")) return;

  trigger.toggleAttribute("data-markdown-image-spoiler-revealed", revealed);
  trigger.classList.toggle("text-image-spoiler-revealed", revealed);
  trigger.setAttribute("aria-expanded", String(revealed));
  trigger.setAttribute("aria-label", revealed ? "Hide spoiler image" : "Show spoiler image");
}

function toggleMarkdownImageSpoiler(trigger) {
  const revealed = !trigger.hasAttribute("data-markdown-image-spoiler-revealed");
  setMarkdownImageSpoilerState(trigger, revealed);
}

function setDiscordTextSpoilerState(spoiler, revealed) {
  if (!spoiler?.classList.contains("discord-spoiler")) return;

  spoiler.toggleAttribute("data-discord-spoiler-revealed", revealed);
  spoiler.classList.toggle("discord-spoiler-revealed", revealed);
  spoiler.setAttribute("aria-expanded", String(revealed));
  spoiler.setAttribute("aria-label", revealed ? "Hide spoiler text" : "Show spoiler text");
}

function toggleDiscordTextSpoiler(spoiler) {
  const revealed = !spoiler.hasAttribute("data-discord-spoiler-revealed");
  setDiscordTextSpoilerState(spoiler, revealed);
}

document.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;

  const textSpoiler = event.target.closest(".discord-spoiler");
  if (textSpoiler) {
    const selection = window.getSelection?.();
    const selectingSpoilerText = selection && !selection.isCollapsed && (
      textSpoiler.contains(selection.anchorNode) || textSpoiler.contains(selection.focusNode)
    );
    if (textSpoiler.hasAttribute("data-discord-spoiler-revealed") && selectingSpoilerText) return;

    event.preventDefault();
    toggleDiscordTextSpoiler(textSpoiler);
    return;
  }

  const spoiler = event.target.closest("[data-markdown-image-spoiler]");
  if (spoiler) {
    event.preventDefault();
    toggleMarkdownImageSpoiler(spoiler);
    return;
  }

  const trigger = event.target.closest("[data-markdown-image-zoom]");
  if (trigger) openMarkdownImagePopup(trigger);
});

document.addEventListener("keydown", event => {
  const textSpoiler = event.target instanceof Element
    ? event.target.closest(".discord-spoiler")
    : null;
  if (textSpoiler && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    toggleDiscordTextSpoiler(textSpoiler);
    return;
  }

  const spoiler = event.target instanceof Element
    ? event.target.closest("[data-markdown-image-spoiler]")
    : null;
  if (spoiler && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    toggleMarkdownImageSpoiler(spoiler);
    return;
  }

  const trigger = event.target instanceof Element
    ? event.target.closest("[data-markdown-image-zoom]")
    : null;
  if (trigger && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openMarkdownImagePopup(trigger);
    return;
  }

  if (event.key === "Escape" && document.getElementById("markdownImagePopup")?.classList.contains("open")) {
    event.preventDefault();
    event.stopImmediatePropagation();
    closeMarkdownImagePopup();
  }
});

window.addEventListener("popstate", event => {
  const popupState = getMarkdownImagePopupHistoryState(event.state);

  if (popupState) {
    openMarkdownImagePopupFromSource(
      popupState.source,
      popupState.alt,
      popupState.mode,
      { writeHistory: false }
    );
    return;
  }

  closeMarkdownImagePopup({ fromHistory: true });
});

// One renderer for every consumer. The editor option retains blank paragraphs
// typed in Discord; stored <p>, <br> and explicit <2br> work in every view.
(function () {
  "use strict";
  const backtick = String.fromCharCode(96);
  const colors = ["oso", "kara", "choro", "ichi", "jyushi", "todo"];
  const websiteTextColors = new Set([
    "#FF955D",
    "#773421", "#A56243", "#EFB775", "#FFE2C1",
    "#8E4B32", "#CA8D5C", "#F7CC9B",
    "#5F2F21", "#3D251F", "#281814"
  ]);

  function websiteTextColor(value) {
    const color = String(value || "").toUpperCase();
    return websiteTextColors.has(color) ? color : "";
  }

  function escapeText(value) {
    return String(value == null ? "" : value)
      .replace(/&(?!(?:#\d+|#x[\da-f]+|[a-z]+);)/gi, "&amp;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function safeUrl(value, image) {
    const url = String(value || "").trim();
    const protocol = url.replace(/[\u0000-\u0020]/g, "").match(/^([a-z][a-z\d+.-]*):/i);
    if (protocol && !(image ? /^(https?)$/i : /^(https?|mailto)$/i).test(protocol[1])) return "";
    return url;
  }

  function imageDisplayUrl(url) {
    const pendingPreview = typeof window !== "undefined"
      ? window.TransferMarkdownCommands?.previewSourceFor?.(url)
      : "";
    if (pendingPreview) return pendingPreview;
    if (typeof location === "undefined" || !/\/app\//i.test(location.pathname || "")) return url;
    if (/^(?:[a-z][a-z\d+.-]*:|\/|\.\.\/|\.\/)/i.test(url)) return url;
    return "../" + url;
  }

  function emphasis(text, special, protectedMarkup) {
    const boldOpen = special ? "<strong>" : '<span class="md-color">';
    const boldClose = special ? "</strong>" : "</span>";
    const italicOpen = special ? "<em>" : '<span class="md-italic">';
    const italicClose = special ? "</em>" : "</span>";
    const pieces = [], stack = [];
    let last = 0;
    const neighbor = (index, direction) => {
      const adjacent = direction < 0 ? text.slice(0, index) : text.slice(index);
      const token = adjacent.match(direction < 0 ? /\uE000(MD(\d+)|DOUBLEBR|PARAEND)\uE001$/ : /^\uE000(MD(\d+)|DOUBLEBR|PARAEND)\uE001/);
      if (!token) return (direction < 0 ? text[index - 1] : text[index]) || " ";
      const html = token[2] === undefined ? "<br>" : protectedMarkup[Number(token[2])];
      if (/<\/?(?:p|div|br|blockquote)\b/i.test(html)) return " ";
      const visible = html.replace(/<[^>]*>/g, "");
      if (visible) return direction < 0 ? visible.at(-1) : visible[0];
      return neighbor(index + direction * token[0].length, direction);
    };
    // Match delimiter runs, not independent regex replacements. Runs of 3 or 5
    // can close one style and open another after a partial toolbar selection.
    for (const match of text.matchAll(/\*+/g)) {
      pieces.push(text.slice(last, match.index));
      const before = neighbor(match.index, -1);
      const after = neighbor(match.index + match[0].length, 1);
      const whitespace = value => /\s/.test(value);
      const token = {
        count: match[0].length, open: "", close: "",
        // This editor's Discord dialect permits selecting punctuation along
        // with letters. Closing a style after a smart quote must still work.
        canOpen: !whitespace(after),
        canClose: !whitespace(before)
      };
      pieces.push(token);
      if (token.canClose) {
        while (token.count) {
          let index = stack.length - 1;
          for (; index >= 0; index--) {
            const opener = stack[index];
            const ambiguous = (opener.canClose || token.canOpen) &&
              (opener.count + token.count) % 3 === 0 && (opener.count % 3 !== 0 || token.count % 3 !== 0);
            if (opener.count && !ambiguous) break;
          }
          if (index < 0) break;
          const opener = stack[index];
          // Discard unmatched inner openers: emphasis must never cross itself.
          stack.length = index + 1;
          const count = opener.count === 3 && token.count >= 3 ? 3 : opener.count >= 2 && token.count >= 2 ? 2 : 1;
          const open = count === 3 ? boldOpen + italicOpen : count === 2 ? boldOpen : italicOpen;
          const close = count === 3 ? italicClose + boldClose : count === 2 ? boldClose : italicClose;
          opener.open = open + opener.open;
          token.close += close;
          opener.count -= count; token.count -= count;
          if (!opener.count) stack.pop();
        }
      }
      if (token.canOpen && token.count) stack.push(token);
      last = match.index + match[0].length;
    }
    pieces.push(text.slice(last));
    return pieces.map(piece => typeof piece === "string" ? piece : piece.close + "*".repeat(piece.count) + piece.open).join("");
  }

  function inline(value, special = false) {
    const tokens = [];
    const protect = html => {
      const marker = "\uE000MD" + tokens.length + "\uE001";
      tokens.push(html);
      return marker;
    };
    let text = String(value == null ? "" : value);
    text = text.replace(new RegExp(backtick + "([^" + backtick + "\\n]+)" + backtick, "g"),
      (_, code) => protect('<code class="md-inline-code">' + escapeText(code) + "</code>"));
    text = text.replace(/\[link:([^:]+):([^:]+):([^:\]]+)(?::([^:\]]+))?\]/g,
      (_, label, target, from, returnId) => protect('<span class="lore-link" data-open-popup="' +
        escapeText(target) + '" data-from-popup="' + escapeText(from) + '" data-return-id="' +
        escapeText(returnId || "") + '">' + inline(label, special) + "</span>"));
    // Resolve color containers before Markdown links. A color whose content
    // starts with parentheses, such as [m2](50°F)[/m2], otherwise resembles
    // the beginning of a [label](target) link and loses the temperature.
    text = text.replace(/\[m([1-6])\]([\s\S]*?)\[\/m\1\]/g, (_, n, content) =>
      protect('<span class="matsu-text matsu-text-' + colors[Number(n) - 1] + '">' + inline(content, special) + "</span>"));
    text = text.replace(/\[color=(#[\da-f]{6})\]([\s\S]*?)\[\/color\]/gi, (match, rawColor, content) => {
      const color = websiteTextColor(rawColor);
      return color
        ? protect('<span class="website-text-color" data-text-color="' + color + '">' + inline(content, special) + "</span>")
        : match;
    });

    // Balanced parentheses keep Wikipedia URLs and nested URL paths intact.
    let result = "";
    for (let i = 0; i < text.length;) {
      const match = text.slice(i).match(/^\[([^\]\n]+)\]\(/);
      if (!match) { result += text[i++]; continue; }
      let end = i + match[0].length, depth = 1;
      for (; end < text.length && depth; end++) {
        if (text[end] === "(") depth++;
        if (text[end] === ")") depth--;
        if (text[end] === "\n") break;
      }
      if (depth) { result += text[i++]; continue; }
      const url = safeUrl(text.slice(i + match[0].length, end - 1));
      const label = inline(match[1], special);
      const numeric = /^\d{3}$/.test(url);
      const external = /^https?:\/\//i.test(url);
      result += protect(url ? '<a href="' + escapeText(numeric ? "#" : url) + '"' +
        (numeric ? ' data-link="' + url + '"' : "") +
        (external ? ' target="_blank" rel="noopener noreferrer"' : "") +
        ' class="lore-link' + (external ? " external-link" : "") + '">' + label + "</a>" : label);
      i = end;
    }
    text = result;
    text = text.replace(/(~?)\[img((?:\s+(?:small|spoiler))*)\]([\s\S]*?)\[\/img\]\1/g, (_, zoom, rawOptions, path) => {
      const url = safeUrl(path, true);
      if (!url) return "";
      const options = new Set(String(rawOptions || "").trim().split(/\s+/).filter(Boolean));
      const classes = ["text-image-wrap"];
      if (options.has("small")) classes.push("text-image-small");
      if (options.has("spoiler")) classes.push("text-image-spoiler");
      const attributes = [
        options.has("small") ? "data-markdown-image-small" : "",
        options.has("spoiler") ? "data-markdown-image-spoiler" : ""
      ].filter(Boolean).join(" ");
      const attributeText = attributes ? " " + attributes : "";
      const spoilerInteraction = options.has("spoiler")
        ? ' role="button" tabindex="0" aria-expanded="false" aria-label="Show spoiler image"'
        : "";
      const img = '<span class="text-image-frame"><img src="' + escapeText(imageDisplayUrl(url)) +
        '" data-markdown-image-source="' + escapeText(url) + '" class="text-image" alt=""></span>';
      return protect(zoom
        ? '<button type="button" class="' + classes.concat("text-image-zoom-trigger").join(" ") + '" data-markdown-image-zoom' + attributeText + (options.has("spoiler") ? spoilerInteraction : ' aria-label="Open full image view"') + ">" + img + "</button>"
        : '<div class="' + classes.join(" ") + '"' + attributeText + spoilerInteraction + ">" + img + "</div>");
    });
    text = text.replace(/<->/g, () => protect('<div class="md-separator"></div>'));
    // Permit formatting tags only, never arbitrary attributes/scripts from paste.
    text = text.replace(/<\/?(?:p|div|br|strong|b|em|i|u|s|del)\s*\/?>/gi, tag => protect(tag));
    text = text.replace(/(^|[\s(])(https?:\/\/[^\s<>]+)/gi, (_, prefix, value) => {
      let url = value, suffix = "";
      while (/[.,!?;]$/.test(url) || (url.endsWith(")") &&
        (url.match(/\)/g) || []).length > (url.match(/\(/g) || []).length)) {
        suffix = url.slice(-1) + suffix;
        url = url.slice(0, -1);
      }
      return prefix + protect('<a href="' + escapeText(url) + '" target="_blank" rel="noopener noreferrer" class="lore-link external-link">' + escapeText(url) + "</a>") + suffix;
    });
    text = escapeText(text);
    const italic = content => special ? "<em>" + content + "</em>" : '<span class="md-italic">' + content + "</span>";
    text = emphasis(text, special, tokens);
    text = text.replace(/__([^_\n]+?)__/g, '<u class="md-underline">$1</u>');
    text = text.replace(/~~([^~\n]+?)~~/g, '<s class="md-strike">$1</s>');
    text = text.replace(/(^|[\s(])_([^_\n]+?)_(?![\w])/g, (_, prefix, content) => prefix + italic(content));
    text = text.replace(/\|\|([^|\n]+?)\|\|/g,
      '<span class="discord-spoiler" role="button" tabindex="0" aria-expanded="false" aria-label="Show spoiler text">$1</span>');
    // Reverse order also resolves tokens nested in protected markup.
    for (let i = tokens.length - 1; i >= 0; i--) text = text.split("\uE000MD" + i + "\uE001").join(tokens[i]);
    return text;
  }

  function renderTerminal(value) {
    // Terminal has inline colors/styles, but no Discord quotes, headings or lists.
    const source = String(value == null ? "" : value).replace(/\r\n?/g, "\n")
      .replace(/<2br>/gi, "\n\n").trim();
    return '<div class="markdown">' + source.split("\n").map(line =>
      /^(?:---|<->)$/.test(line.trim()) ? '<div class="md-separator"></div>' : inline(line, true)
    ).join("<br>") + "</div>";
  }

  function render(value, options = {}) {
    let source = String(value == null ? "" : value).replace(/\r\n?/g, "\n").trim();
    if (!source) return "";
    const blocks = [];
    const protectBlock = html => {
      const marker = "\uE000BLOCK" + blocks.length + "\uE001";
      blocks.push(html);
      return marker;
    };
    // The first opening delimiter owns its block: fenced code remains literal,
    // and a terminal cannot accidentally start a Discord code block.
    source = source.replace(new RegExp("\\[md\\]([\\s\\S]*?)\\[/md\\]|^" + backtick.repeat(3) + "([^\\n]*)\\n([\\s\\S]*?)^" + backtick.repeat(3) + "[ \\t]*$", "gm"),
      (_, terminal, language, code) => protectBlock(terminal !== undefined ? renderTerminal(terminal) :
        '<pre class="md-code-block" data-md-language="' + escapeText(language.trim()) + '"><code>' + escapeText(code.replace(/\n$/, "")) + "</code></pre>"));

    // Explicit double breaks stay exact; do not replace them with paragraph margins.
    source = source.replace(/<2br>/gi, "\uE000DOUBLEBR\uE001");
    // Retain the existing EXTRA-only spacing rule after stored HTML paragraphs.
    if (options.extra) source = source.replace(/<\/p>(?=[ \t]*(?:\n|$))/gi, "</p>\uE000PARAEND\uE001");

    let html = "", list = "", mainItem = false, subList = false;
    function closeSub() { if (subList) { html += "</ul>"; subList = false; } }
    function closeItem() { closeSub(); if (mainItem) { html += "</li>"; mainItem = false; } }
    function closeList() { closeItem(); if (list) { html += "</ul>"; list = ""; } }
    function breaks(count) { html = html.replace(/(?:<br>)+$/, "") + "<br>".repeat(count); }
    function openList(name) { if (list !== name) { closeList(); html += '<ul class="' + name + '">'; list = name; } }
    const lines = source.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        closeList();
        // EXTRA blocks already supply paragraph/quote spacing through shared CSS.
        // Do not stack automatic blank lines on top; explicit <2br> stays intact.
        const afterExtraBlock = options.extra && /<\/(?:p|div|blockquote|ul|ol)>(?:\uE000PARAEND\uE001)?(?:<br>)*$/.test(html);
        const nextLine = options.extra ? lines.slice(i + 1).find(next => next.trim()) || "" : "";
        const beforeExtraBlock = options.extra && (/^\s*<(?:p|div|blockquote|ul|ol)\b/i.test(nextLine) || (options.log && /^\s*>/.test(nextLine)));
        const afterList = /<\/(?:ul|ol)>(?:<br>)*$/.test(html);
        if (afterList && !afterExtraBlock) {
          breaks(1);
        } else if (options.paragraphs && html && !afterExtraBlock && !beforeExtraBlock && !/<\/p><br>$/.test(html)) {
          breaks(2);
        }
        continue;
      }
      if (/^<p>\s*<\/p>$/i.test(line)) {
        closeList();
        html += "<p></p>";
        continue;
      }
      if (line === "\uE000DOUBLEBR\uE001") { closeList(); breaks(2); continue; }
      const alignment = line.match(/^<(center|right|left)>(.*)$/i);
      if (alignment) {
        closeList();
        const direction = alignment[1].toLowerCase();
        const alignedSource = alignment[2]
          .replace(new RegExp("</" + direction + ">\\s*$", "i"), "")
          .trimStart();
        const alignedHeading = alignedSource.match(/^(#{1,3})\s+(.+)$/);
        const alignedHtml = alignedHeading
          ? "<h" + alignedHeading[1].length + ' class="md-heading">' +
            inline(alignedHeading[2]) + "</h" + alignedHeading[1].length + ">"
          : inline(alignedSource);
        html += '<div class="md-align md-align-' + direction + '">' +
          alignedHtml + "</div>";
        continue;
      }
      if (line === "<->") {
        closeList();
        html += '<div class="md-separator"></div>' + (options.compactSeparatorAfter ? "" : "<br>");
        continue;
      }
      const heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) {
        closeList();
        const tag = "h" + heading[1].length;
        html += "<" + tag + ' class="md-heading">' + inline(heading[2]) + "</" + tag + ">";
        continue;
      }
      if (/^-#\s/.test(line)) { closeList(); html += '<div class="discord-subtext">' + inline(line.slice(3)) + "</div>"; continue; }
      if (/^-{5,}(?:\s+\(edited\))?$/.test(line)) { closeList(); html += '<div class="discord-divider"><span>' + inline(line) + "</span></div>"; continue; }
      const quote = line.match(/^>{1,3}\s?(.*)$/);
      if (quote) {
        closeList();
        if (options.log) {
          const previous = lines.slice(0, i).reverse().find(value => value.trim()) || "";
          if (!/(?:\uE000DOUBLEBR\uE001|<br\s*\/?>)\s*$/i.test(previous)) html = html.replace(/<br>$/, "");
        }
        const parts = [quote[1]];
        // Discord's italic quote can span blank lines; keep the whole quote together.
        const multilineItalic = /^\*(?!\*)/.test(quote[1]) && quote[1].indexOf("*", 1) === -1;
        if (multilineItalic) {
          while (i + 1 < lines.length) {
            if (/^\s*(?:<->|<(?:p|div|blockquote)\b)/i.test(lines[i + 1])) break;
            const next = lines[++i].replace(/^\s*>{1,3}\s?/, "");
            parts.push(next);
            if (next.includes("*")) break;
          }
        } else {
          while (i + 1 < lines.length && /^\s*>/.test(lines[i + 1])) parts.push(lines[++i].replace(/^\s*>{1,3}\s?/, ""));
        }
        const quoteTag = options.log ? "blockquote" : "div";
        const quoteClass = options.log ? "transfer-log-quote" : "md-quote";
        const quoteContent = parts.map((part, index) => part + (index < parts.length - 1 && !/(?:\uE000DOUBLEBR\uE001|<br\s*\/?>)\s*$/i.test(part) ? "<br>" : "")).join("");
        html += '<' + quoteTag + ' class="' + quoteClass + '">' + inline(quoteContent) + '</' + quoteTag + '>' +
          (options.compactQuoteAfter ? "" : "<br>");
        continue;
      }
      const bullet = line.match(/^(•|▪|◦|[-*])\s+(.+)$/);
      if (bullet) {
        const nestedDiscord = /^[ \t]{2,}[-*]\s/.test(lines[i]);
        const isSub = bullet[1] === "▪" || nestedDiscord;
        if (isSub) {
          if (list === "dex-bullet-list" && mainItem) {
            if (!subList) { html += '<ul class="dex-sub-bullet-list">'; subList = true; }
            html += "<li>" + inline(bullet[2]) + "</li>";
          } else {
            closeList();
            html += '<ul class="dex-sub-bullet-list"><li>' + inline(bullet[2]) + "</li></ul>";
          }
        } else if (bullet[1] === "◦") {
          openList("about-bullet-list");
          html += "<li>" + inline(bullet[2]) + "</li>";
        } else {
          openList("dex-bullet-list"); closeItem();
          html += "<li>" + inline(bullet[2]); mainItem = true;
        }
        continue;
      }
      closeList();
      html += inline(line) + (/(?:\uE000DOUBLEBR\uE001|<br\s*\/?>)\s*$/i.test(line) ? "" : "<br>");
    }
    closeList();
    html = html.replace(/\uE000DOUBLEBR\uE001/g, "<br><br>")
      .replace(/\uE000PARAEND\uE001<br>(?!<br>)/g, "")
      .replace(/\uE000PARAEND\uE001/g, "");
    for (let i = 0; i < blocks.length; i++) html = html.split("\uE000BLOCK" + i + "\uE001").join(blocks[i]);
    html = html.replace(
      /<div class="md-quote">((?:(?!<\/div>)[\s\S])*)<\/div><p>\s*<br\s*\/?\s*>\s*<\/p>/gi,
      '<div class="md-quote md-quote-before-blank">$1</div><p class="md-blank-paragraph"><br></p>'
    );
    return options.trimTrailingBreaks ? html.replace(/(?:<br>)+$/, "") : html;
  }

  function renderLog(value) {
    // LOG uses the same block boundaries as every other EXTRA. Only its quote
    // appearance differs; text or a divider after a quote must stay outside it.
    return render(value, { paragraphs: true, extra: true, log: true, trimTrailingBreaks: true });
  }

  const sourceFormats = { bold: "**", italic: "*", underline: "__", strike: "~~", spoiler: "||" };

  function sourceFormat(node) {
    if (node.nodeType !== 1) return null;
    const tag = node.tagName.toLowerCase(), has = name => node.classList.contains(name);
    if (has("md-color") || tag === "strong" || tag === "b") return "bold";
    if (has("md-italic") || tag === "em" || tag === "i") return "italic";
    if (tag === "u") return "underline";
    if (tag === "s" || tag === "del") return "strike";
    if (has("discord-spoiler")) return "spoiler";
    return null;
  }

  function needsBlockStart(node) {
    const previous = node.previousSibling;
    if (!previous || previous.nodeName === "BR") return false;
    if (previous.nodeType !== 1) return true;
    return !/^(P|DIV|BLOCKQUOTE|UL|OL|PRE|H[1-3])$/u.test(previous.tagName) &&
      !previous.classList.contains("text-image-wrap");
  }

  function childrenToSource(element, terminal = false, inherited = {}) {
    let result = "", runs = [];
    const append = (value, styles) => {
      if (value) runs.push({ value, styles: Object.keys(sourceFormats).filter(name => styles[name]) });
    };
    const flush = () => {
      let active = [];
      for (const run of runs) {
        let common = 0;
        while (common < active.length && active[common] === run.styles[common]) common++;
        result += active.slice(common).reverse().map(name => sourceFormats[name]).join("");
        result += run.styles.slice(common).map(name => sourceFormats[name]).join("") + run.value;
        active = run.styles;
      }
      result += active.reverse().map(name => sourceFormats[name]).join("");
      runs = [];
    };
    const visit = (node, styles) => {
      if (node.nodeType === 3) {
        const value = String(node.nodeValue || "").replace(/\u00a0/g, " ");
        // Delimiters cannot enclose leading/trailing whitespace. Whitespace has
        // no visual emphasis, so place it outside the active style runs.
        for (const part of value.split(/(\n+)/)) {
          if (/^\n+$/.test(part)) { flush(); result += part; continue; }
          const [, leading, middle, trailing] = part.match(/^(\s*)([\s\S]*?)(\s*)$/);
          append(leading, {}); append(middle, styles); append(trailing, {});
        }
        return;
      }
      if (node.nodeType !== 1) return;
      const format = sourceFormat(node);
      if (format) {
        for (const child of node.childNodes) visit(child, { ...styles, [format]: true });
      } else if (/^(BR|P|DIV|BLOCKQUOTE|UL|OL|LI|PRE|H[1-3])$/.test(node.tagName)) {
        // Close inline markers before every structural boundary, then reopen
        // them inside the next block. Never leave * spanning separate lines.
        flush(); result += nodeToSource(node, terminal, styles);
      } else append(nodeToSource(node, terminal), styles);
    };
    for (const node of element.childNodes) visit(node, inherited);
    flush();
    return result;
  }

  function nodeToSource(node, terminal = false, inherited = {}) {
    if (node.nodeType === 3) return String(node.nodeValue || "").replace(/\u00a0/g, " ");
    if (node.nodeType !== 1) return "";
    const tag = node.tagName.toLowerCase();
    const has = name => node.classList.contains(name);
    const inTerminal = terminal || has("markdown");
    const format = sourceFormat(node);
    const content = childrenToSource(node, inTerminal, format ? { ...inherited, [format]: true } : inherited);
    const blockEnd = node.nextSibling?.nodeName === "BR" ? "" : "\n";
    if (tag === "br") {
      if (inTerminal) return "\n";
      if (node.previousSibling?.nodeName === "BR") return "";
      let count = 1;
      for (let next = node.nextSibling; next?.nodeName === "BR"; next = next.nextSibling) count++;
      return count > 1 ? "<2br>" + "<br>".repeat(count - 2) + "\n" : "\n";
    }
    if (format) return content;
    if (tag === "pre") return backtick.repeat(3) + (node.getAttribute("data-md-language") || "") + "\n" + node.textContent.replace(/\n$/, "") + "\n" + backtick.repeat(3) + blockEnd;
    if (tag === "code") return backtick + content + backtick;
    if (tag === "a") return "[" + content + "](" + (node.getAttribute("data-link") || node.getAttribute("href") || "") + ")";
    if (node.hasAttribute("data-open-popup")) return "[link:" + content + ":" + (node.getAttribute("data-open-popup") || "") + ":" + (node.getAttribute("data-from-popup") || "") + (node.getAttribute("data-return-id") ? ":" + node.getAttribute("data-return-id") : "") + "]";
    if (has("text-image-wrap")) {
      const image = node.querySelector("img");
      if (!image) return "";
      const zoom = node.hasAttribute("data-markdown-image-zoom") ? "~" : "";
      const options = [
        node.hasAttribute("data-markdown-image-small") || has("text-image-small") ? "small" : "",
        node.hasAttribute("data-markdown-image-spoiler") || has("text-image-spoiler") ? "spoiler" : ""
      ].filter(Boolean);
      const source = image.getAttribute("data-markdown-image-source") || image.getAttribute("src") || "";
      const token = zoom + "[img" + (options.length ? " " + options.join(" ") : "") + "]" + source + "[/img]" + zoom;
      return (needsBlockStart(node) ? "\n" : "") + token + blockEnd;
    }
    if (has("markdown")) return "[md]" + content.trim() + "[/md]" + blockEnd;
    for (let i = 0; i < colors.length; i++) if (has("matsu-text-" + colors[i])) return "[m" + (i + 1) + "]" + content + "[/m" + (i + 1) + "]";
    const color = websiteTextColor(node.getAttribute("data-text-color"));
    if (has("website-text-color") && color) return "[color=" + color + "]" + content + "[/color]";
    if (has("discord-subtext")) return "-# " + content.trimEnd() + "\n";
    if (has("discord-divider")) return content.trimEnd() + "\n";
    if (has("md-separator")) return (needsBlockStart(node) ? "\n" : "") + (inTerminal ? "---" : "<->") + blockEnd;
    for (const direction of ["center", "right", "left"]) if (has("md-align-" + direction)) return "<" + direction + ">" + content.trimEnd() + "\n";
    if (/^h[1-3]$/.test(tag)) return "#".repeat(Number(tag[1])) + " " + content + "\n";
    if (tag === "li") {
      const parent = node.parentElement;
      const marker = parent?.classList.contains("dex-sub-bullet-list") ? "▪" : parent?.classList.contains("about-bullet-list") ? "◦" : "•";
      let own = "", nested = "";
      for (const child of node.childNodes) {
        if (child.nodeType === 1 && /^(UL|OL)$/.test(child.tagName)) nested += nodeToSource(child, inTerminal);
        else own += nodeToSource(child, inTerminal);
      }
      return marker + " " + own.trimEnd() + "\n" + nested;
    }
    if (tag === "ul" || tag === "ol") return content;
    if (has("md-quote") || tag === "blockquote") {
      const blockStart = node.previousSibling && node.previousSibling.nodeName !== "BR" ? "\n" : "";
      return blockStart + content.trimEnd().split("\n").map(line => "> " + line).join("\n") + blockEnd;
    }
    if (tag === "p") return inTerminal ? content.trimEnd() + "\n\n" : "<p>" + content.trimEnd() + "</p>\n";
    if (tag === "div") return content.trimEnd() + (inTerminal ? "\n" : "\n\n");
    return content;
  }

  window.parseMarkdown = render;
  window.parseExtraMarkdown = (value, options = {}) => render(value, { extra: true, ...options });
  window.CreatureMarkdown = {
    render,
    renderInline: inline,
    renderLog,
    renderTerminal,
    toTerminalSource: element => childrenToSource(element, true).trim(),
    toSource: element => childrenToSource(element, element.classList?.contains("markdown"))
      .split(/(\[md\][\s\S]*?\[\/md\])/g).map((part, index) => index % 2 ? part : part.replace(/\n{3,}/g, "\n\n")).join("").trim()
  };
})();
