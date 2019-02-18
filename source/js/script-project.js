var navMain = document.querySelector(".site-navigation");
var navToggle = document.querySelector(".toggle");
var overlay = document.querySelector(".overlay");
var linkModal = document.querySelectorAll(".site-navigation__item");
var menuModal = document.querySelectorAll(".navigation-modal");


//Открытие меню в мобильно версии.

navMain.classList.remove("site-navigation--no-js");
navMain.classList.add("site-navigation--closed");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("is-active");
  navMain.classList.toggle("site-navigation--closed");
  overlay.classList.toggle("overlay--open");
});

// modal menu

if (0 < linkModal.length) {
  for (var j = 0; j < linkModal.length; j++)
    linkModal[j].addEventListener("click", function () {
      this.querySelector(".navigation-modal").classList.toggle("navigation-modal--open");
    })
};
