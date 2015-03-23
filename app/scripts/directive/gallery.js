'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/gallery.html',
			restrict: 'E',
			link: linkFn,
			replace: true
		};
	};

	app.directive('gallery', directive);

	return directive;
});