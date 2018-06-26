var fixNavOutLeft = 0;
var fixNavOutTop = 0;

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
                if(!$('.curtain').is(":visible")){
                  $(".curtain").fadeIn(150);
                }                
                if($('.head-menu__dropdown').is(":visible")){
                  $(this).children(".head-menu__dropdown").stop().fadeTo(0, 1);
                }
                else{
                  $(this).children(".head-menu__dropdown").stop().fadeTo(150, 1);
                }
                $(this).children(".head-menu__dropdown").addClass('open');
            }
    }, function(e) {
        if ($(window).width() > '1024'){  
              if (!$('li.arrow-down>a').is(e.target)){                
                $(".curtain").fadeOut(150);
              }
              if(!$('li.arrow-down').is(e.target)){
                $(this).children(".head-menu__dropdown").fadeOut(150);
              }        
            }
    }
);


//выход курсора мышки за предел окна браузера
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
        // stop your drag event here
        // for now we can just use an alert
        if ($('li.arrow-down>a').is(e.target)){                
          $(".curtain").fadeOut(150);
        }
    }
});


$( ".curtain" ).click(function(e) {
    $(".fast-link").slideUp(0);
  $(".result-search").slideUp(0);
    $(".dropdown-filter").removeClass("open");
    $(".breadscrumb-wrap").removeClass("open");
    $('.dropdown-filter').slideUp(300);
    $(".search").removeClass('active');
    $('.close-input').fadeOut(300);
    AnimateRotate($('.close-input'), -90)
  $(".search input").attr("placeholder", "");
    $(this).fadeOut(300);
  $(".search input").val('');
      $('.head-menu').removeClass('fonthide');
});
$( ".send_form" ).click(function(e) {
    $(".success_send").fadeIn(0);
});

$( ".close-input" ).click(function(e) {
    $(".fast-link").hide(0);
    $(".result-search").hide(0);
    $(".search").removeClass('active');
    if($(this).hasClass('not-visible')){
      $(this).removeClass('not-visible');
      $(this).addClass('visible');
      $(this).fadeIn(300);
      AnimateRotate($('.close-input'), 90);
      // $(this).fadeIn(300);
    } 
    else{
      $(this).removeClass('visible');
      $(this).addClass('not-visible');
      $('.search input').hide(0);
      $('.search input').delay(200).fadeIn(300);



      $(this).fadeOut(500);
      // $(this).fadeOut(300);
      AnimateRotate($('.close-input'), -90);
    } 
    $(".curtain").fadeOut(300);
    $(".search input").val('');
    $(".search input").blur();
    $('.head-menu').removeClass('fonthide');
    
    if ($(window).width() > '767'){
        $(".search input").attr("placeholder", "");
    }
    else {
        $(".search input").attr("placeholder", "Поиск по сайту");
    }
});

