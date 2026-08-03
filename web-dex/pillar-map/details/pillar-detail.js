// ========================================
// PILLAR MAP — DETAIL PAGE
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const pillarSlider = document.querySelector(".pillar-slider");
  const homePage = document.querySelector(".home-page");
  const detailPage = document.querySelector(".detail-page");
  const detailContent = document.querySelector(".detail-content");
  const backButton = detailPage?.querySelector("[data-detail-back]");

if (
  !pillarSlider ||
  !homePage ||
  !detailPage ||
  !detailContent ||
  !backButton
) {
  console.warn("Pillar Detail: required elements were not found.");
  return;
}

  let previousBodyOverflow = "";

  let pausedPillarButton = null;
  let pausedDrumButton = null;
  let pausedPillarColumn = null;


  // ========================================
  // FIND PILLAR NUMBER FROM COLUMN
  // ========================================

  function getPillarNumberFromColumn(element) {
    const column = element.closest(".pillar-column");

    if (!column) return null;

    const pillarClass = [...column.classList].find(className =>
      /^pillar-\d+$/.test(className)
    );

    if (!pillarClass) return null;

    return pillarClass.replace("pillar-", "");
  }


  // ========================================
  // GET DRUM CODE
  // ========================================

  function getDrumCode(button) {
    if (button.dataset.drumCode) {
      return button.dataset.drumCode.toUpperCase();
    }

    const image = button.querySelector(".pillar-drum");
    const imagePath = image?.getAttribute("src") || "";

    const fileName = imagePath.split("/").pop();

    return (
      fileName
        ?.replace(/\.[^.]+$/, "")
        .toUpperCase() || null
    );
  }


  // ========================================
  // GET DRUM DATA
  // ========================================

  function getDrumData(pillar, drumCode) {
    return (
      window.pillarMapData?.[String(pillar)]?.drums?.[drumCode] ||
      null
    );
  }

// ========================================
// SELECT AND OPEN PILLAR COLUMN
// ========================================

function openPillarColumnDetail(button) {
  const pillarNumber = button.dataset.pillar;

  const pillarColumn = document.querySelector(
    `.pillar-column.pillar-${pillarNumber}`
  );

  if (!pillarNumber || !pillarColumn) return;

  // Quita el highlight del tambor individual.
  pausedDrumButton?.classList.remove("drum-zoom-paused");
  pausedDrumButton = null;

  // Restaura la columna anterior.
  if (
    pausedPillarColumn &&
    pausedPillarColumn !== pillarColumn
  ) {
    pausedPillarColumn.classList.remove(
      "pillar-column-zoom-paused"
    );
  }

  // Restaura el botón anterior.
  if (
    pausedPillarButton &&
    pausedPillarButton !== button
  ) {
    pausedPillarButton.classList.remove(
      "pillar-button-active"
    );
  }

  // Selecciona la columna actual.
  pausedPillarColumn = pillarColumn;

  pillarColumn.classList.add(
    "pillar-column-zoom-paused"
  );

  // Selecciona su botón.
  pausedPillarButton = button;

  button.classList.add(
    "pillar-button-active"
  );

  openPillarDetail({
    type: "pillar",
    pillar: pillarNumber
  });
}

// ========================================
// SELECT AND OPEN DRUM
// ========================================

function openDrumDetail(button) {
  const pillarNumber =
    getPillarNumberFromColumn(button);

  const drumCode =
    getDrumCode(button);

  if (!pillarNumber || !drumCode) return;

  // Si había una columna completa seleccionada,
  // vuelve a su tamaño normal.
  pausedPillarColumn?.classList.remove(
  "pillar-column-zoom-paused"
);

pausedPillarColumn = null;

pausedPillarButton?.classList.remove(
  "pillar-button-active"
);

pausedPillarButton = null;


  if (
    pausedDrumButton &&
    pausedDrumButton !== button
  ) {
    pausedDrumButton.classList.remove(
      "drum-zoom-paused"
    );
  }

  // El nuevo tambor queda seleccionado.
  pausedDrumButton = button;

  button.classList.add(
    "drum-zoom-paused"
  );

  openPillarDetail({
    type: "category",
    pillar: pillarNumber,
    drumCode
  });
}
  

// ========================================
// DETAIL CONTENT
// ========================================

function renderDetailContent({
  type,
  pillar,
  drumCode = null
}) {
  window.renderDetailInfo({
    container: detailContent,
    type,
    pillar,
    drumCode
  });
}


  // ========================================
  // OPEN DETAIL PAGE
  // ========================================

  function openPillarDetail({
    type = "pillar",
    pillar,
    drumCode = null
  }) {
    if (!pillar) return;

    renderDetailContent({
      type,
      pillar,
      drumCode
    });

    detailPage.dataset.detailType = type;
    detailPage.dataset.pillar = pillar;

    if (drumCode) {
      const drumData = getDrumData(pillar, drumCode);

      detailPage.dataset.drumCode = drumCode;

      if (drumData?.category) {
        detailPage.dataset.category = drumData.category;
      } else {
        delete detailPage.dataset.category;
      }
    } else {
      delete detailPage.dataset.drumCode;
      delete detailPage.dataset.category;
    }

    if (!detailPage.classList.contains("active")) {
  previousBodyOverflow = document.body.style.overflow;
}

    homePage.classList.remove("active");
    pillarSlider.classList.add("active");
    detailPage.classList.add("active");

    homePage.setAttribute("aria-hidden", "true");
    detailPage.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }


  // ========================================
  // CLOSE DETAIL PAGE
  // ========================================

function closePillarDetail() {
  pillarSlider.classList.remove("active");
  detailPage.classList.remove("active");
  homePage.classList.add("active");

  homePage.setAttribute("aria-hidden", "false");
  detailPage.setAttribute("aria-hidden", "true");

  document.body.style.overflow =
    previousBodyOverflow;

  delete detailPage.dataset.detailType;
  delete detailPage.dataset.pillar;
  delete detailPage.dataset.category;
  delete detailPage.dataset.drumCode;

  // Quita el highlight del tambor.
  pausedDrumButton?.classList.remove(
    "drum-zoom-paused"
  );

  pausedPillarButton?.classList.remove(
  "pillar-button-active"
);

pausedPillarButton = null;

  // Quita el highlight de la columna.
  pausedPillarColumn?.classList.remove(
    "pillar-column-zoom-paused"
  );

  pausedPillarColumn = null;
}


  // ========================================
  // PILLAR BUTTONS
  // ========================================

document
  .querySelectorAll(
    ".pillar-buttons button[data-pillar]:not(:disabled)"
  )
  .forEach(button => {
    button.addEventListener("click", () => {
      openPillarColumnDetail(button);
    });
  });


  // ========================================
  // CATEGORY DRUMS
  // ========================================

document
  .querySelectorAll(".pillar-drum-btn[data-category]")
  .forEach(button => {
    button.addEventListener("click", () => {
      openDrumDetail(button);
    });
  });


  // ========================================
  // BACK BUTTON
  // ========================================

  backButton.addEventListener("click", () => {
    closePillarDetail();
  });


  // ========================================
  // ESCAPE KEY
  // ========================================

  window.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      detailPage.classList.contains("active")
    ) {
      closePillarDetail();
    }
  });


  // Available for future files
  window.openPillarDetail = openPillarDetail;
  window.closePillarDetail = closePillarDetail;
});
