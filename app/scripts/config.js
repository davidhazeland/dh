'use strict';

/* global require */

require.config({
    baseUrl: 'scripts',
    shim: {
        angularjs: {
            exports: 'angular'
        },
        angularMock: {
            deps: ['angularjs']
        },
        owlCarousel : {
            deps: ['jquery']
        },
        templates : {
            deps: ['app']
        }
    },
    paths: {
        angularjs: '../../bower_components/angular/angular.min',
        chartjs: '../../bower_components/chartjs/Chart.min',
        jquery: '../../bower_components/jquery/dist/jquery.min',
        owlCarousel: '../../bower_components/owl-carousel/owl-carousel/owl.carousel.min',
        spec: '../../spec',
        angularMock: '../../bower_components/angular-mocks/angular-mocks'
    }
});
