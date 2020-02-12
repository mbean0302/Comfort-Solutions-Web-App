// Login Pop-up


// Google Search Box
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('google-search-input');

searchForm.addEventListener('submit', function (e) {
  setTimeout(function(){ // Delay for Chrome
    searchInput.value = ''; // blank the input
  }, 1000);
});


// Footer to bottom of page regardless of window content height //

$(document).ready(function () {
  var pageHeight = $('body').height(),
    footerHeight = $('footer').height();
  if (pageHeight < $(window).height() - footerHeight) {
    $('footer').css({
      'position': 'absolute',
      'bottom': '3.5rem'

    });
  } else {
    $('footer').css({
      'position': '',
      'bottom': ''
    });
  }
});

window.addEventListener("resize", function () {
  var pageHeight = $('body').height(),
    footerHeight = $('footer').height();
  if (pageHeight < $(window).height() - footerHeight) {
    $('footer').css({
      'position': 'absolute',
      'bottom': '3.5rem'
    });
  } else {
    $('footer').css({
      'position': '',
      'bottom': ''
    });
  }
});
