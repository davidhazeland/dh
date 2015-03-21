'use strict';

/* global define */

define(['app', 'service/skill-chart'], function(app) {
	var directive = ['SkillChart', function(SkillChart) {
		var linkFn = function(scope, element) {
			scope.$watch('data', function() {
				if (scope.data) {
					SkillChart.draw(element, scope.data);
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

	app.directive('skillChart', directive);

	return directive;
});