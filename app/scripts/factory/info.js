'use strict';

/* global define */

define(['app'], function(app){
	var factory = ['$http', function($http) {
		var url = 'data/info.json';

		return {
			get: function(){
				return $http.get(url);
			}
		};
	}];

	app.factory('Info', factory);

	return factory;
});