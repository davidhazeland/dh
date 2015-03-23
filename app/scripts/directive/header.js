'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/header.html',
			restrict: 'E',
			link: linkFn,
			scope: {
				tab: '=tab'
			}
		};
	};

	app.directive('headerApp', directive);

	return directive;
});