'use strict';

/* global require */

require(['../scripts/config'], function(){
	require(['spec/header', 'spec/info', 'spec/gallery', 'spec/skill', 'spec/project'], 
	function() {
	    // Run all the loaded test specs.
	    jasmine.getEnv().execute();
	});
});