function AnimateRotate(elem,d){
    $({deg: 0}).animate({deg: d}, {
        duration: 300,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

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

$('.form-call input').focus(function(){
  $('.form-call').addClass('focused');
  var refreshId = setInterval(function(){
    if($('.typed-cursor').hasClass('typed-cursor--blink'))
    {      
      clearInterval(refreshId);
      $('.typed-cursor').hide(0);
      typed.stop();
    }
  }, 95);
});
$('.form-call input').blur(function(){
  $('.form-call').removeClass('focused');
  $('.typed-cursor').show(0);
  typed.start();
});

$( ".mob-button" ).click(function(e) {
    $(".head-menu").slideToggle(200);
    $('.curtain').fadeOut(0);
    $('.search').removeClass('active');
    $('.phone').fadeToggle(200);
    $('.fast-link.open, .result-search.open').hide(0);
    $(this).children('img').attr("src","img/close-menu.png");
});
$( ".open-dropdown-filter" ).click(function(e) {
    $(".dropdown-filter").toggleClass("open");
    $(".breadscrumb-wrap").toggleClass("open");
    $('.curtain').fadeToggle(300);
    $('.dropdown-filter').slideToggle(300);
});

$( ".seen-map" ).click(function(e) {
    e.preventDefault();
    if($(this).hasClass('open')){
      $(this).parent().next().children(".slider-text").show(0);
      $(this).parent().next().children(".requisites").hide(0);
      $(this).parent().next().children(".map").hide(0);
      $(this).removeClass('open');
      }
    else{
      $(this).parent().next().children(".slider-text").hide(0);
      $(this).parent().next().children(".requisites").hide(0);
      $(this).parent().next().children(".map").show(0);
      $(this).addClass('open');
    }

    var text = $(this).attr('data-close');
    $(this).attr('data-close', $(this).text());
    $(this).text(text);
});
$( ".open-requisites" ).click(function(e) {
    e.preventDefault();
    if($(this).hasClass('open')){
      $(this).parent().next().children(".slider-text").show(0);
      $(this).parent().next().children(".requisites").hide(0);
      $(this).parent().next().children(".map").hide(0);
      $(this).removeClass('open');
    }
    else{
      $(this).parent().next().children(".slider-text").hide(0);
      $(this).parent().next().children(".requisites").show(0);
      $(this).parent().next().children(".map").hide(0);
      $(this).addClass('open');
    }
    var text = $(this).attr('data-close');
    $(this).attr('data-close', $(this).text());
    $(this).text(text);
    
});
$(".show-all-history").click(function(e) {
    $('.will-be-hide').slideToggle(200);
    if($(this).hasClass('opened')){
     var id  = ".history",

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 100;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 600);
    }
    $(this).toggleClass("opened");
    var text = $(this).text();
    $(this).text($(this).attr("data-hide"));
    $(this).attr("data-hide", text);
    
});

$(".show-all").click(function(e) {
    var text = $(this).text();
    $(this).text($(this).attr('data-hide'));
    $(this).attr('data-hide', text);
    $(this).prevAll('.request__text-descr').toggleClass('open');
    
});
$( ".requisites .close" ).click(function(e) {
    e.preventDefault();
    $(this).parent().hide(0);
    $(this).parent().prevAll(".slider-text").show(0);
    $(this).parent().prev().hide(0);
});
$( ".map .close" ).click(function(e) {
    e.preventDefault();
    $(this).parent().hide(0);
    $(this).parent().prev().show(0);
    $(this).parent().next().hide(0);
});

$(".conference-nav__item").click(function(e, index) {
    var n = $(this).attr('data-for');
    // if (!$(this).hasClass('slick-current')){
      $('.conference-nav__item').removeClass('slick-current');
      $(this).addClass('slick-current');
      var index = $(this).attr('data-for');
      console.log(index);
      if (index == 1){
        var position = 0;
      }
      else{
        var position = --index * 23;
      }

      $('.conference-nav__line').css('left', position + "%");
    // }
    $(".slider-conf").each(function(i) {
      if ($(this).attr("data-num") == n) {
        $(this).show(0);
        $(this).slick('unslick');
        $(this).slick(getSliderSettings());
      } 
      else{
        $(this).hide();
      }
    });
});
      
function getSliderSettings(){
  return {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    dots: true
  }
}

function getSliderConfSettings(){
  return {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    speed: 150,
    centerPadding: '52px',
    centerMode: true,
    adaptiveHeight: true,
    dots: false
  }
}



 $( ".search input" ).focus(function() {     

    $(this).parent().addClass('active');
    $('.close-input').removeClass('not-visible');
    $('.close-input').addClass('visible');
    $('.close-input').fadeIn(300);
    AnimateRotate($('.close-input'), 90);
 $(".search input").attr("placeholder", "Поиск по сайту...");
    $(".curtain").fadeIn(300);
    $(".fast-link").delay(300).slideDown(0);
    $(".fast-link").addClass('open');

    if ($(window).width() <= '767'){
      $('.head-menu').scrollTop();
    } 
    if ($(window).width() > '767'){
      $('.head-menu').addClass('fonthide');
    }
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
      if ($(".navigation").length != 0) { 
        var scrollTop =  fixNavOutTop - 70;
        var hbox = "15px";

        if($(this).scrollTop() > scrollTop){
          var res = $(this).scrollTop() - scrollTop;
          hbox = $('.history__text').innerHeight() - $('.navigation__container').innerHeight();
          if (res < hbox){
            $('.navigation').css('position', 'fixed');
            $('.navigation').css('top', '70px');
            $('.navigation').css('padding-top', "15px");

            var top = 0;
            $( ".history__text .history__item" ).each(function( index ){
              if($(this).offset().top - 200 < wnd.scrollTop()   && $(this).offset().top + $(this).outerHeight(true) -200 > wnd.scrollTop()  )
              {
                
                var href = $("a[href*=\"#" + $(this).attr('id') + '\"]');
                $('.navigation__container a.active').not(this).removeClass('active');
                $(href).addClass('active');
                return false;
              }
            });
            
          }          
          else{
            $('.navigation').css('position', 'static');
            $('.navigation').css('padding-top', hbox + 15);
          }
        }
        else{
          $('.navigation').css('position', 'static');
           $('.navigation').css('padding-top', "15px");
        }
      }
      
      if ($(".stack-line").length != 0) { // проверим существование элемента чтобы избежать ошибки
        var top = wnd.scrollTop(),
            topE = top > 2000 ? 1 : top * 5 / 20;
            if(topE>420)
            {
              topE = 420;
            }
            else if(topE<0){
              topE = 0;
            }
            var topN = 100 - topE;
            var hw = $( window ).height();
            var topE1 = topE - 450;

          $(".stack-line img:first-of-type").css("top", topE);
          $(".stack-line img:nth-of-type(3)").css("top", topE1);
          $(".stack-line img:nth-of-type(2)").css("top", topN);


      }
    }
      if ($("#techno-carousel").length != 0) { 
        var scrollTop =  $('#techno-carousel').offset().top - $(window).height() + 100;
        if($(this).scrollTop() > scrollTop){
          if($(window).width() > '767'){
            var percent = $(window).height()/80;
          }
          else{
            var percent = $(window).height()/100;
          }
          var res = ($(this).scrollTop() - scrollTop)/percent;
          var wdth = $('#techno-carousel').width();
          var percWidth = $(".row").width()/wdth * 100;
          var max = 100 - percWidth;
          if (res < max){
            $("#techno-carousel").css("transform", "translateX(-"+ res+"%)");
          }
        }
      }
      
      if ($("#partners-carousel").length != 0) { 
        var scrollTop =  $('#partners-carousel').offset().top - $(window).height() + 150;
        if($(this).scrollTop() > scrollTop){
          if($(window).width() > '767'){
            var percent = $(window).height()/50;
          }
          else{
            var percent = $(window).height()/70;
          }
          var res = ($(this).scrollTop() - scrollTop)/percent;
          var wdth = $('#partners-carousel').width();
          var percWidth = $(".row").width()/wdth * 100;
          var max = 100 - percWidth;
          if (res < max){
            $("#partners-carousel").css("transform", "translateX(-"+ res+"%)");
          }
        }
      }
});

$(document).ready(function(){
    var tooltip = $(".tooltip-block")
    if ($(tooltip).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $(tooltip).delay(1000).fadeIn(1000);
        $(tooltip).delay(2000).fadeOut(1000);
      }
  
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - $('.header').height() - 20}, 600, 'swing'); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});

