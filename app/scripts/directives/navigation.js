'use strict';

/* global define */

define([], function(){
	var directives = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/views/navigation.html',
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});