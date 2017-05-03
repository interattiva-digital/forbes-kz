$(document).ready(function(){
	$(document).foundation();

	// SEARCH BUTTON

	$('[data-search-button]').on('click', function(e) {
		e.preventDefault();

		var $current = $(e.currentTarget);

		var $target = $($current.attr('data-search-button'));

		if($target.val() !== '') {
			$current.submit();
			console.log('hello');
		} else {
			$target.addClass('active');
			$target.focus();
		}
	});

	$('#nav-search-form').on('submit');

	//    ************************ SLIDER *******************************
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


	// //    ************************ TABS *******************************
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

        // $('body').toggleClass('wrapper-top');
    });

	//    ************************  STICKY *******************************
	var $navWrapper = $('.nav-wrapper[data-js-sticky]');
	var scrollValue = $navWrapper.offset().top;
	console.log(scrollValue);
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > scrollValue) {
			$navWrapper.addClass('sticky-nav');
		} else {
			$navWrapper.removeClass('sticky-nav');
		}
	});
});
				
