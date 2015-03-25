'use strict';

/* global require */

require(['config'], function(){
   require(['angularjs', 'filter/index', 'controller/index', 'directive/index'], function(angular) {
        angular.bootstrap(document, ['portfolio']);
    });  
});
