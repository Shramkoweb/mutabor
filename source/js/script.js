var navMain = document.querySelector(".site-navigation");
var navToggle = document.querySelector(".toggle");
var overlay = document.querySelector(".overlay");
var link = document.querySelectorAll(".works__item");
var workModal = document.querySelectorAll(".works__modal");
var linkModal = document.querySelectorAll(".site-navigation__item");
var menuModal = document.querySelectorAll(".navigation-modal");


//Открытие меню в мобильно версии.

navMain.classList.remove("site-navigation--no-js");
navMain.classList.add("site-navigation--closed");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("is-active");
  navMain.classList.toggle("site-navigation--closed");
  overlay.classList.toggle("overlay--open");
})


// modal
if (0 < link.length) {
  for (var i = 0; i < link.length; i++)
    link[i].addEventListener("click", function () {
      this.querySelector(".works__modal").classList.toggle("works__modal--open");
    })
};

// modal menu

if (0 < linkModal.length) {
  for (var j = 0; j < linkModal.length; j++)
    linkModal[j].addEventListener("click", function () {
      this.querySelector(".navigation-modal").classList.toggle("navigation-modal--open");
    })
};

var grid = document.querySelector('.grid');
var msnry;

imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
    transitionDuration: '0.25s',
  });
});
