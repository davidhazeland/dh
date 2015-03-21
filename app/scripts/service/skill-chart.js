'use strict';

/* global define */

define(['app', 'chartjs'], function(app, Chart) {
	var Chartjs = Chart.noConflict();

	var SkillChart = function() {
		this.options = {
			animation: false,
			scaleLineColor: 'rgba(255,255,255,0.25)'
		};
	};

	SkillChart.prototype = {
		draw: function(element, data) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			var chart = new Chartjs(ctx).PolarArea(data, this.options);

			element.append(chart.generateLegend());
		}
	};

	app.service('SkillChart', SkillChart);

	return app;
});