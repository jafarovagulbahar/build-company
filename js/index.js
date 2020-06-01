/*Back to top*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()>150) {
      $('.backtotop').fadeIn();
    }else{
      $('.backtotop').fadeOut();
    }
  });

  $('.backtotop').click(function () {
    $('html,body').animate({scrollTop:0},700);
  })
});
