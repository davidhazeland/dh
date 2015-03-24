'use strict';

/* global define */

define(['app'], function(app){
	var filter = function() {
		return function(input){
			var out = input.replace(' ', '-');
			out = out.toLowerCase();
			return out;
		};
	};

	app.filter('name', filter);

	return filter;
});