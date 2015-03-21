'use strict';

/* global define */

define(['app', 'factory/skill'], function(app){
	var controller = ['$scope', 'Skill', function($scope, Skill){
		Skill
			.get()
			.success(function(response){
				$scope.data = response;
			});
	}];

	app.controller('SkillCtrl', controller);

	return controller;
});