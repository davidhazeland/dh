'use strict';

/* global require */


require.config({
    baseUrl: 'scripts',
    shim: {
        angular: {
            exports: 'angular'
        },
        angularMock: {
            deps: ['angular']
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
        owlCarousel: '../bower_components/owl-carousel/owl-carousel/owl.carousel',
        spec: '../../spec',
        angularMock: '../bower_components/angular-mocks/angular-mocks'
    }
});
