'use strict';

/* global define */

define(['app', './base', './navigation', './skill-chart', './coding-chart', './js-chart'], 
function(app, base, navigation, skillChart, codingChart, jsChart){
	app.directive('app', base);
	app.directive('navigation', navigation);
	app.directive('skillChart', skillChart);
	app.directive('codingChart', codingChart);
	app.directive('jsChart', jsChart);
});