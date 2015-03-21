'use strict';

/* global require */

require(['config'], function(){
    require(['angular', 'controller/index', 'directive/index'], function(angular) {
        angular.bootstrap(document, ['portfolio']);
    });
});
