function initialize() {
  const topCollabDiv = document.querySelector(".top-collab img");
  if (!topCollabDiv) {
    return;
  }

  const spicetownIcon = document.createElement("img");
  spicetownIcon.src = chrome.runtime.getURL("/images/icon-48.png");
  spicetownIcon.style.height = "45px";
  spicetownIcon.style.width = "auto";
  spicetownIcon.style.paddingLeft = "32px";

  if (!spicetownIcon) {
    return;
  }

  topCollabDiv.insertAdjacentElement("afterend", spicetownIcon);
}

initialize();