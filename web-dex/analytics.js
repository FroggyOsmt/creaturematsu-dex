(function initCreatureMatsuAnalytics() {
  window.va = window.va || function (...params) {
    (window.vaq = window.vaq || []).push(params);
  };

  const analytics = window.creatureMatsuAnalytics || {};

  analytics.pageview = function ({ route, path }) {
    if (!route || !path) return;
    window.va("pageview", { route, path });
  };

  analytics.slug = function (value) {
    return String(value || "content")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "content";
  };

  window.creatureMatsuAnalytics = analytics;

  const characterTargets = new Set([
    "sextuplets",
    "drleezar",
    "louise",
    "teseo"
  ]);
  const systemTargets = new Set([
    "pillar",
    "badge",
    "matsunian-language",
    "creature-icon"
  ]);

  function trackPillar(pillar) {
    const pillarData = window.pillarMapData?.[String(pillar)];
    const label = analytics.slug(pillarData?.title || `pillar-${pillar}`);

    analytics.pageview({
      route: "/pillar-map/pillar/[pillar]",
      path: `/pillar-map/pillar/${pillar}-${label}`
    });
  }

  function trackPillarCategory(code, fallbackLabel = "") {
    const normalizedCode = String(code || "").toUpperCase();
    if (!normalizedCode) return;

    const categoryData = window.pillarCategoryData?.[normalizedCode];
    const variationData = window.pillarMapData?.["2"]?.drums?.[normalizedCode];
    const isVariation = normalizedCode.startsWith("2");
    const type = isVariation ? "variation" : "category";
    const label = analytics.slug(
      categoryData?.label || variationData?.label || fallbackLabel || normalizedCode
    );

    analytics.pageview({
      route: `/pillar-map/${type}/[${type}]`,
      path: `/pillar-map/${type}/${normalizedCode.toLowerCase()}-${label}`
    });
  }

  function trackOutboundLink(linkKey) {
    if (!linkKey) return;

    analytics.pageview({
      route: "/links/[link]",
      path: `/links/${analytics.slug(linkKey)}`
    });
  }

  function getTrackedOutboundKey(anchor) {
    if (!anchor?.href) return "";

    try {
      const url = new URL(anchor.href, window.location.href);
      const hostname = url.hostname.replace(/^www\./, "");

      if (hostname === "discord.gg") return "discord";

      if (hostname === "instagram.com") {
        const profile = url.pathname.split("/").filter(Boolean)[0];
        return profile ? `instagram-${profile}` : "instagram";
      }

      if (hostname === "forms.gle") return "report-a-problem";
    } catch (error) {
      return "";
    }

    return "";
  }

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const explicitPage = target.closest("[data-analytics-path]");
    if (explicitPage) {
      analytics.pageview({
        route: explicitPage.dataset.analyticsRoute,
        path: explicitPage.dataset.analyticsPath
      });
      return;
    }

    const characterButton = target.closest("[data-character]");
    if (characterButton?.dataset.character) {
      analytics.pageview({
        route: "/character/[character]",
        path: `/character/${analytics.slug(characterButton.dataset.character)}`
      });
      return;
    }

    const systemButton = target.closest("[data-system]");
    if (systemButton?.dataset.system) {
      analytics.pageview({
        route: "/system/[system]",
        path: `/system/${analytics.slug(systemButton.dataset.system)}`
      });
      return;
    }

    const othersButton = target.closest("[data-others-content]");
    if (othersButton?.dataset.othersContent) {
      analytics.pageview({
        route: "/others/[content]",
        path: `/others/${analytics.slug(othersButton.dataset.othersContent)}`
      });
      return;
    }

    const internalLink = target.closest("[data-open-popup]");
    const internalTarget = internalLink?.dataset.openPopup;
    if (characterTargets.has(internalTarget)) {
      analytics.pageview({
        route: "/character/[character]",
        path: `/character/${analytics.slug(internalTarget)}`
      });
      return;
    }

    if (systemTargets.has(internalTarget)) {
      analytics.pageview({
        route: "/system/[system]",
        path: `/system/${analytics.slug(internalTarget)}`
      });
      return;
    }

    const categoryButton = target.closest("[data-drum-code][data-category], [data-mobile-category]");
    const categoryCode = categoryButton?.dataset.drumCode || categoryButton?.dataset.mobileCategory;
    if (categoryCode) {
      trackPillarCategory(
        categoryCode,
        categoryButton.dataset.category || categoryButton.textContent
      );
      return;
    }

    const categoryCarousel = target.closest("[data-mobile-category-up], [data-mobile-category-down]");
    if (categoryCarousel) {
      requestAnimationFrame(() => {
        const selectedCategory = document.querySelector(".mobile-pillar-sheet")?.dataset.mobileCategory;
        if (selectedCategory) trackPillarCategory(selectedCategory);
      });
      return;
    }

    const pillarCarousel = target.closest("[data-mobile-pillar-previous], [data-mobile-pillar-next]");
    if (pillarCarousel) {
      requestAnimationFrame(() => {
        const selectedPillar = document.querySelector(".mobile-pillar-sheet")?.dataset.mobilePillar;
        if (selectedPillar) trackPillar(selectedPillar);
      });
      return;
    }

    const pillarButton = target.closest("[data-pillar], [data-mobile-pillar]");
    const pillar = pillarButton?.dataset.pillar || pillarButton?.dataset.mobilePillar;
    if (pillar && !pillarButton.disabled && pillarButton.getAttribute("aria-disabled") !== "true") {
      trackPillar(pillar);
      return;
    }

    const explicitOutbound = target.closest("[data-analytics-link]");
    if (explicitOutbound?.dataset.analyticsLink) {
      trackOutboundLink(explicitOutbound.dataset.analyticsLink);
      return;
    }

    trackOutboundLink(getTrackedOutboundKey(target.closest("a[href]")));
  }, true);

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("pillar-page")) {
      analytics.pageview({ route: "/pillar-map", path: "/pillar-map" });
    }

    if (document.body.classList.contains("others-standalone")) {
      analytics.pageview({ route: "/others", path: "/others" });
    }
  }, { once: true });
})();
