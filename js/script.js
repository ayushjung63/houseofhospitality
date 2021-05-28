$(window).scroll(function(){
  var sticky = $('.navbar'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});