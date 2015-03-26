'use strict';

/* global define */

define(['app'], function(app){
	var factory = ['$http', function($http) {
		var url = 'data/skill.json';

		return {
			get: function(){
				return $http.get(url);
			}
		};
	}];

	app.factory('Skill', factory);

	return factory;
});