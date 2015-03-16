define(['chartjs'], function(Chart){
	var Chartjs = Chart.noConflict();

	var directives = function(){
		var linkFn = function(scope, element, attrs) {
			var canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');

			element.append(canvas);

			var data = {
			    labels: ["HTML", "CSS", "Javascript", "Testing", "Git"],
			    datasets: [
			        {
			            label: "My Second dataset",
			            fillColor: "rgba(160,212,104,0.2)",
			            strokeColor: "#a0d468",
			            pointColor: "#8cc152",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(151,187,205,1)",
			            data: [88, 84, 97, 80, 84]
			        }
			    ]
			};

			new Chartjs(ctx).Radar(data, {
				animation: false,
				pointLabelFontSize: 11,
				pointLabelFontColor: "#fff",
				pointLabelFontFamily: "Open Sans",
				scaleLineColor: "rgba(255,255,255,0.25)",
				angleLineColor : "rgba(255,255,255,0.25)"
			});

			var legend = document.createElement('h3');
			legend.innerText = 'Web Front-end Development';
			element.append(legend);
		};

		return {
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});