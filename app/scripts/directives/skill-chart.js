'use strict';

/* global define */

define(['chartjs'], function(Chart){
	var Chartjs = Chart.noConflict();

	var directives = function(){
		var linkFn = function(scope, element) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			var data = [
				{
			        value: 96,
			    	color: '#8cc152',
			        highlight: '#a0d468',
			        label: 'Web'
			    },
			    {
			        value: 78,
			        color:'#da4453',
			        highlight: '#ed5565',
			        label: 'Mobile'
			    },
			    {
			        value: 70,
		          	color:'#4a89dc',
			        highlight: '#5d9cec',
			        label: 'Design'
			    },
			    {
			        value: 81,
			        color: '#f6bb42',
			        highlight: '#ffce54',
			        label: 'Business'
			    }

			];

			var chart = new Chartjs(ctx).PolarArea(data, {
				animation: false,
				scaleLineColor: 'rgba(255,255,255,0.25)'
			});

			element.append(chart.generateLegend());
		};

		return {
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});