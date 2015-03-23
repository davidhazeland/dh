'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function(scope, element) {
			element
				.find('a:contains("' + scope.tab + '")')
				.parent()
				.addClass('nav__item--current');
		};

		return {
			templateUrl: 'scripts/view/navigation.html',
			restrict: 'E',
			link: linkFn,
			scope: {
				tab: '=tab'
			}
		};
	};

	app.directive('navigation', directive);

	return directive;
});