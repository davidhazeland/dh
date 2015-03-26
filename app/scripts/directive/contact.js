'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/contact.html',
			restrict: 'E',
			link: linkFn,
			replace: true
		};
	};

	app.directive('contact', directive);

	return directive;
});