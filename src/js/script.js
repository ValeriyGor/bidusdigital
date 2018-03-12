
(function($) {	
var el = $(".invideo__head");
var el2 = $(".invideo__media");

//Set The Tween Width
	// TweenMax.to(el, 2, {width:"-=50%", delay:3, ease:Power2.easeOut});
	// TweenLite.to(el2, 2, {css: {right:"0"}, delay:3, ease:Power2.easeOut});
})(jQuery);

new WOW().init();

$( "li.arrow-down" ).hover(function(e) {
    $(".curtain").slideToggle(0);
    $(".curtain").toggleClass("open");
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
	$(".search input").attr("placeholder", "");
    $(".curtain").delay(300).slideUp(0);
    $(".curtain").removeClass('open');
	$(".search input").val('');
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
    var top = wnd.scrollTop(),
        opacity = top > 500 ? 1 : top * 2 / 1000;
   $("header").css("background", "rgba(0, 0, 0, " + opacity + ")");
});

$(document).ready(function() {
    if ($(window).width() <= '767'){
        $('.search').appendTo($(".head-menu"));
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
});