fetch("html/about-popup.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);

    const aboutHeaderText = `
**CreatureMatsu** is an original creature project created in 2019 and currently ongoing. It is inspired by the sextuplet characters from the anime [***Osomatsu-san***](https://en.wikipedia.org/wiki/Mr._Osomatsu), but takes place in a completely separate universe with its own lore, biology, and narrative structure.
`;

    const aboutSections = [
      {
        title: "Overview",
        text: `
<p>In this universe, the [link:Sextuplets:sextuplets:about] — [m1]Oso[/m1], [m2]Kara[/m2], [m3]Choro[/m3], [m4]Ichi[/m4], [m5]Jyushi[/m5], and [m6]Todo[/m6] — can transform into unusual creatures with distinct anatomies, symbolic abilities, and exaggerated personalities. Each creature is identified by a unique name, number, and visual design, forming part of a structured catalog within the project.</p>

<p>The transformations are conducted by [link:Dr. Leezar:drleezar:about], a reptilian scientist who studies genetic modification and experimental biology. Alongside his daughter [link:Louise:louise:about], he observes and documents the creatures’ behaviors, anatomical variations, and emotional symbolism within a controlled laboratory environment. Occasionally, the human character [link:Teseo:teseo:about] appears, reacting with curiosity and fascination to these entities.</p>

<p>The project is organized into multiple "[link:Pillars:pillar:about]", which represent different developmental phases and conceptual categories. Early stages focus on simple emotional or functional transformations, while later stages introduce more complex and abstract biological designs.</p>

<p>CreatureMatsu blends comedy, speculative biology, surreal humor, and emotional symbolism. Through its creatures, the project explores how familiar characters can evolve into unpredictable forms while reflecting internal states, identity, and exaggerated traits in a fictional experimental world.</p>
`
      },
      {
        title: "**History and Production**",
        text: `
<p>CreatureMatsu was created in 2019 by the author [Froggy](https://www.instagram.com/froggy.osmt/), following her previous AU, *Mothneets/Caterneets*, which had been her most cherished project at the time. Although her interests gradually evolved, that earlier work remained an important step that led to the creation of her own original series.</p>

<p>From its beginning, CreatureMatsu focused on worldbuilding, centered around the adventures of the Sextuplets as small-sized beings with unique and colorful bodies. The project became a personal creative outlet, allowing the author to explore ideas, enjoy drawing, and avoid creative stagnation through the development of stories and original creature designs.</p>

<p>Over time, the project grew into an expanding timeline, marked by continuous discovery and creative parallels, reflecting the evolution of the author’s imagination.</p>
        `
      },
      {
        title: "**Characters**",
        text: `
<p>**Primary characters:**</p>
◦ [m1]OSO[/m1]
◦ [m2]KARA[/m2]
◦ [m3]CHORO[/m3]
◦ [m4]ICHI[/m4]
◦ [m5]JYUSHI[/m5]
◦ [m6]TODO[/m6]

<p>**Supporting characters:**</p>
◦ DR. LEEZAR
◦ LOUISE

<p>**Troublemaker:**</p>
◦ TESEO

        `
      }
    ];

document.getElementById("aboutMarkdown").innerHTML = `

  <div class="about-header-text">
    ${parseMarkdown(aboutHeaderText)}
  </div>

  <div class="about-toc" id="aboutToc">
    ${buildAboutToc(aboutSections)}
  </div>

  <div class="about-log-card">
    ${buildAboutSections(aboutSections)}
  </div>

`;

    initAboutScroll();
    initAboutTocLinks();
    initAboutActiveTopButtons();
  });

function openAboutPopup() {
  const popup = document.getElementById("aboutPopup");

  if (!popup) return;

  popup.classList.add("active");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const aboutBg = document.querySelector(".about-bg");

      if (aboutBg) {
        aboutBg.scrollTop = 0;
        aboutBg.scrollTo(0, 0);
      }

      document.querySelectorAll(".about-top-btn").forEach(btn => {
        btn.classList.remove("active");
      });
    });
  });
}

function closeAboutPopup() {
  const popup = document.getElementById("aboutPopup");
  const aboutBg = document.querySelector(".about-bg");

  if (!popup) return;

  popup.classList.remove("active");

  if (aboutBg) {
    aboutBg.scrollTop = 0;
    aboutBg.scrollTo(0, 0);
  }

  document.querySelectorAll(".about-top-btn").forEach(btn => {
    btn.classList.remove("active");
  });
}

function createAboutSectionId(title, index) {
  return "about-section-" + index + "-" + title
    .replace(/\*\*/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildAboutToc(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return `
    <div class="about-toc-title">Contents</div>

    <div class="about-toc-links">
      ${sections.map((section, index) => {
        const rawTitle = section.title || "Section";
        const cleanTitle = rawTitle.replace(/\*\*/g, "");
        const id = createAboutSectionId(rawTitle, index);

        return `
          <button class="about-toc-link" data-scroll-target="${id}">
            ${parseMarkdown(cleanTitle)}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function buildAboutSections(sections) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return "";
  }

  return sections.map((section, index) => {
    const id = createAboutSectionId(section.title || "section", index);

    return `
      <div class="about-log-section" id="${id}">

        <div class="about-log-title-row">
          <div class="about-log-title">
            ${parseMarkdown(section.title || "")}
          </div>

          <button class="about-top-btn" onclick="scrollAboutToContents()">
            TOP
          </button>
        </div>

        <div class="about-log-separator"></div>

        <div class="about-log-text">
          ${parseMarkdown(section.text || "")}
        </div>

      </div>
    `;
  }).join("");
}

function initAboutTocLinks() {
  const tocLinks = document.querySelectorAll(".about-toc-link");

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

function scrollAboutToContents() {
  const toc = document.getElementById("aboutToc");

  if (!toc) return;

  toc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function initAboutActiveTopButtons() {
  const scrollBox = document.querySelector(".about-bg");
  const sections = document.querySelectorAll(".about-log-section");

  if (!scrollBox || sections.length === 0) return;

  function updateActiveTopButton() {
    const scrollRect = scrollBox.getBoundingClientRect();
    const checkLine = scrollRect.top + scrollRect.height * 0.90;

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

    document.querySelectorAll(".about-top-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    if (activeSection) {
      const toc = document.getElementById("aboutToc");
      const btn = activeSection.querySelector(".about-top-btn");

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

function initAboutScroll() {
  const aboutBg = document.querySelector(".about-bg");

  console.log("aboutBg encontrado:", aboutBg);

  if (!aboutBg) return;

  aboutBg.addEventListener("wheel", (e) => {
    e.preventDefault();

    const direction = Math.sign(e.deltaY);

    aboutBg.scrollTop += direction * 30;
  }, { passive: false });
}
