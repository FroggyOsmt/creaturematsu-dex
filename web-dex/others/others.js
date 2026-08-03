(function initOthersView() {
  const transitionDuration = 340;
  const existingPage = document.getElementById("othersPage");
  const appContainer = document.querySelector(".app-container");

  function setupBackButton(page, closeAction) {
    const backButton = page.querySelector("[data-close-others]");
    backButton?.addEventListener("click", closeAction);
  }

  function renderOthersMarkdown(text) {
    return window.parseMarkdown(text || "");
  }

  function renderOthersInlineMarkdown(text) {
    return renderOthersMarkdown(text).replace(/(?:<br>\s*)+$/i, "");
  }

  function createOthersSectionId(title, index) {
    const slug = String(title || "section")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return `others-section-${index}-${slug || "section"}`;
  }

  function setupOthersTopButtons(page) {
    const scrollBox = page.querySelector(".others-sidebar-bg");
    const toc = page.querySelector("[data-others-toc]");
    const sections = page.querySelectorAll(".system-page-log-section");

    if (!scrollBox || !toc || sections.length === 0) return;

    page.querySelectorAll("[data-others-scroll-contents]").forEach(button => {
      button.addEventListener("click", () => {
        toc.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

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

      page.querySelectorAll("[data-others-scroll-contents]").forEach(button => {
        button.classList.remove("active");
      });

      if (!activeSection) return;

      const button = activeSection.querySelector("[data-others-scroll-contents]");
      if (!button) return;

      const tocRect = toc.getBoundingClientRect();
      const sectionRect = activeSection.getBoundingClientRect();
      const distanceFromContents = sectionRect.top - tocRect.bottom;

      if (distanceFromContents > 120) {
        button.classList.add("active");
      }
    }

    if (scrollBox.othersTopButtonScrollHandler) {
      scrollBox.removeEventListener("scroll", scrollBox.othersTopButtonScrollHandler);
    }

    scrollBox.othersTopButtonScrollHandler = updateActiveTopButton;
    scrollBox.addEventListener("scroll", updateActiveTopButton);
    requestAnimationFrame(updateActiveTopButton);
  }

  function closeOthersSidebar(page) {
    if (!page) return;

    const sidebar = page.querySelector("[data-others-sidebar]");

    page.classList.remove("others-sidebar-open");
    document.body.classList.remove("others-sidebar-detail-open");
    sidebar?.setAttribute("aria-hidden", "true");

    page.querySelectorAll("[data-others-content]").forEach(button => {
      button.classList.remove("is-selected");
      button.setAttribute("aria-expanded", "false");
    });
  }

  function renderOthersSidebar(page, contentId) {
    const data = window.othersContentData?.[contentId];
    const sidebar = page.querySelector("[data-others-sidebar]");
    const title = page.querySelector("#othersSidebarTitle");
    const toc = page.querySelector("[data-others-toc]");
    const sectionsBox = page.querySelector("[data-others-sections]");

    if (!data || !sidebar || !title || !toc || !sectionsBox) return false;

    const sections = Array.isArray(data.sections) ? data.sections : [];

    title.textContent = data.title || "Others";
    toc.innerHTML = `
      <div class="system-page-toc-title">Contents</div>
      <div class="system-page-toc-links">
        ${sections.map((section, index) => {
          const sectionId = createOthersSectionId(section.title, index);

          return `
            <button
              class="system-page-toc-link"
              type="button"
              data-others-scroll-target="${sectionId}"
            >
              ${renderOthersInlineMarkdown(section.title || "Section")}
            </button>
          `;
        }).join("")}
      </div>
    `;

    sectionsBox.innerHTML = sections.map((section, index) => {
      const sectionId = createOthersSectionId(section.title, index);

      return `
        <section class="system-page-log-section" id="${sectionId}">
          <div class="system-page-log-title-row">
            <div class="system-page-log-title">
              ${renderOthersInlineMarkdown(section.title || "")}
            </div>
            <button
              class="system-page-top-btn"
              type="button"
              data-others-scroll-contents
            >
              TOP
            </button>
          </div>
          <div class="system-page-log-separator"></div>
          <div class="system-page-log-text">
            ${renderOthersMarkdown(section.text || "")}
          </div>
        </section>
      `;
    }).join("");

    toc.querySelectorAll("[data-others-scroll-target]").forEach(link => {
      link.addEventListener("click", () => {
        const target = page.querySelector(`#${link.dataset.othersScrollTarget}`);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    setupOthersTopButtons(page);

    return true;
  }

  function openOthersSidebar(page, button) {
    if (!renderOthersSidebar(page, button.dataset.othersContent)) return;

    const sidebar = page.querySelector("[data-others-sidebar]");
    const scrollBox = page.querySelector(".others-sidebar-bg");

    page.querySelectorAll("[data-others-content]").forEach(entryButton => {
      entryButton.classList.remove("is-selected");
      entryButton.setAttribute("aria-expanded", "false");
    });

    button.classList.add("is-selected");
    button.setAttribute("aria-expanded", "true");
    sidebar?.setAttribute("aria-hidden", "false");
    page.classList.add("others-sidebar-open");
    document.body.classList.add("others-sidebar-detail-open");

    requestAnimationFrame(() => {
      scrollBox?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }

  function setupOthersContent(page) {
    page.querySelectorAll("[data-others-content]").forEach(button => {
      button.addEventListener("click", () => openOthersSidebar(page, button));
    });

    page.querySelector("[data-close-others-sidebar]")
      ?.addEventListener("click", () => closeOthersSidebar(page));
  }

  function initializeStandalonePage(page) {
    setupOthersContent(page);
    page.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      page.classList.add("active");
    });

    setupBackButton(page, () => {
      closeOthersSidebar(page);
      page.classList.remove("active");
      page.setAttribute("aria-hidden", "true");

      window.setTimeout(() => {
        window.location.href = "../index.html";
      }, transitionDuration);
    });
  }

  if (existingPage && !appContainer) {
    initializeStandalonePage(existingPage);
    return;
  }

  const trigger = document.querySelector("[data-open-others]");
  const slider = document.getElementById("slider");

  if (!trigger || !slider || !appContainer) return;

  let othersPage = null;
  let loadPromise = null;

  function loadOthersPage() {
    if (othersPage) return Promise.resolve(othersPage);
    if (loadPromise) return loadPromise;

    loadPromise = fetch("others/others.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to load Others (${response.status})`);
        }

        return response.text();
      })
      .then(html => {
        const parsedDocument = new DOMParser().parseFromString(html, "text/html");
        const sourcePage = parsedDocument.getElementById("othersPage");

        if (!sourcePage) {
          throw new Error("Others page content was not found.");
        }

        othersPage = document.importNode(sourcePage, true);
        appContainer.appendChild(othersPage);

        setupOthersContent(othersPage);
        setupBackButton(othersPage, closeOthersPage);

        return othersPage;
      })
      .catch(error => {
        loadPromise = null;
        console.error(error);
        return null;
      });

    return loadPromise;
  }

  async function openOthersPage() {
    const page = await loadOthersPage();
    if (!page || page.classList.contains("active")) return;

    if (
      document.querySelector(".detail-page.active") &&
      typeof window.closeDetail === "function"
    ) {
      window.closeDetail();
    }

    const sidebarDrawer = document.getElementById("leftDrawer");
    sidebarDrawer?.classList.remove("open");
    document.documentElement.classList.remove("drawer-locked");
    document.body.classList.remove("drawer-locked");

    page.setAttribute("aria-hidden", "false");
    slider.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-pressed", "true");
    trigger.classList.add("is-active");
    document.body.classList.add("others-view-open");

    requestAnimationFrame(() => {
      slider.classList.add("others-home-hidden");
      page.classList.add("active");
    });
  }

  function closeOthersPage() {
    if (!othersPage || !othersPage.classList.contains("active")) return;

    closeOthersSidebar(othersPage);
    othersPage.classList.remove("active");
    othersPage.setAttribute("aria-hidden", "true");
    slider.classList.remove("others-home-hidden");
    slider.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-pressed", "false");
    trigger.classList.remove("is-active");
    document.body.classList.remove("others-view-open");

    const windowPanel = othersPage.querySelector(".others-window");
    if (windowPanel) windowPanel.scrollTop = 0;
  }

  window.openOthersPage = openOthersPage;
  window.closeOthersPage = closeOthersPage;

  trigger.setAttribute("aria-pressed", "false");
  trigger.addEventListener("click", openOthersPage);

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (othersPage?.classList.contains("others-sidebar-open")) {
      closeOthersSidebar(othersPage);
      return;
    }

    closeOthersPage();
  });
})();
