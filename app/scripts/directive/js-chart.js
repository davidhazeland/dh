'use strict';

/* global define */

define(['app', 'service/js-chart'], function(app) {
	var directive = ['JsChart', function(JsChart) {
		var linkFn = function(scope, element) {
			scope.$watch('data', function() {
				if (scope.data) {
					JsChart.draw(element, scope.data);
				}
			});

		};

		return {
			restrict: 'E',
			link: linkFn,
			scope: {
				data: '=data'
			}
		};
	}];

	app.directive('jsChart', directive);

	return directive;
});