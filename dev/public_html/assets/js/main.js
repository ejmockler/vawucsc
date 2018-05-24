/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});


})(jQuery);
