// PILLAR MAP SIZE

const PILLAR_MAP_WIDTH = 624;
const PILLAR_MAP_HEIGHT_BREAKPOINT = 750;
const PILLAR_MAP_SIDE_SPACE = 20;

function updatePillarMapSize() {
  const availableWidth = Math.max(
    window.innerWidth - PILLAR_MAP_SIDE_SPACE,
    1
  );

  const widthScale = Math.min(
    1,
    availableWidth / PILLAR_MAP_WIDTH
  );

  const heightScale = window.innerHeight <= PILLAR_MAP_HEIGHT_BREAKPOINT
    ? window.innerHeight / PILLAR_MAP_HEIGHT_BREAKPOINT
    : 1;

  const mapScale = Math.min(widthScale, heightScale);

  document.documentElement.style.setProperty(
    "--pillar-map-scale",
    mapScale.toFixed(4)
  );
}


updatePillarMapSize();

window.addEventListener("resize", updatePillarMapSize);
