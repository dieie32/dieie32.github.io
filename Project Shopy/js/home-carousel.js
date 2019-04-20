let getCarousel = $('.carousel');
$("body").keydown(function(e) {
	if (e.which===37) 
		getCarousel.carousel('prev');

	if (e.which===39)
		getCarousel.carousel('next');    
});

getCarousel.carousel({
    interval: 7000
});
