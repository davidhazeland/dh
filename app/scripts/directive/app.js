'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/base.html',
			restrict: 'E',
			link: linkFn
		};
	};

	app.directive('app', directive);

	return directive;
});