$(document).ready(function() {
    if ($(window).width() <= '767'){
        $('.search').appendTo($(".head-menu"));
        $(".search input").attr("placeholder", "Поиск по сайту");
        $(".conference-nav").slick(getSliderConfSettings());

        
      $('.thanks-letters').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 150,
        dots: true,
        adaptiveHeight: true
      });
    }
     if ($(window).width() > '767' && $('#video-phone').length > 0){
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
        $('.slider-for').not('.reviews .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          adaptiveHeight: true,
          infinite: true,
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
                arrows: true
              }
            }
          ]
        });
    } 

    if($("div").is(".reviews .slider-for") && $(window).width() > '767'){
        $('.reviews .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          adaptiveHeight: true,
          infinite: true,
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
                arrows: true
              }
            }
          ]
        });
    }
    if($("div").is(".slider-nav")){
        $('.slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 3,
          asNavFor: '.slider-for',
          arrows: false,
          centerPadding: '',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                centerPadding: '0px',
                arrows: false,
                dots: false
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 5,
                centerMode: true,
                centerPadding: '0',
              }
            }
          ]
        });
    }

    if($("div").is(".blog__wrap") && $(window).width() > '767'){
        $('.blog__wrap').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          adaptiveHeight: true,
          responsive: [
          {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '25px',
                arrows: false
              }
            },
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
            }
          ]
        });
        resizeItems('.blog__wrap .blog-item');

        if($("div").is(".thanks-letters") && $(window).width() < '768'){
          $('.thanks-letters').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            centerPadding: '',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            adaptiveHeight: true
          });
      }
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
    $("#second-video").fadeIn(2000);
    $("#second-video").get(0).play();
    $('#second-video').addClass('active'); 
});
$(".close-video").on('click', function(e){
    $(".slider-head .slick-dots").fadeIn(500);
    $(".slider-head .slick-arrow").fadeIn(500);    
    $("#play-tiser").parent().fadeIn(500);
    $(".invideo__head").fadeIn(500);
    $('.slider-head__item.invideo .row-half:nth-of-type(2)').animate({width: "50%"}, 500);
    $(this).fadeOut(500);
    $("#second-video").fadeOut(500);
    $("iframe").each(function() {
    $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
    $("#second-video").get(0).pause();
});
$(".departament-item h3").on('click', function(e){
  if($(window).width() < '768'){
      var $not = $(this).parent();
      $('.departament-item.open').not($not).children(':not(:first-child)').slideToggle();
      $('.departament-item.open').not($not).removeClass('open');
      $(this).nextAll().slideToggle();
      $(this).parent().toggleClass('open');
    }
});
$(".mobile-accord .tabs").on('click', function(e){
  if($(window).width() < '768'){
      var $not = $(this);
      $('.mobile-accord .item .open').not($not).nextAll().slideToggle();
      $('.mobile-accord .item .open').not($not).removeClass('open');
      if(!$(this).hasClass('open') && $(this).attr('data-slick')){
        var dslick = $(this).attr('data-slick');
        $('.'+dslick+'.slick-slider').slick('unslick');

        if($(this).hasClass('noAdaptHeight')){
          $('.'+dslick).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            speed: 150,
            dots: true
          });
        }          
        else{
          $('.'+dslick).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            speed: 150,
            dots: true,
            adaptiveHeight: true
          });
        }
        
        $(this).nextAll().slideToggle();
      }
      else{
        $(this).nextAll().slideToggle();
      }      
       var id  = ".mobile-accord",

      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 40;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 300);
      $(this).toggleClass('open');
    }
});



