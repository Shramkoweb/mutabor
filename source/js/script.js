var navMain = document.querySelector(".site-navigation");
var navToggle = document.querySelector(".toggle");
var overlay = document.querySelector(".overlay");


//Открытие меню в мобильно версии.

navMain.classList.remove("site-navigation--no-js");
navMain.classList.add("site-navigation--closed");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("is-active");
  navMain.classList.toggle("site-navigation--closed");
  overlay.classList.toggle("overlay--open");
})

var workModal = document.querySelectorAll(".works__modal"),
  link = document.querySelectorAll(".works__item");
if (0 < link.length)
  for (var i = 0; i < link.length; i++)
    link[i].addEventListener("click", function () {
      this.querySelector(".works__modal").classList.toggle("works__modal--open");
    });
