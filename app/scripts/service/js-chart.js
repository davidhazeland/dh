'use strict';

/* global define */

define(['app', 'chartjs'], function(app, Chart) {
	var Chartjs = Chart.noConflict();

	var JsChart = function() {
		this.options = {
			animation: false,
			scaleLineColor: '#fff',
			scaleFontColor: '#fff',
			scaleGridLineColor: 'rgba(255,255,255,0.05)',
			scaleShowVerticalLines: false,
			barStrokeWidth: 0

		};
	};

	JsChart.prototype = {
		draw: function(element, data) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			new Chartjs(ctx).Bar(data, this.options);

			var legend = document.createElement('h3');
			legend.innerText = 'Javascript Library';
			element.append(legend);
		}
	};

	app.service('JsChart', JsChart);

	return app;
});