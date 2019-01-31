var link = document.querySelector(".js-feedback-button");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function () {
  if (popup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  }
});