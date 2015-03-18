'use strict';

/* global define */

define(['jquery', 'owlCarousel'], function($){
	var directives = function(){
		
		var linkFn = function(scope, element) {
			var owl = element.find('.owl-carousel');
			$(owl).owlCarousel({
				autoPlay: 3000, //Set AutoPlay to 3 seconds
				items: 3
			});	
		};

		return {
			templateUrl: 'scripts/views/workspace.html',
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});