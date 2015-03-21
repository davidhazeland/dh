'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/navigation.html',
			restrict: 'E',
			link: linkFn
		};
	};

	app.directive('navigation', directive);

	return directive;
});