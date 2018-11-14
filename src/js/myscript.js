$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('.transparent, .st-cap').addClass('fixed');
  } else {
    $('.transparent, .st-cap').removeClass('fixed');
  }
});

$(document).ready(function(){

  $(".scroll").click(function() {
    $("html, body").stop().animate({
      scrollTop: ($($(this).attr("href")).offset().top)-90 + "px"
    }, {
      duration: 700
    });
    return false;
  });

  if ($(window).width() > '767'){
    $( ".st-cap-shop").hover(
      function() {
        $(this).addClass('open');
        $('.st-cap').addClass('active');
        if(!$('.curtain').is(":visible")){
          $(".curtain, .st-cap-shop-list").fadeIn(100);
        }
      }, function(e) {
        $(this).removeClass('open');
        $('.st-cap').removeClass('active');
        $(".curtain, .st-cap-shop-list").fadeOut(100);
      }
    );
  }

  if ($(window).width() < '767'){
    $('.st-cap-shop').click(function() {
      $('.st-cap').toggleClass('mopen');
      $(".curtain").fadeToggle();
      $(".st-cap-menu").slideToggle();
    });
    $('.curtain, .st-cap-menu li a').click(function() {
      $('.st-cap').removeClass('mopen');
      $(".curtain").fadeOut();
      $(".st-cap-menu").slideUp();
    });
  }

  if ($(window).width() < '1440'){
    $('.st-cap-ordered').click(function() {
      $('body').css('overflow','hidden');
    });
    $('.st-regis-close, .st-success-close').click(function() {
      $('body').css('overflow','auto');
    });
  }

  $('.curtain').click(function() {
    $('.st-cap-shop').removeClass('open');
    $('.st-cap').removeClass('active');
    $(".curtain").fadeOut();
  });

  $('.st-cap-ordered').click(function() {
    $('.st-regis').fadeToggle(200);
    $('.st-regis-slider').slick('setPosition');
  });

  $('.st-regis-close').click(function() {
    $('.st-regis').fadeOut(200);
  });

  $('.st-success-close').click(function() {
    $('.st-regis').slideUp(200);
  });

  $('.st-prise-block').click(function() {
    $('.st-prise-block').removeClass('mask').removeClass('active');
    $('.st-prise-block').not(this).addClass('mask');
    $(this).addClass('active');
  });

});