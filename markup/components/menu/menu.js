$('.js-menu-trigger').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('_active');
  $('.js-menu-drop').toggleClass('_active');
  $('.mask').show();
});

$('.mask').click(function () {
  $(this).hide();
  $('.js-menu-drop').toggleClass('_active');
});