$(document).ready(function() {
  var videoPlayer = document.getElementById('#second-video');
   $('#second-video').on('click', function(){
  var vid = document.getElementById("second-video");
  if($('#second-video').hasClass('active')){
   vid.pause();
    $("#second-video").fadeOut(1000);     
    $("#play-tiser").parent().fadeIn(500);
   $('#second-video').removeClass('active');            
  } else {
   vid.play();
   $('#second-video').addClass('active');            
  }
 });

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
  
  // slider2.on('afterChange', function(event, slick, currentSlide) { 
  //   if (currentSlide === 0) {      
      
  //     function func() {  
  //       anim();
  //     }
  //     setTimeout(func, 3000);
  //   }
  //   else if (currentSlide != 0) {
  //     $(".invideo__media").animate({"right":"-50%"}, 0);
  //     $(".invideo__media").animate({opacity: "0"}, 0);
  //     $(".invideo__head").animate({"width": "100%"}, 0);
  //     $(".invideo__head").removeClass("scaled");
  //     $(".invideo").removeClass("left-back");
  //   }
  // });
});

function playsec(){ 
  $('#second-video').attr('autoplay', 'autoplay');
}

// $(function() { 
//     var videos  = $("#second-video");

//         videos.on("click", function(){
//             var elm = $(this),
//                 conts   = elm.contents(),
//                 le      = conts.length,
//                 ifr     = null;

