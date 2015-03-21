'use strict';

/* global define */

define(['angularMock', 'controller/info'], function() {
	describe('Info', function() {
		var scope,
			controller;

		var data = {
			name: 'David Hazeland'
		};

		beforeEach(module('portfolio'));

		beforeEach(inject(['Info', '$controller', function(Info, $controller) {
			spyOn(Info, 'get').and.callFake(function() {
				return {
					success: function(callback) {
						callback(data);
					}
				}
			});

			scope = {};
			controller = $controller('InfoCtrl', {
				$scope: scope
			});
		}]));

		it('Info in scope should be right data', function() {
			expect(scope.info).toEqual(data);
		});
	});
});