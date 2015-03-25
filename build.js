/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 *
 */

({
    baseUrl: '.',
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
    },
    name: "main",
    out: 'main-built.js'
})