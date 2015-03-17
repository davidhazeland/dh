'use strict';

/* global define */

define(['app', './header', './info', './skill', './project', './contact'], 
function(app, headerCtrl, infoCtrl, skillCtrl, projectCtrl, contactCtrl){
	app.controller('headerCtrl', headerCtrl);
	app.controller('infoCtrl', infoCtrl);
	app.controller('skillCtrl', skillCtrl);
	app.controller('projectCtrl', projectCtrl);
	app.controller('contactCtrl', contactCtrl);
});