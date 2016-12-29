$('.js-tabs-control-item').click(function (e) {
  e.preventDefault();

  var itemIntex = $(this).index();

  $(this).addClass('_active').siblings().removeClass('_active');

  $(this).closest('.js-tabs').find('.js-tabs-full').each(function () {
    $(this).find('.js-tabs-full-item').removeClass('_active');
    $(this).find('.js-tabs-full-item').eq(itemIntex).addClass('_active');
  });
});