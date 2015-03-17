'use strict';

/* global define */

define([], function(){
	var directives = function(){
		var linkFn = function() {
			
		};

		return {
			templateUrl: 'scripts/views/base.html',
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});