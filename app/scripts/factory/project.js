'use strict';

/* global define */

define(['app'], function(app){
	var factory = ['$http', function($http) {
		var url = 'data/projects.json';

		return {
			get: function(){
				return $http.get(url);
			}
		};
	}];

	app.factory('Project', factory);

	return factory;
});