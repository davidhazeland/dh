'use strict';

/* global define */

define([], function(){
	var controller = function($scope){
		$scope.isCollapsedNav = false;

		$scope.toggleNav = function(){
			this.isCollapsedNav = !this.isCollapsedNav;
		};
	};

	return controller;
});