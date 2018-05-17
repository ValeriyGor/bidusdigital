(function($) {	
var el = $(".invideo__head");
var el2 = $(".invideo__media");

//Set The Tween Width
	// TweenMax.to(el, 2, {width:"-=50%", delay:3, ease:Power2.easeOut});
	// TweenLite.to(el2, 2, {css: {right:"0"}, delay:3, ease:Power2.easeOut});
})(jQuery);

new WOW().init();

$( "li.arrow-down").hover(
    function() {
        if ($(window).width() > '1024'){
                $(".curtain").fadeIn(300);
                if($('.head-menu__dropdown').is(":visible")){
                  $(this).children(".head-menu__dropdown").fadeTo(0, 1);
                }
                else{
                  $(this).children(".head-menu__dropdown").fadeTo(300, 1);
                }
            }
    }, function() {
        if ($(window).width() > '1024'){
              $(".curtain").fadeOut(300);
              $(this).children(".head-menu__dropdown").fadeOut(300);
            }
    }
);

$( ".curtain" ).click(function(e) {
    $(".fast-link").slideUp(0);
	$(".result-search").slideUp(0);
    $(".search").removeClass('active');    
	$(".search input").attr("placeholder", "");
    $(this).fadeOut(300);
	$(".search input").val('');
});

$( ".close-input" ).click(function(e) {
    $(".fast-link").hide(0);
    $(".result-search").hide(0);
    $(".search").removeClass('active');    
    $(".curtain").fadeOut(300);
    $(".search input").val('');
    $(".search input").blur();
    if ($(window).width() > '767'){
        $(".search input").attr("placeholder", "");
    }
    else {
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
});

$(document).keydown(function(e) {
    if( e.keyCode === 27 ) {
      $( ".close-input" ).click();
    }
    if( e.keyCode === 13 ) {
      alert("Отправлено!");      
      $(".search input").val('');
    }
});


$( ".seen-all").click(function(e) {
    $(".service .be-hide").slideToggle(500);
    if($(this).hasClass('close')){
     var id  = "#service",

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 100;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
    }
    $(this).toggleClass("close");

    var text = $(this).text();
    $(this).text(
    text == "Показать все услуги" ? "Скрыть" : "Показать все услуги");
    
    
});

$( ".mob-button" ).click(function(e) {
    $(".head-menu").slideToggle(200);
    $('.curtain').fadeOut(0);
    $('.search').removeClass('active');
    $('.fast-link.open, .result-search.open').hide(0);
    $(this).children('img').attr("src","img/close-menu.png");
});



 $( ".search input" ).focus(function() {     

    $(this).parent().addClass('active');
	$(".search input").attr("placeholder", "Поиск по сайту...");
    $(".curtain").fadeIn(300);
    $(".fast-link").delay(300).slideDown(0);
    $(".fast-link").addClass('open');
  });


	$( ".search input" ).keyup(function() {    
		$(".result-search").slideDown(0);
    	$(".result-search").addClass('open');
	});

var wnd = $(window);

wnd.scroll(function(){
    if ($(window).width() <= '767'){
        var top = wnd.scrollTop(),
            opacity = top > 200 ? 1 : top * 5 / 1000,
            scale = 1 - (top > 200 ? 1 : top * 2 / 1000);
            //sizeText = top > 400 ? 1 : top * 5 / 1000,
            //sizeText1 = 7 - sizeText*1.5,
            //lineH = 9.5 - sizeText*1.5,
            //maxWidth = 85 - sizeText*20;
        $("header").css("background", "rgba(0, 0, 0, " + opacity + ")");
        $(".mobile-tiser h1").css("transform", "scale(" + scale + ")");
        //$(".mobile-tiser h1").css("font-size", sizeText1 + "vw");
        //$(".mobile-tiser h1").css("line-height", lineH + "vw");
        //$(".mobile-tiser h1").css("max-width", maxWidth + "%");
        $(".mobile-tiser h1").css("opacity", 1 - opacity);
    }
    if ($(window).width() > '767'){
        var top = wnd.scrollTop(),
            topE = top > 2000 ? 1 : top * 5 / 20;
            if(topE>450)
            {
              topE = 450;
            }
            else if(topE<0){
              topE = 0;
            }
            var topN = 200 - topE;
            var topE1 = topE - 50
            //sizeText = top > 400 ? 1 : top * 5 / 1000,
            //sizeText1 = 7 - sizeText*1.5,
            //lineH = 9.5 - sizeText*1.5,
            //maxWidth = 85 - sizeText*20;
        //$("header").css("background", "rgba(0, 0, 0, " + opacity + ")");
        //$(".mobile-tiser h1").css("transform", "scale(" + scale + ")");
        //$(".mobile-tiser h1").css("font-size", sizeText1 + "vw");
        //$(".mobile-tiser h1").css("line-height", lineH + "vw");
        //$(".mobile-tiser h1").css("max-width", maxWidth + "%");
        $(".stack-line img:first-of-type").css("top", topE);
        $(".stack-line img:nth-of-type(3)").css("top", topE1);
        $(".stack-line img:nth-of-type(2)").css("top", topN);
    }
});

$(document).ready(function() {
    if ($(window).width() <= '767'){
        $('.search').appendTo($(".head-menu"));
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
     if ($(window).width() > '767'){
    // Show loading animation.
      var playPromise = $('#video-phone').get(0).play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          $('#video-phone').get(0).play();
        })
        .catch(error => {
            $('#video-phone').get(0).play();
        });
      }
  }

    if($("div").is(".slider-for")){
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.slider-nav',
          responsive: [
            {
              breakpoint: 761,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 1025,
              settings: {
                arrows: true
              }
            },
            {
              breakpoint: 1280,
              settings: {
                arrows: false
              }
            }
          ]
        });
    }
    if($("div").is(".slider-nav")){
        $('.slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 2,
          asNavFor: '.slider-for',
          arrows: false,
          centerPadding: '80px',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: false
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                centerMode: true,
                centerPadding: '60px',
              }
            }
          ]
        });
    }

    if($("div").is(".blog__wrap")){
        $('.blog__wrap').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          responsive: [
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '45px',
                arrows: false
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '45px',
                arrows: false
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '65px',
                arrows: false
              }
            },
            {
              breakpoint: 1280,
              settings: {
                arrows: false
              }
            }
          ]
        });
    }    
    
});

