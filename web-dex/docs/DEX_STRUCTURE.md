# CreatureMatsu Dex — Structure

This document is the internal technical map for the CreatureMatsu Dex website.

It is used to organize the project structure, main files, UX rules, creature data logic, and future maintenance notes.

---

## 1. Project Purpose

**CreatureMatsu Dex** is an interactive web index for the CreatureMatsu project.

The website works as a digital creature encyclopedia, showing revealed creatures, their categories, Matsu origin, information sections, images, extras, and project lore.

Main goals:

* Display CreatureMatsu creatures in an organized visual grid.
* Allow users to explore creatures by Matsu, category, pillar, and name.
* Provide readable creature information with popup/detail pages.
* Support desktop and mobile browsing.
* Preserve the visual identity of CreatureMatsu.
* Keep the project lightweight enough for Vercel hosting.

---

## 2. Repository

Expected repository:

```txt
FroggyOsmt/creaturematsu-dex
```

Expected local folder:

```txt
creaturematsu-dex/
```

Hosting:

```txt
Vercel
```

Main branch:

```txt
main
```

---

## 3. Main Website Sections

The Dex is divided into several important sections.

### HOME

Main creature grid and entry point of the Dex.

Expected files:

```txt
index.html
script.js
layout.css
grid.css
creature-style.css
```

Main functions:

* Shows the creature grid.
* Opens creature detail views.
* Handles search.
* Handles filters.
* Handles keyboard navigation.
* Shows “No Creature Found” when search has no result.

---

### ABOUT

Project explanation and general information.

Expected files:

```txt
about-popup.html
about-popup.css
about-popup.js
```

Main functions:

* Shows About content.
* Uses popup or content navigation.
* Has CONTENT and TOP controls.
* Must reset scroll position correctly when opened or when using navigation.

---

### CHARACTERS

Character/Matsu information section.

Expected files:

```txt
characters.html
character.js
```

Main functions:

* Shows character information.
* Supports CONTENT and TOP behavior.
* Uses text formatting and internal links.

---

### SYSTEM

System/lore explanation section.

Expected files:

```txt
system.html
system.css
system.js
system-popup.css
system-popup.js
badge.js
matsunian-language.js
```

Main functions:

* Explains internal systems of CreatureMatsu.
* Handles special popups.
* Handles badges/icons.
* Handles Matsunian/Escalian language features.
* Supports CONTENT and TOP navigation.
* Requires careful layout control.

---

### PILLAR MAP

Visual structure map of CreatureMatsu pillars.

Expected files:

```txt
pillar-map.html
pillar.css
pillar.js
```

Main functions:

* Shows the architecture/pillar structure.
* Uses drums/blocks as category or creature units.
* Desktop version is horizontal/architectural.
* Mobile version needs special UX handling because the design is wide.

Important note:

The Pillar Map is one of the most sensitive UX zones for mobile.

---

### AUTHOR / LINK / AUDIO

Additional support files:

```txt
author.js
link.js
audio.js
```

Main functions:

* Author/about-author information.
* External/internal links.
* BGM/audio behavior.
* Audio must respect browser autoplay restrictions.

---

## 4. Suggested Folder Structure

Recommended structure:

```txt
creaturematsu-dex/
│
├─ index.html
├─ script.js
├─ layout.css
├─ grid.css
├─ creature-style.css
│
├─ about-popup.html
├─ about-popup.css
├─ about-popup.js
│
├─ characters.html
├─ character.js
│
├─ system.html
├─ system.css
├─ system.js
├─ system-popup.css
├─ system-popup.js
│
├─ pillar-map.html
├─ pillar.css
├─ pillar.js
│
├─ author.js
├─ link.js
├─ audio.js
├─ badge.js
├─ matsunian-language.js
│
├─ images/
│  ├─ creatures/
│  ├─ icons/
│  ├─ extras/
│  ├─ ui/
│  └─ backgrounds/
│
├─ data/
│
└─ docs/
   └─ DEX_STRUCTURE.md
```

---

## 5. UX Rules

### General UX

