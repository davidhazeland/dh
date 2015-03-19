'use strict';

/* global define */

define([], function(){
	var controller = function($scope, $http){
		var url = 'data/workspace.json';
		
		$http
			.get(url)
			.success(function(response){
				$scope.items = response;
			});
	};

	return controller;
});