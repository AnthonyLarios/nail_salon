$(function() {
  var currentIndex = 0;
  var timeout;

  $slides = $('#slide_show').find('.slide');
  
  function change(newIndex) {
    $currentSlide = $("div#slide_show > img:eq(" + currentIndex + ")");
    $newSlide = $("div#slide_show > img:eq(" + newIndex + ")");
    
    advance();

    $currentSlide.fadeOut(1500).css( {'display':''} ).removeClass('visible').addClass('hidden');
    $newSlide.fadeIn(1500).css( {'display':''} ).removeClass('hidden').addClass('visible');

    currentIndex = newIndex;
  }

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
