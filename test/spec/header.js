'use strict';

/* global define */

define(['angularMock', 'controller/header'], function() {
	describe('Header', function() {
		var scope,
			controller;

		beforeEach(module('portfolio'));

		beforeEach(inject(function(_$controller_) {
			scope = {};
			controller = _$controller_('HeaderCtrl', {
				$scope: scope
			});
		}));

		it('Navigation should be collapsed when init', function() {
			expect(scope.isCollapsedNav).toEqual(false);
		});

		it('Navigation should be expanded when toggleNav() call', function() {
			scope.toggleNav();
			expect(scope.isCollapsedNav).toEqual(true);
		});
	});
});