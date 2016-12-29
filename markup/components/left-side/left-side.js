$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop();

  if (scrollTop > 0) {
    $('.js-scroll-top').addClass('_active');
  } else {
    $('.js-scroll-top').removeClass('_active');
  }
});

$('.js-scroll-top').click(function (e) {
  e.preventDefault();

  $('html, body').animate({scrollTop: 0},500);
});