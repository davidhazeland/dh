'use strict';

/* global define */

define(['angularMock', 'controller/skill'], function() {
	describe('Skill', function() {
		var scope,
			controller;

		var data = {
			skill: {
				data: [1, 2, 3, 4]
			}
		};

		beforeEach(module('portfolio'));

		beforeEach(inject(['Skill', '$controller', function(Skill, $controller) {
			spyOn(Skill, 'get').and.callFake(function() {
				return {
					success: function(callback) {
						callback(data);
					}
				}
			});

			scope = {};
			controller = $controller('SkillCtrl', {
				$scope: scope
			});
		}]));

		it('Data in scope should be right data', function() {
			expect(scope.data).toEqual(data);
		});
	});
});