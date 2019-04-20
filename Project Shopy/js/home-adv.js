let advWidthContainer = $('.adv-width')[0],
	advWidth 		  = $('.adv').width();

	advWidthContainer.innerHTML = advWidth;

window.onresize = function() {
	advWidth 					= $('.adv').width();
	advWidthContainer.innerHTML = advWidth;
};