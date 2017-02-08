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

  //Show button when scroll
  $(window).scroll(function() {
    $('.top').slideDown();
  });

  //Click the button and scroll to the top
  $('.top').on('click', 'a', function(event) {
    event.preventDefault();
    $('html body').animate({
      scrollTop: 0
    }, 700);
  });

});
