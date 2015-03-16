define(['app', './mobile-nav', './skill-chart', './coding-chart', './js-chart'], 
function(app, mobileNav, skillChart, codingChart, jsChart){
	app.directive('mobileNav', mobileNav);
	app.directive('skillChart', skillChart);
	app.directive('codingChart', codingChart);
	app.directive('jsChart', jsChart);
});