* The site should feel like a creature encyclopedia.
* Navigation should be simple and visual.
* The design should preserve CreatureMatsu personality.
* Decorative elements must not block readability.
* Pixel-art or low-resolution UI assets should use pixelated rendering when needed.
* Important buttons must be easy to click on mobile.

---

### Desktop UX

Desktop can support more complex interactions.

Desktop features:

* Full creature grid.
* Search bar.
* Filter controls.
* Keyboard navigation with left/right arrows.
* Larger creature detail layout.
* More decorative UI elements.
* Pillar Map with horizontal architecture.

---

### Mobile UX

Mobile should prioritize simplicity.

Mobile rules:

* Avoid overcrowded controls.
* Search/filter can be simplified or hidden if needed.
* Buttons need comfortable touch size.
* Creature detail view should be readable without horizontal stress.
* Pillar Map needs a mobile-specific solution.
* Avoid forcing desktop architecture into a narrow vertical screen.

Important mobile concern:

```txt
Pillar Map is naturally horizontal, but mobile screens are vertical.
```

Possible mobile strategies:

* Separate mobile layout.
* Horizontal scroll with clear instruction.
* Simplified vertical pillar list.
* “Desktop recommended” warning for the full map.
* A mobile-only compact map.

---

## 6. Search Rules

The search system should match creatures in a clean and predictable way.

Important behavior:

* Search by beginning letters should prioritize names that start with those letters.
* Example:

  * `H` should show creatures like Hammichi and Hoseoso.
  * `HA` should show Hammichi.
  * It should not randomly prioritize unrelated names containing the letter inside the word.
* When no result exists, show:

```txt
No Creature Found
```

Search should not break the layout or leave a blank white page.

---

## 7. Filter Rules

Filters are used to organize creatures by Matsu, category, or pillar.

Expected filter behavior:

* Filters can be turned on/off.
* OK button confirms filter changes.
* Filter animations should not shift the layout too much.
* Desktop filters can be more complete.
* Mobile filters may be simplified.

Possible filter categories:

* Matsu
* Pillar
* Category
* Revealed status
* Special group

---

## 8. Creature Data Rules

Each creature should follow consistent data rules.

Basic creature data:

```txt
number
name
matsu
pillar
category
size
description
appearance
function
nameOrigin
generalOrigin
reference
trivia
funFact
images
extras
```

Each creature belongs to:

* One Matsu.
* One main pillar/category.
* One official creature number.
* One position in the Dex.

---

## 9. Matsu Rules

Main Matsu list:

```txt
Oso
Kara
Choro
Ichi
Jyushi
Todo
```

In English text, creature categories may use:

```txt
Oso's Variations
Kara's Variations
Choro's Variations
Ichi's Variations
Jyushi's Variations
Todo's Variations
```

For numbered variation pillars:

```txt
Oso's Variations 2
Oso's Variations 3
Oso's Variations 4
```

Same logic applies to the other Matsu.

---

## 10. Pillar Structure

Current CreatureMatsu pillar structure:

```txt
Pillar 1 — Origins
Pillar 2 — Variations
Pillar 3 — Variations 2
Pillar 4 — Variations 3
Pillar 5 — Variations 4
Pillar 6 — Collaboration Era
```

Notes:

* Sextillizos belong to the pre-pillar preparation era.
* Origins is the first official pillar.
* Variations and later pillars expand the biology, visual experimentation, and symbolic creature logic.
* Collaboration Era is planned as a future community-based pillar.

---

## 11. Pillar Map Logic

Pillar Map represents the structure of CreatureMatsu as an architectural system.

Concept:

```txt
Pillar = main era
Tambor = category
Sub-tambor / block = creature
```

Construction logic:

* The structure is built from bottom to top.
* Creatures are added into a category drum.
* Example:

  * Flamoso
  * Aquakara
  * Vinechoro
  * ...
  * Airtodo
  * Together they form category drum `1A`, such as Elemental.

Possible order pattern:

```txt
1A, 2A, 3A...
1B, 2B, 3B...
```

Important UX note:

The Pillar Map should remain visually impressive on desktop, but must not become confusing on mobile.

---

## 12. Image Rules

General image folders may include:

