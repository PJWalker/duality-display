"use strict";

Hooks.on("daggerheart.postRollDuality", ({ roll }) => {
  const duration = 3000; /*milliseconds*/
  const popup = document.createElement("div");
  popup.id = "dualityPopup";
  switch (roll.result.duality) {
    case 1:
      popup.classList.add("hope");
      break;
    case 0:
      popup.classList.add("crit");
      break;
    case -1:
      popup.classList.add("fear");
      break;
  }
  document.body.appendChild(popup);
  setTimeout(() => {
    document.body.removeChild(popup);
  }, duration);
});
