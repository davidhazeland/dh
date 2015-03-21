'use strict';

/* global define */

define(['app'], function(app){
	var factory = function($http) {
		var url = 'data/gallery.json';

		return {
			get: function(){
				return $http.get(url);
			}
		};
	};

	app.factory('Gallery', factory);

	return factory;
});