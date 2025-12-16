function initialize() {
  const topCollabDiv = document.querySelector(".top-collab img");
  if (!topCollabDiv) {
    return;
  }

  const spicetownIcon = document.createElement("img");
  spicetownIcon.src = chrome.runtime.getURL("/images/hc-gh&st-collab.png");
  spicetownIcon.style.height = "45px";
  spicetownIcon.style.width = "auto";

  if (!spicetownIcon) {
    return;
  }

  topCollabDiv.insertAdjacentElement("afterend", spicetownIcon);
}

initialize();