
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
    $('[js-burger]').click(function (e) {
        // var currentHeight = window.scrollY;

        $('[js-burger]').toggleClass('open');
        // $(this).toggleClass('open');
        // $('.ad-top').toggleClass('open');
        $('[js-menuDesktop]').toggleClass('open');
        // $('.vh').toggleClass('open');
        // $('body').toggleClass('is-nav-open');

        // $('.main-nav').toggleClass('main-nav--open');
        // $('.nav__background').toggleClass('nav__background--open');
        $('body').toggleClass('wrapper-top');



        // if($('.section-intro__navigation').innerWidth() < 768) {

        //     $('.main-nav__list li a').each(function () {
        //         $(this).click(function () {
        //             // $('#nav-icon3').removeClass('open');
        //             $('.main-nav').removeClass('main-nav--open');
        //             $('body').removeClass('wrapper-top');
        //             // $('body').removeClass('is-nav-open');
        //         });
        //     });
        // }

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



	// var sticky = new Sticky('[data-sticky-nav]');
	// sticky.update();
});
				
