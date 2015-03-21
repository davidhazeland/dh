'use strict';

require.config({
    shim: {
        angular: {
            exports: 'angular'
        },
        chartjs: {
        	exports: 'Chart'
        },
        owlCarousel : {
            exports: 'owlCarousel',
            deps: ['jquery']
        }
    },
    paths: {
        text: '../bower_components/requirejs-text/text',
        angular: '../bower_components/angular/angular',
        chartjs: '../bower_components/chartjs/chart',
        jquery: '../bower_components/jquery/dist/jquery.min',
        owlCarousel: '../bower_components/owl-carousel/owl-carousel/owl.carousel'
    }
});

require(['angular', 'controller/index', 'directive/index'], function(angular) {
 	angular.bootstrap(document, ['portfolio']);
});