$(document).ready(function() {
  //Drop down menu
  $('.drop-down').click(function(event) {
    event.preventDefault();
    $('.drop-down-open').slideToggle();
  });

  //Slider
  $('.bxslider').bxSlider({
    auto: true,
    pause: 5000
  });

  //Lightbox
  lightbox.option({
    'wrapAround': true
  });

  //Detect the scroll event to show or hide the button
  $(window).on('DOMMouseScroll mousewheel',function(e) {
    if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      $('.top').slideDown(500);
    } else {
      $('.top').slideUp(500);
    }
  });

  //Click the button and scroll to the top
  $('.top').on('click', 'a', function(event) {
    event.preventDefault();
    $('html body').animate({
      scrollTop: 0
    }, 700);
  });

});
