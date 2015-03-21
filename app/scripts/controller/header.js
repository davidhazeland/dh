'use strict';

/* global define */

define(['app'], function(app){
	var controller = function($scope){
		$scope.isCollapsedNav = false;

		$scope.toggleNav = function(){
			this.isCollapsedNav = !this.isCollapsedNav;
		};
	};

	app.controller('headerCtrl', controller);

	return controller;
});