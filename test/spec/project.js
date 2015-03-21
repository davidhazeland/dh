'use strict';

/* global define */

define(['angularMock', 'controller/project'], function() {
	describe('Project', function() {
		var scope,
			controller;

		var data = [
			{
				name: "doko"
			}
		];

		beforeEach(module('portfolio'));

		beforeEach(inject(['Project', '$controller', function(Project, $controller) {
			spyOn(Project, 'get').and.callFake(function() {
				return {
					success: function(callback) {
						callback(data);
					}
				}
			});

			scope = {};
			controller = $controller('ProjectCtrl', {
				$scope: scope
			});
		}]));

		it('Projects in scope should be right data', function() {
			expect(scope.projects).toEqual(data);
		});
	});
});