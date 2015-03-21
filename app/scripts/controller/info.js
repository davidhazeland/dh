'use strict';

/* global define */

define(['app', 'factory/info'], function(app){
	var controller = ['$scope', 'Info', function ($scope, Info) {
		Info.get()
			.success(function(response){
		        $scope.info = response;
			});
    }];

    app.controller('infoCtrl', controller);

    return app;
});