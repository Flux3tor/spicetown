document.getElementById("save-keybinds").addEventListener("click", () => {
  const settings = {
    keybind_sidebar_modifier: document.getElementById("keybind-sidebar-modifier").value
  };
  chrome.storage.local.set(settings, () => {
    alert("keybinds saved! (this alert is to be replaced by a toast)");
  });
});

chrome.storage.local.get(["keybind_sidebar_modifier"], (result) => {
  if (result.keybind_sidebar_modifier) document.getElementById("keybind-sidebar-modifier").value = result.keybind_sidebar_modifier;
});