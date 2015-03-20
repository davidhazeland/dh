'use strict';

/* global define */

define(['jquery', 'owlCarousel'], function($){
	var directives = function(){
		
		var linkFn = function(scope, element, attrs) {
			function initCarousel() {
				var owl = element.find('.owl-carousel');
				$(owl).owlCarousel({
					autoPlay: 3000, //Set AutoPlay to 3 seconds
					items: 3
				});	
			}

			scope.$watch("items", function(value) {
				if (scope.items && scope.items.length > 0) {
					initCarousel();
				}
    		});
		};

		return {
			restrict: 'E',
			templateUrl: 'scripts/views/workspace.html',
			scope: {
				items: '=items'
			},
			link: linkFn
		};
	};

	return directives;
});