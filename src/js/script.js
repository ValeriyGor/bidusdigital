
(function($) {	
var el = $(".invideo__head");

//Set The Tween Width
	TweenMax.set(el, {width: "80%"}); 

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
  });


	$( ".search input" ).keyup(function() {    
		$(".result-search").slideDown(0);
	});
