$(document).ready(function(){
	$(document).foundation();

	//    ************************  SLIDER *******************************
	$('.raiting-slider-stars').slick({
		dots: true,
		infinite: true,
		speed: 300,
		centerMode: true,
		variableWidth: true,
		nextArrow: $('#slider-stars__next')
	});
	$('.raiting-slider-ran').slick({
		dots: true,
		infinite: true,
		speed: 300,
		centerMode: true,
		variableWidth: true,
		nextArrow: $('#slider-ran__next')
	});


	// //    ************************  TABS *******************************
	$('.tab-control').on('click', function() {
		
		var group = $(this).parent().parent().attr('data-tab-group');
		var target = $(this).attr('data-target');
		var location = $(this).parent().parent();
		console.log(location);
		
		$('.tab-control.is-active', location).removeClass('is-active');
		$(this).addClass('is-active');
		$(group).children().removeClass('is-active');
		$(group).children(target).addClass('is-active');
	});

	//    ************************  Burger-menu *******************************
    $('[data-js-burger]').click(function (e) {
        $('[data-js-burger]').toggleClass('open');

        $('[data-js-menu-desktop]').toggleClass('open');

        $('body').toggleClass('wrapper-top');
    });

	//    ************************  STICKY *******************************
	var scrollValue = $('[js-sticky]').offset().top;

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > scrollValue) {
			$('[js-sticky]').addClass('sticky-nav');
		} else {
			$('[js-sticky]').removeClass('sticky-nav');
		}
	});
});
				
