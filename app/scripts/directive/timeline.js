'use strict';

/* global define */

define(['app', 'jquery'], function(app, $) {
	var directive = function() {
		var linkFn = function(scope, element) {
			function initScroll() {
				var $timeline_block = element.find('.cd-timeline-block');

				//hide timeline blocks which are outside the viewport
				// $timeline_block.each(function() {
				// 	if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
				// 		$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
				// 	}
				// });

				//on scolling, show/animate timeline blocks when enter the viewport
				$(window).on('scroll', function() {
					$timeline_block.each(function() {
						if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-content').hasClass('is-hidden')) {
							$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
						}
					});
				});
			}

			scope.$watch('items', function(){
				if (scope.items) {
					initScroll();
				}
			});
		};

		return {
			templateUrl: 'scripts/view/timeline.html',
			restrict: 'E',
			link: linkFn,
			replace: true
		};
	};

	app.directive('timeline', directive);

	return directive;
});