//             for(var i = 0; i<le; i++){
//               if(conts[i].nodeType == 8) ifr = conts[i].textContent;
//             }

//             elm.addClass("player").html(ifr);
//             elm.off("click");
//         });
// });

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

// $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
//   $('.open-modal-btn').click( function(event){ // лoвим клик пo ссылки с id="go"
//     event.preventDefault(); // выключaем стaндaртную рoль элементa
//     $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
//       function(){ // пoсле выпoлнения предъидущей aнимaции
//         $('#modal_form') 
//           .css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
//           .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
//     });
//   });
//   /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
//   $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
//     $('#modal_form')
//       .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
//         function(){ // пoсле aнимaции
//           $(this).css('display', 'none'); // делaем ему display: none;
//           $('#overlay').fadeOut(400); // скрывaем пoдлoжку
//         }
//       );
//   });
// });

$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open-modal-btn'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa
    
    


    setWidthScrollblock();
    
     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
              function(){ // пoсле выпoлнения предъидущей aнимaции
              $(div)
                .css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
                .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});

function setWidthScrollblock(){
  $('.scroll-block').each(function(){
      var width = 0;
      $(this).children().each(function () {
        width += $(this).outerWidth(true);
      });
      width += parseInt($(this).css('padding-left'));
      width += parseInt($(this).css('padding-right'));
      $(this).width(width + 20);
    });
}


function resizeItems(elements){
  var maxHeight = 0; 
  $(this).height("auto");

  $(elements).each(function(){
    if($(this).height() > maxHeight) 
    {
      maxHeight = $(this).height();
    }
    });

  $(elements).each(function(){
  if($(this).height() != maxHeight) 
  {
    $(this).height(maxHeight);
  }
  });
}

$(window).resize(function() { 
  resizeItems('.blog__wrap .blog-item');
  if ($(window).width() > '639'){
    resizeItems('.specoffer-item');
  }
  setWidthScrollblock();

  if ($(window).width() < '768'){
    $(".reviews .slider-for.slick-slider").slick('unslick');
    // $(".conference-nav").slick('unslick');
    $('.blog__wrap.slick-slider').slick('unslick');
    //$(".conference-nav").slick(getSliderConfSettings());
  }
  if ($(window).width() > '767'){
    if($('.navigation').length != 0){
      fixNavOutLeft = $('.navigation').offset().left;
      fixNavOutTop = $('.navigation').offset().top;
      $('.navigation').css('left', fixNavOutLeft);
    }
    $(".conference-nav.slick-slider").slick('unslick');
   // $(".filials .slider-for.slick-slider").slick('unslick');
    
  }
});

$(document).ready(function() {
  resizeItems('.blog__wrap .blog-item');
  if ($(window).width() > '639'){
    resizeItems('.specoffer-item');
  }
  
  if($('.navigation').length != 0){
      fixNavOutLeft = $('.navigation').offset().left;
      fixNavOutTop = $('.navigation').offset().top;
      $('.navigation').css('left', fixNavOutLeft);
  }
});

// $('input').keyup(function() {
//   if($(this).val())
//       $(this).addClass('has_value');
//     else
//       $(this).removeClass('has_value');
// });

function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = tt + t.height();
    return ((tb <= wt + w.height()) && (tt >= wt));
}

// $(function () {
//     $(window).scroll(function () {
//         var b = $("#technology");
//         if (isVisible(b)) {
//             setput();
//         }
//     });
// });

// function setput(){
//   $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
//     delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
//     if (delta >= 0) {
//       $(".scroll-block").css("transform", "translateX(-"+delta+"%)");
//     } else {
//       $(".scroll-block").css("transform", "translateX(-"+(-1*delta)+"%)");
//     }
//   });
// }
