var linkForm = document.querySelector(".modal-button");
var popupForm = document.querySelector(".modal-form");
var mapbtn = document.querySelector(".map-button");
var popupMap = document.querySelector(".map_popup");
var buybtn = document.querySelectorAll(".buy-btn");
var basket = document.querySelector(".popup-basket");


if (popupForm !== null) {
  var close = popupForm.querySelector(".close");
  var form = popupForm.querySelector("form");
  var email = form.querySelector(".e-mail");
  var message = form.querySelector(".message");
  var surname = popupForm.querySelector(".surname");

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.remove("modal-show");
    popupForm.classList.remove("modal-error");
  });
}


if (linkForm !== null) {
  linkForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.add("modal-show");
    surname.focus();
  });
  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!surname.value || !email.value || !message.value) {
      evt.preventDefault();
      popupForm.classList.add("modal-error");
    }
  });
}


if (popupMap !== null) {
  var closeMap = popupMap.querySelector(".close");
  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });
}


if (mapbtn !== null) {
  mapbtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });
}


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
      popupForm.classList.remove("modal-error");
    }
  }
});


if (buybtn !== null && basket !== null) {
  for (var i = 0; i < buybtn.length; i++) {
    buybtn[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      basket.classList.add("modal-show");
    });
  };
  var closeBasket = basket.querySelector(".close-basket");
  closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show");
  });
}
