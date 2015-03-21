'use strict';

/* global define */

define(['app', 'factory/gallery'], function(app){
	var controller = ['$scope', 'Gallery', function($scope, Gallery){
		Gallery
			.get()
			.success(function(response){
				$scope.items = response;
			});
	}];

	app.controller('galleryCtrl', controller);

	return controller;
});