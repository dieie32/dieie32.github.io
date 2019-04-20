$(document).ready(function() {
	function include(src) {
		let getScript = document.createElement('script');
		getScript.setAttribute("src", src);
		document.getElementsByTagName('body')[0].appendChild(getScript);
	}

	include("./js/home-carousel.js");
	include("./js/home-adv.js");
});