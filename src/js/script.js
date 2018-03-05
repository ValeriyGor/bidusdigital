(function($) {
	var img = $('#gadget1');
	var img1 = $('#gadget2');
	var img2 = $('#gadget3');
	var img3 = $('#gadget4');

	TweenLite.from(img, 1, {css:{opacity:0, left: 700}, ease:Quad.easeInOut});
	TweenLite.from(img1, 0.95, {delay:.10, css:{opacity:0, left: 700}, ease:Quad.easeInOut});
	TweenLite.from(img2, 0.9, {delay:.2, css:{opacity:0, left: 700}, ease:Quad.easeInOut});
	TweenLite.from(img3, 0.85, {delay:.3, css:{opacity:0, left: 700}, ease:Quad.easeInOut});

	
/*	TweenLite.from($(".stack-line img:nth-of-type(1)"), 1, {css:{opacity:1, top: 800}, ease:Quad.easeInOut});
	TweenLite.from($(".stack-line img:nth-of-type(2)"), 1, {css:{opacity:1, top: -400}, ease:Quad.easeInOut});
	TweenLite.from($(".stack-line img:nth-of-type(3)"), 1, {css:{opacity:1, top: 500}, ease:Quad.easeInOut});
	TweenLite.from($(".stack-line"), 1, {css:{rotation:-10}, ease:Quad.easeInOut});*/
})(jQuery);


window.sr = ScrollReveal({ reset: true });

sr.reveal('.stack-line img:nth-of-type(1)', { duration: 1000, distance: '-200px'});
sr.reveal('.stack-line img:nth-of-type(2)', { duration: 1000, distance: '180px'});
sr.reveal('.stack-line img:nth-of-type(3)', { duration: 1000, distance: '-150px'});