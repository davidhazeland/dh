'use strict';

/* global define */

define(['app', 'factory/timeline'], function(app){
	var controller = ['$scope', 'Timeline', function($scope, Timeline){
		Timeline
			.get()
			.success(function(response){
				$scope.items = response;
			});
	}];

	app.controller('TimelineCtrl', controller);

	return controller;
});