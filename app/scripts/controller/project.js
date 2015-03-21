'use strict';

/* global define */

define(['app', 'factory/project'], function(app){
	var controller = ['$scope', 'Project', function($scope, Project){
		Project
			.get()
			.success(function(response){
				$scope.projects = response;
			});
	}];

	app.controller('ProjectCtrl', controller);

	return controller;
});