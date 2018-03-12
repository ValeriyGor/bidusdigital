
(function($) {	
var el = $(".invideo__head");
var el2 = $(".invideo__media");

//Set The Tween Width
	// TweenMax.to(el, 2, {width:"-=50%", delay:3, ease:Power2.easeOut});
	// TweenLite.to(el2, 2, {css: {right:"0"}, delay:3, ease:Power2.easeOut});
})(jQuery);

new WOW().init();

$( "li.arrow-down" ).hover(function(e) {
    if ($(window).width() > '1024'){
        $(".curtain").slideToggle(0);
        $(".curtain").toggleClass("open");}
    $(this).children(".head-menu__dropdown").toggleClass("open");
});

$( ".curtain" ).click(function(e) {
    $(".fast-link").slideUp(0);
	$(".result-search").slideUp(0);
    $(".search").removeClass('active');    
	$(".search input").attr("placeholder", "");
    $(this).removeClass('open');
    $(this).delay(300).slideUp(0);
	$(".search input").val('');
});

$( ".close-input" ).click(function(e) {
    $(".fast-link").hide(0);
    $(".result-search").hide(0);
    $(".search").removeClass('active');    
    $(".curtain").delay(300).slideUp(0);
    $(".curtain").removeClass('open');
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
    $(".head-menu").slideToggle(300);
    $('.curtain').removeClass('open');
    $('.search').removeClass('active');
    $('.fast-link.open, .result-search.open').hide(0);
    $(this).children('img').attr("src","img/close-menu.png");
});



 $( ".search input" ).focus(function() {     

    $(this).parent().addClass('active');
	$(".search input").attr("placeholder", "Поиск по сайту...");
    $(".curtain").slideDown(0);
    $(".curtain").addClass('open');
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
            opacity = top > 500 ? 1 : top * 2 / 1000;
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