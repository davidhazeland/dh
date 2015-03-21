'use strict';

/* global define */

define(['app'], function(app){
	var controller = function($scope){
		$scope.sendMessage = function(){
			// e.preventDefault();
		};
	};

	app.controller('contactFormCtrl', controller);

	return controller;
});