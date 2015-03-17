'use strict';

/* global define */

define([], function(){
	var controller = function($scope){
		$scope.sendMessage = function(e){
			e.preventDefault();
		};
	};

	return controller;
});