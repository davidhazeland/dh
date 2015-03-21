'use strict';

/* global define */

define(['angularMock', 'controller/gallery'], function() {
	describe('Gallery', function() {
		var scope,
			controller;

		var data = [{
			image: 'images/gallery/1.jpg'
		}];

		beforeEach(module('portfolio'));

		beforeEach(inject(['Gallery', '$controller', function(Gallery, $controller) {
			spyOn(Gallery, 'get').and.callFake(function() {
				return {
					success: function(callback) {
						callback(data);
					}
				}
			});

			scope = {};
			controller = $controller('GalleryCtrl', {
				$scope: scope
			});
		}]));

		it('Items in scope should be right data', function() {
			expect(scope.items).toEqual(data);
		});
	});
});