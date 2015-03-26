'use strict';

/* global require */

require(['config'], function() {
	document.body.classList.add('loading'); 
	require(['angularjs', 'filter/index', 'controller/index', 'directive/index'], function(angular, $) {
		document.body.classList.remove('loading');
		angular.bootstrap(document, ['portfolio']);
	});
});