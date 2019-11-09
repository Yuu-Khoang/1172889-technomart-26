var openFeedback = document.querySelector(".open-feedback");
var feedback = document.querySelector(".popup-feedback");
var openBigmap = document.querySelector(".open-bigmap");
var bigmap = document.querySelector(".popup-bigmap");
var openBuyAlert = document.querySelector(".open-buy-alert");
var buyAlert = document.querySelector(".popup-buy-alert");

if (feedback) {
  var closeFeedback = feedback.querySelector(".popup-close");
  var form = feedback.querySelector("form");
  var username = feedback.querySelector("[name=username]");
  var email = feedback.querySelector("[name=email]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  openFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("popup-show");
    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });

  closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("popup-show");
    feedback.classList.remove("popup-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      feedback.classList.add("popup-error");
      console.log("Нужно указать имя и e-mail");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });
}

if (buyAlert) {
  var closeBuyAlert = buyAlert.querySelector(".popup-close");

  openBuyAlert.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyAlert.classList.add("popup-show");
  });

  closeBuyAlert.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyAlert.classList.remove("popup-show");
    buyAlert.classList.remove("popup-error");
  });
}

if (bigmap) {
  var closeBigmap = bigmap.querySelector(".popup-close");

  openBigmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.add("popup-show");
  });

  closeBigmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.remove("popup-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("popup-show")) {
      feedback.classList.remove("popup-show");
      feedback.classList.remove("popup-error");
    }
    if (bigmap.classList.contains("popup-show")) {
      bigmap.classList.remove("popup-show");
    }
  }
});
