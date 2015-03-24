'use strict';

/* global define */

define(['app'], function(app){
	var filter = function() {
		return function(input){
			var out = input.replace(/http[s]?:\/\//, '');
			return out;
		};
	};

	app.filter('link', filter);

	return filter;
});