'use strict';

define(['chartjs'], function(Chart){
	var Chartjs = Chart.noConflict();

	var directives = function(){
		var linkFn = function(scope, element, attrs) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			var data = {
			    labels: ["Jquery", "RequireJS", "Angular", "Backbone", "EaselJS"],
			    datasets: [
			       	{
			            label: "My First dataset",
			            fillColor: "#967adc",
			            strokeColor: "#fff",
			            highlightFill: "#ac92ec",
			            highlightStroke: "rgba(220,220,220,1)",
			            data: [88, 97, 90, 92, 96]
			        }
			    ]
			};

			new Chartjs(ctx).Bar(data, {
				animation: false,
				scaleLineColor: "#fff",
				scaleFontColor: "#fff",
				scaleGridLineColor : "rgba(255,255,255,0.05)",
				scaleShowVerticalLines: false,
    			barStrokeWidth : 0

			});

			var legend = document.createElement('h3');
			legend.innerText = 'Javascript Library';
			element.append(legend);
		};

		return {
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});	