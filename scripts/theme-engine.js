(function() {
  let activeTheme = "";
  const init = () => {
    chrome.storage.local.get(['selectedTheme'], (result) => {
      activeTheme = result.selectedTheme || localStorage.getItem("bg-color-theme");
      if (activeTheme) {
        startThemeEngine(activeTheme);
      }
    });
  };

  function startThemeEngine(themeId) {
    const bodyObserver = new MutationObserver(() => {
      const body = document.body;
    
      if (body) {
        if (body.getAttribute("data-theme") !== themeId) {
          body.setAttribute("data-theme", themeId);
        }
        updateBodyStyles(themeId, body);
        const hat = body.querySelector(".sidebar__user-avatar-hat-bg");
        if (hat) {
          updateHatImage(themeId, hat);
        }
      }
    });

    bodyObserver.observe(document.documentElement, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ["data-theme"] 
    });
  }

  function updateBodyStyles(themeId, body) {
    if (themeId === "bg-color-vanilla") {
      body.style.removeProperty("--theme-bg-image");
      return;
    }

    const localThemes = ["ruby", "dracula", "charcoal", "midnight"];
    const remoteThemes = {
      "bg-color-catppuccin-mocha": "https://i.ibb.co/fYQVfZbb/Mask-group-12.png",
      "bg-color-catppuccin-macchiato": "https://i.ibb.co/C5mZtM9R/Mask-group-13.png",
      "bg-color-leafy": "https://i.ibb.co/qFNQLtjq/Mask-group-21.png"
    };
    const shortName = themeId.replace("bg-color-", "");
    let bgUrl = localThemes.includes(shortName) 
      ? chrome.runtime.getURL(`/themes/bg-color/${shortName}/bg.png`)
      : remoteThemes[themeId];
    const currentProp = body.style.getPropertyValue("--theme-bg-image");

    if (bgUrl && currentProp !== `url("${bgUrl}")`) {
      body.style.setProperty("--theme-bg-image", `url('${bgUrl}')`);
    }
  }

  function updateHatImage(themeId, hatEl) {
    const hatMap = {
      "bg-color-ruby": "https://i.ibb.co/YBF6TqZ0/Mask-group-19.png",
      "bg-color-catppuccin-mocha": "https://i.ibb.co/cSZ853Kk/Mask-group-17.png",
      "bg-color-catppuccin-macchiato": "https://i.ibb.co/zhK0H9KW/Mask-group-16.png",
      "bg-color-charcoal": "https://hc-cdn.hel1.your-objectstorage.com/s/v3/d6258e630f490ea0_mask.png",
      "bg-color-leafy": "https://i.ibb.co/S7wr4DvT/Mask-group-20.png",
      "bg-color-midnight": chrome.runtime.getURL("/themes/bg-color/midnight/user-avatar-hat-bg.png")
    };

    if (hatMap[themeId] && hatEl.src !== hatMap[themeId]) {
      hatEl.src = hatMap[themeId];
    }
  }
  init();
})();