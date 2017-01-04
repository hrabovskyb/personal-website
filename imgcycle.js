jQuery(function($){

	// Cycle plugin
	$('.slides').cycle({
	    fx:     'none',
	    speed:   1000,
	    timeout: 5
	}).cycle("pause");

	// Pause &amp; play on hover
	$('.slideshow-block').hover(function(){
		$(this).find('.slides').addClass('active').cycle('resume');
	}, function(){
		$(this).find('.slides').removeClass('active').cycle('pause');
	});

});