var $button = $('#menu-btn');

$button.on('click', function(e){
    e.preventDefault();
    if( $button.hasClass('open') ){
      $button.removeClass('open');
      $button.addClass('close');
      $('body').removeClass('open-mob');
    } else {
      $button.removeClass('close');
      $button.addClass('open');
      $('body').addClass('open-mob');
    }
});
$("#play-tiser").on('click', function(e){
    $(".slider-head .slick-dots").fadeOut(500);
    $(".slider-head .slick-arrow").fadeOut(500);    
    $(this).parent().fadeOut(500);
    $(".invideo__head").fadeOut(500);
    $('.slider-head__item.invideo .row-half:nth-of-type(2)').animate({width: "100%"}, 500);
    $('.close-video').fadeIn(500);
});
$(".close-video").on('click', function(e){
    $(".slider-head .slick-dots").fadeIn(500);
    $(".slider-head .slick-arrow").fadeIn(500);    
    $("#play-tiser").parent().fadeIn(500);
    $(".invideo__head").fadeIn(500);
    $('.slider-head__item.invideo .row-half:nth-of-type(2)').animate({width: "50%"}, 500);
    $(this).fadeOut(500);
});

$(document).ready(function() {
  if($("div").is(".slider-head")){
        var slider2 = $('.slider-head').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'cubic-bezier(0, 0, 0.5, 1)',
            responsive: [
            {
              breakpoint: 761,
              settings: {
                arrows: false
              }
            }
            ]
        });
    }
    function func() {  
      anim();
    }
    setTimeout(func, 3000);
  
  slider2.on('afterChange', function(event, slick, currentSlide) { 
    if (currentSlide === 0) {      
      
      function func() {  
        anim();
      }
      setTimeout(func, 3000);
    }
    else if (currentSlide != 0) {
      $(".invideo__media").animate({"right":"-50%"}, 0);
      $(".invideo__media").animate({opacity: "0"}, 0);
      $(".invideo__head").animate({"width": "100%"}, 0);
      $(".invideo__head").animate({"width": "100%"}, 0);
      $(".invideo__head").removeClass("scaled");
      $(".invideo").removeClass("left-back");
    }
  });
});

function anim(){
  $(".invideo__media").stop(true, true).delay(3000).animate({
       opacity: "1"
    }, { duration: 2000, easing: 'swing', queue: false});
      $(".invideo__media").animate({
       "right":"0px"
    }, { duration: 2000, easing: 'swing', queue: false });
      $(".invideo__head").animate({
       "width":"50%"
    }, { duration: 2000, easing: 'swing', queue: false });
      $(".invideo__head").addClass("scaled");
      $(".invideo").addClass("left-back");
}