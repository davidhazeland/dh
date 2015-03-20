'use strict';

/* global define */

define([], function(){
	var controller = function ($scope, $http) {
		var url = 'data/info.json';
		$http
			.get(url)
			.success(function(response){
		        $scope.info = response;
			});
    };

    return controller;
});