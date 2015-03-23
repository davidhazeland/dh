'use strict';

/* global define */

define(['app'], function(app){
	var factory = function($http) {
		var url = 'data/timeline.json';

		return {
			get: function(){
				return $http.get(url);
			}
		};
	};

	app.factory('Timeline', factory);

	return factory;
});