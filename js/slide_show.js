$(function() {
  var currentIndex = 0;
  var timeout;

  $slides = $('#slide_show').find('.slide');

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        change(currentIndex + 1);
      } else {
        change(0);
      }
    }, 5000);
  }

  advance();
});
