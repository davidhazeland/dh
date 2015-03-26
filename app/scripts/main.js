'use strict';

/* global require */

require(['angularjs', 'templates', 'filter/index', 'controller/index', 'directive/index'], function(angular) {
	document.body.classList.add('loaded');
	angular.bootstrap(document, ['portfolio']);
});
