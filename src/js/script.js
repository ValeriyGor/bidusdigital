$( document ).ready(function() {
  if ($(window).width() > '767'){
        $('#video-phone').get(0).play();
    }
});

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
                $(this).children(".head-menu__dropdown").stop().fadeTo(300, 1);
            }
    }, function() {
        if ($(window).width() > '1024'){
                $(".curtain").fadeOut(300);
                $(this).children(".head-menu__dropdown").fadeOut(300);
            }
    }
);

$('.slider-head').on('afterChange', function(event, slick, currentSlide){
  if (currentSlide == 0) {
  }
});

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
    if ($(window).width() > '767'){
        $(".search input").attr("placeholder", "");
    }
    else {
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
});

$( ".seen-all" ).click(function(e) {
    $(".service .be-hide").slideToggle(0);
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
            opacity = top > 200 ? 1 : top * 5 / 1000;
       $("header").css("background", "rgba(0, 0, 0, " + opacity + ")");
    }
});

$(document).ready(function() {
    if ($(window).width() <= '767'){
        $('.search').appendTo($(".head-menu"));
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
});

var $button = $('#menu-btn');

$button.on('click', function(e){
    e.preventDefault();
    if( $button.hasClass('open') ){
      $button.removeClass('open');
      $button.addClass('close');
    } else {
      $button.removeClass('close');
      $button.addClass('open');
    }
});