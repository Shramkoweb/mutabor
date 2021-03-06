// filter functions
var filterFns = {
  greaterThan50: function (itemElem) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt(number, 10) > 50;
  },
  even: function (itemElem) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt(number, 10) % 2 === 0;
  }
};

// external js: isotope.pkgd.js, imagesloaded.pkgd.js

var grid = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function () {
  // init Isotope after all images have loaded
  iso = new Isotope('.grid', {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      horizontalOrder: true
    },

    filter: function (itemElem) {

      var isMatched = true;

      for (var prop in filters) {
        var filter = filters[prop];
        // use function if it matches
        filter = filterFns[filter] || filter;
        // test each filter
        var filterType = typeof filter;
        if (filter && filterType == 'function') {
          isMatched = filter(itemElem);
        } else if (filter) {
          isMatched = matchesSelector(itemElem, filter);
        }
        // break if not matched
        if (!isMatched) {
          break;
        }
      }
      return isMatched;
    }

  })
});

// store filter for each group
var filters = {};

// init Isotope

document.querySelector('#filters').addEventListener('click', function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  // get group key
  var buttonGroup = event.target.parentNode;
  var filterGroup = buttonGroup.getAttribute('data-filter-group');
  // set filter for group
  filters[filterGroup] = event.target.getAttribute('data-filter');
  // arrange, and use filter fn
  iso.arrange();
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0; i < buttonGroups.length; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener('click', function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
