$(document).ready(function() {
  $('.drawer').drawer();
  $('.drawer-nav').on('click', function() {
       $('.drawer').drawer('close');
    });
});
$(document).ready(function() {
  $('.drawer').drawer();
});

$(".page-top").hide();

  $(window).scroll(function() {
    if($(this).scrollTop() > 80 ) {
      $(".page-top").fadeIn();
    }else {
      $(".page-top").fadeOut();
    }
  });

  $(".page-top").on('click', function(){
    $("body,html").animate({scrollTop: 0}, 500);
    return false;
  });

 
  new WOW().init();
