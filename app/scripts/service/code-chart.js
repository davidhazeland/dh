'use strict';

/* global define */

define(['app', 'chartjs'], function(app, Chart) {
	var Chartjs = Chart.noConflict();

	var CodeChart = function() {
		this.options = {
			animation: false,
			pointLabelFontSize: 11,
			pointLabelFontColor: '#fff',
			pointLabelFontFamily: 'Open Sans',
			scaleLineColor: 'rgba(255,255,255,0.25)',
			angleLineColor: 'rgba(255,255,255,0.25)'
		};
	};

	CodeChart.prototype = {
		draw: function(element, data) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			new Chartjs(ctx).Radar(data, this.options);

			var legend = document.createElement('h3');
			legend.innerText = 'Web Front-end Development';
			element.append(legend);
		}
	};

	app.service('CodeChart', CodeChart);

	return app;
});