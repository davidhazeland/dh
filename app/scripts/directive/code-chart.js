'use strict';

/* global define */

define(['app', 'service/code-chart'], function(app) {
	var directive = ['CodeChart', function(CodeChart) {
		var linkFn = function(scope, element) {
			scope.$watch('data', function(){
				if(scope.data) {
					CodeChart.draw(element, scope.data);
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

	app.directive('codeChart', directive);

	return directive;
});