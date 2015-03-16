'use strict';

require.config({
    shim: {
        angular: {
            exports: 'angular'
        },
        chartjs: {
        	exports: 'Chart'
        }
    },
    paths: {
        text: '../bower_components/requirejs-text/text',
        angular: '../bower_components/angular/angular',
        chartjs: '../bower_components/chartjs/chart'
    }
});

require(['angular', 'controllers/main', 'directives/main'], function(angular) {
 	angular.bootstrap(document, ['portfolio']);
});