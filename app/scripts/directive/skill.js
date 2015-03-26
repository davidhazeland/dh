'use strict';

/* global define */

define(['app'], function(app){
	var directive = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/view/skill.html',
			restrict: 'E',
			link: linkFn,
			replace: true
		};
	};

	app.directive('skill', directive);

	return directive;
});