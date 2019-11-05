var link = document.querySelector(".open-popup");
var popup = document.querySelector(".contacts-popup");
var close = popup.querySelector(".close-popup");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("popup-error");
    console.log("Нужно указать имя и e-mail");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

