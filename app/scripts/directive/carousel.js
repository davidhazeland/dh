'use strict';

/* global define */

define(['app', 'jquery', 'owlCarousel'], function(app, $){
	var directive = function(){
		
		var linkFn = function(scope, element) {
			function initCarousel() {
				var items = scope.items,
					owl = $(element).find('.owl-carousel'),
					lazyOwl = owl.find('.lazyOwl');
				for (var i = 0; i < lazyOwl.length; i++) {
					$(lazyOwl[i]).attr('data-src', items[i].image);
				}

				$(owl).owlCarousel({
					autoPlay: 3000, //Set AutoPlay to 3 seconds
					items: 3,
					lazyLoad : true
				});	
			}

			scope.$watch('items', function() {
				if (scope.items && scope.items.length > 0) {
					initCarousel();
				}
    		});
		};

		return {
			restrict: 'E',
			templateUrl: 'scripts/view/carousel.html',
			scope: {
				items: '=items'
			},
			link: linkFn
		};
	};

	app.directive('carousel', directive);

	return directive;
});