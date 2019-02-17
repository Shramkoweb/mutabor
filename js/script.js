"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},navMain=document.querySelector(".site-navigation"),navToggle=document.querySelector(".toggle"),overlay=document.querySelector(".overlay"),linkModal=document.querySelectorAll(".site-navigation__item"),menuModal=document.querySelectorAll(".navigation-modal");if(navMain.classList.remove("site-navigation--no-js"),navMain.classList.add("site-navigation--closed"),navToggle.addEventListener("click",function(){navToggle.classList.toggle("is-active"),navMain.classList.toggle("site-navigation--closed"),overlay.classList.toggle("overlay--open")}),0<linkModal.length)for(var j=0;j<linkModal.length;j++)linkModal[j].addEventListener("click",function(){this.querySelector(".navigation-modal").classList.toggle("navigation-modal--open")});navMain=document.querySelector(".site-navigation"),navToggle=document.querySelector(".toggle"),overlay=document.querySelector(".overlay"),linkModal=document.querySelectorAll(".site-navigation__item"),menuModal=document.querySelectorAll(".navigation-modal");if(navMain.classList.remove("site-navigation--no-js"),navMain.classList.add("site-navigation--closed"),navToggle.addEventListener("click",function(){navToggle.classList.toggle("is-active"),navMain.classList.toggle("site-navigation--closed"),overlay.classList.toggle("overlay--open")}),0<linkModal.length)for(j=0;j<linkModal.length;j++)linkModal[j].addEventListener("click",function(){this.querySelector(".navigation-modal").classList.toggle("navigation-modal--open")});var filterFns={greaterThan50:function(e){var t=e.querySelector(".number").textContent;return 50<parseInt(t,10)},even:function(e){var t=e.querySelector(".number").textContent;return parseInt(t,10)%2==0}},filters={},iso=new Isotope(".grid",{itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer",gutter:".gutter-sizer",horizontalOrder:!0},filter:function(e){var t=!0;for(var o in filters){var n=filters[o];n=filterFns[n]||n;var i=void 0===n?"undefined":_typeof(n);if(n&&"function"==i?t=n(e):n&&(t=matchesSelector(e,n)),!t)break}return t}});document.querySelector("#filters").addEventListener("click",function(e){if(matchesSelector(e.target,"button")){var t=e.target.parentNode.getAttribute("data-filter-group");filters[t]=e.target.getAttribute("data-filter"),iso.arrange()}});for(var buttonGroups=document.querySelectorAll(".button-group"),i=0;i<buttonGroups.length;i++){var buttonGroup=buttonGroups[i];radioButtonGroup(buttonGroup)}function radioButtonGroup(t){t.addEventListener("click",function(e){matchesSelector(e.target,"button")&&(t.querySelector(".is-checked").classList.remove("is-checked"),e.target.classList.add("is-checked"))})}