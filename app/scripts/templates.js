angular.module("portfolio").run(["$templateCache", function($templateCache) {$templateCache.put("scripts/view/about.html","<section id=\"about\">\n	<h1 class=\"heading heading--about is-expanded-desktop\">ABOUT</h1>\n	<div class=\"profile container\">\n		<p class=\"profile--item\"><span class=\"location-icon\"></span>Ho Chi Minh, Viet Nam</p>\n		<p class=\"profile--item\"><span class=\"college-icon\"></span>Hanoi University of Science and Technology</p>\n		<p class=\"profile--item\"><span class=\"heart-icon\"></span>Engaged</p>\n		<p class=\"profile--item\"><span class=\"birthday-icon\"></span>Jul 13, 1993</p>\n	</div>\n</section>");
$templateCache.put("scripts/view/avatar.html","<section id=\"avatar\" ng-controller=\"InfoCtrl\">\n	<div class=\"container\">\n		<span style=\"background-image: url(\'{{ info.avatar }}\')\" class=\"ava\"></span>\n	    <p class=\"name\">{{ info.name }}</p>\n	    <p class=\"job\">{{ info.job }}</p>\n	</div>\n</section>");
$templateCache.put("scripts/view/carousel.html","<ul id=\"gallery--carousel\" class=\"owl-carousel\">\n	<li class=\"owl-carousel--item\" ng-repeat=\"item in items\">\n		<img class=\"lazyOwl\">\n	</li>\n</ul>");
$templateCache.put("scripts/view/contact.html","<section id=\"contact\" ng-controller=\"ContactFormCtrl\">\n  	<div class=\"container\">\n  		<h2 class=\"heading heading--contact\">CONTACT</h2>\n	    <p class=\"sub-heading sub-heading--contact\">Write in a few words whatever you want to tell me</p>\n	    <form class=\"contact-form\" method=\"POST\" action=\"http://formspree.io/davidhazeland@gmail.com\">\n	      <input class=\"contact-form__textbox\" type=\"text\" name=\"name\" placeholder=\"Name\"/>\n	      <input class=\"contact-form__textbox\" type=\"email\" name=\"email\" placeholder=\"Email\"/>\n	      <textarea class=\"contact-form__textarea\" name=\"message\" placeholder=\"Message\"></textarea>\n	      <button class=\"contact-form__button\">SEND</button>\n        <input type=\"hidden\" name=\"_next\" value=\"//formspree.io/thanks.html\" />\n        <input type=\"hidden\" name=\"_subject\" value=\"New submission!\" />\n        <input type=\"text\" name=\"_gotcha\" style=\"display:none\"/>\n	    </form>\n  	</div>\n</section>");
$templateCache.put("scripts/view/footer.html","<footer ng-controller=\"InfoCtrl\">\n  <div class=\"container\">\n    <ul class=\"social\">\n      <li class=\"social__item\">\n        <a href=\"{{info.facebook}}\" class=\"social__item--facebook\"></a>\n      </li>\n      <li class=\"social__item\">\n        <a href=\"{{info.twitter}}\" class=\"social__item--twitter\"></a>\n      </li>\n      <li class=\"social__item\">\n        <a href=\"{{info.linkedin}}\" class=\"social__item--linkedin\"></a>\n      </li>\n    </ul>\n    <p>Copyright 2015 by <span>David Hazeland<span></p>\n  </div>\n</footer>");
$templateCache.put("scripts/view/gallery.html","<section id=\"gallery\" ng-controller=\"GalleryCtrl\" class=\"is-expanded-desktop\">\n	<div class=\"container\">\n	  	<h2 class=\"heading heading--project\">GALLERY</h2>\n	    <carousel items=\"items\"></carousel>\n	    <q>The quiter you become, the more you are able to hear.</q>\n	</div>\n</section>	");
$templateCache.put("scripts/view/header.html","<header ng-controller=\"HeaderCtrl\">\n  <div class=\"container\">\n    <a href=\"/\" id=\"logo\" class=\"logo\"></a>\n    <span ng-click=\"toggleNav()\" class=\"list-icon right is-collapsed-desktop\"></span>\n    <navigation tab=\"tab\" class=\"is-expanded-desktop desktop-nav\"></navigation>\n  </div>\n  <navigation tab=\"tab\" class=\"is-collapsed-desktop mobile-nav\" ng-show=\"isCollapsedNav\"></navigation>\n</header>");
$templateCache.put("scripts/view/info.html","<section id=\"info\" ng-controller=\"InfoCtrl\">\n	<h1 class=\"heading heading--about is-expanded-desktop\">INFOMATION</h1>\n	<div class=\"container info\">\n		<p class=\"info__item\">\n			<a href=\"mailto:{{info.email}}\" title=\"Email Now!\" class=\"email-icon\"></a>\n			<span>{{info.email}}</span>\n		</p>\n		<p class=\"info__item\">\n			<a href=\"{{info.facebook}}\" class=\"facebook-icon\"></a>\n			<span>{{info.facebook | link}}</span>\n		</p>\n		<p class=\"info__item\">\n			<a href=\"{{info.twitter}}\" class=\"twitter-icon\"></a>\n			<span>{{info.twitter | link}}</span>\n		</p>\n		<p class=\"info__item\">\n			<a href=\"{{info.linkedin}}\" class=\"linkedin-icon\"></a>\n			<span>{{info.linkedin | link}}</span>\n		</p>\n		<p class=\"info__item\">\n			<a href=\"tel:{{info.mobile}}\" title=\"Call Me!\" class=\"mobile-icon\"></a>\n			<span>{{info.mobile}}</span>\n		</p>\n	</div>\n</section>");
$templateCache.put("scripts/view/navigation.html","<ul class=\"nav\">\n	<li class=\"nav__item\"><a href=\"/\">Home</a></li>\n	<li class=\"nav__item\"><a href=\"http://blog.davidhazeland.com/\">Blog</a></li>\n	<li class=\"nav__item\"><a href=\"/about.html\">About</a></li>\n	<li class=\"nav__item\"><a href=\"/contact.html\">Contact</a></li>\n</ul>\n");
$templateCache.put("scripts/view/project.html","<section id=\"project\" ng-controller=\"ProjectCtrl\">\n    <div class=\"container\">\n      <h2 class=\"heading heading--project\">PROJECT</h2>\n      <p class=\"sub-heading sub-heading--project\">A bunch of things that I\'ve done so far</p>\n      <ul class=\"showcase\">\n        <li class=\"showcase__item\" ng-repeat=\"project in projects\">\n          <a href=\"{{project.link}}\"><img class=\"showcase__item\" ng-src=\"{{project.image}}\"></a>\n        </li>\n      </ul>\n    </div>\n</section>");
$templateCache.put("scripts/view/skill.html","<section id=\"skill\" ng-controller=\"SkillCtrl\">\n    <div class=\"container\">\n      <h2 class=\"heading heading--skill\">SKILL</h2>\n      <p class=\"sub-heading sub-heading--skill\">Some stuff I\'m researching and working</p>\n      <div class=\"container\">\n        <skill-chart class=\"chart\" data=\"data.skill\"></skill-chart>\n        <code-chart class=\"chart\" data=\"data.code\"></code-chart>\n        <js-chart class=\"chart\" data=\"data.js\"></js-chart>\n      </div>\n    </div>\n</section>  ");
$templateCache.put("scripts/view/timeline.html","<section id=\"timeline\" ng-controller=\"TimelineCtrl\">\n  <div class=\"container cd-container\">\n    <div class=\"cd-timeline-block\" ng-repeat=\"item in items\">\n      <div class=\"cd-timeline-img cd-{{item.type | name}} is-hidden\">\n        <img ng-src=\"images/timeline/cd-icon-{{item.type | name}}.svg\" alt=\"{{item.type}}\">\n      </div> <!-- cd-timeline-img -->\n\n      <div class=\"cd-timeline-content is-hidden\">\n        <h2>{{item.title}}</h2>\n        <p>{{item.description}}</p>\n        <img class=\"cd-img\" ng-src=\"{{item.image}}\">\n        <span class=\"cd-date\">{{item.date}}</span>\n      </div> <!-- cd-timeline-content -->\n    </div> <!-- cd-timeline-block -->\n  </div> <!-- cd-timeline -->\n</section>\n");}]);