```txt
images/creatures/
images/icons/
images/extras/
images/extras/action/
images/ui/
images/backgrounds/
```

Image behavior:

* Creature icons should stay visually sharp.
* UI pixel assets may use:

```css
image-rendering: pixelated;
```

Common image sizes:

```txt
Grid icons: around 84x84
Title icon: around 96x96
Back icon: around 34x34
Arrow icons: around 34x34
Pillar drums: around 76px to 79px
```

For responsive/DPR handling, image sizes may be adjusted by JavaScript.

---

## 13. Popup Rules

Popup/detail behavior:

* Opening a creature should show the correct detail content.
* Back button should return cleanly.
* Scroll position should reset when opening new content.
* CONTENT and TOP buttons should move to the expected section.
* Mobile popup layout should not overflow badly.
* Extra image sliders must work with touch swipe on mobile.

---

## 14. Markdown/Text Formatting Rules

The website supports custom formatting.

Possible supported styles:

```txt
bold
italic
blockquote
horizontal separators
internal links
external links
Matsu-colored text
```

Matsu color tags may use:

```txt
[m1][/m1]
[m2][/m2]
[m3][/m3]
[m4][/m4]
[m5][/m5]
[m6][/m6]
```

Expected mapping:

```txt
[m1]Oso[/m1]
[m2]Kara[/m2]
[m3]Choro[/m3]
[m4]Ichi[/m4]
[m5]Jyushi[/m5]
[m6]Todo[/m6]
```

The system should convert these tags into styled spans.

---

## 15. Link Rules

Internal lore links and external links should be visually clear.

Existing link style:

```css
.lore-link {
  color: #F7CC9B;
  text-decoration: none;
  transition: color 0.2s ease;
  text-decoration: underline;
}

.lore-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.lore-link .md-italic {
  transition: color 0.2s ease;
}

.lore-link:hover .md-italic {
  color: #ffffff;
}

.external-link {
  color: #F7CC9B;
}
```

Important:

* Do not add heavy glow unless intentionally requested.
* Keep links readable and soft.

---

## 16. Audio Rules

Audio/BGM behavior:

* Browser autoplay restrictions must be respected.
* Audio may only start after user interaction.
* Audio should not block the website.
* Audio controls should feel optional, not intrusive.

---

## 17. Current Important UX Problems

Known sensitive areas:

```txt
Pillar Map mobile layout
Search/filter layout on desktop
Search behavior by first letters
Popup scroll reset
Mobile image slider touch swipe
System section layout
ABOUT/CHARACTERS/SYSTEM CONTENT and TOP behavior
```

Priority:

1. Mobile UX for Pillar Map.
2. Stable search/filter behavior.
3. Popup and detail readability.
4. Clean documentation.
5. Stable release preparation.

---

## 18. Stable / Beta Notes

The website may move from Beta to Stable after a testing period.

Before Stable:

* Check desktop layout.
* Check mobile layout.
* Check search.
* Check filters.
* Check detail popups.
* Check images.
* Check Vercel deployment.
* Check “Report a Problem” form.
* Check broken links.
* Check console errors.

---

## 19. Report a Problem

Report form:

```txt
https://forms.gle/jkJUgkrt3kSRptXdA
```

Expected purpose:

* Collect user reports.
* Track browser/device issues.
* Detect broken pages, layout problems, or missing content.

---

## 20. Maintenance Notes

When editing the project:

* Change one feature at a time.
* Test on desktop first.
* Test on mobile after desktop.
* Avoid touching stable CSS if the bug is only in JavaScript.
* Keep old working code as reference before replacing large sections.
* Use comments for complex functions.
* Keep documentation updated when adding new systems.

---

## 21. Botito Notes

This chat is used as the technical UX/dev branch for CreatureMatsu Dex.

Main work areas:

```txt
GitHub
Vercel
HTML
CSS
JavaScript
UX
Mobile layout
Pillar Map
Search
Filters
Popups
Creature data organization
Documentation
```

Botito mode:

```txt
Botito UX Dev Mode: ON
CreatureMatsu Dex branch: ACTIVE
GitHub/Vercel context: READY
Pillar Map mobile anxiety shield: PARTIAL
```

---
