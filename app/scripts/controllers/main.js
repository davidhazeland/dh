'use strict';

/* global define */

define(['app', './header', './info', './workspace', './skill', './project', './contact'], 
function(app, headerCtrl, infoCtrl, workspaceCtrl, skillCtrl, projectCtrl, contactCtrl){
	app.controller('headerCtrl', headerCtrl);
	app.controller('infoCtrl', infoCtrl);
	app.controller('workspaceCtrl', workspaceCtrl);
	app.controller('skillCtrl', skillCtrl);
	app.controller('projectCtrl', projectCtrl);
	app.controller('contactCtrl', contactCtrl);
});