define(['app', './navigation', './skill-chart', './coding-chart', './js-chart'], 
function(app, navigation, skillChart, codingChart, jsChart){
	app.directive('navigation', navigation);
	app.directive('skillChart', skillChart);
	app.directive('codingChart', codingChart);
	app.directive('jsChart', jsChart);
});