angular.module("portfolio").run(["$templateCache", function($templateCache) {$templateCache.put("scripts/view/about.html","<section id=\"about\">\r\n	<h1 class=\"heading heading--about is-expanded-desktop\">ABOUT</h1>\r\n	<div class=\"profile container\">\r\n		<p class=\"profile--item\"><span class=\"location-icon\"></span>Ha Noi, Viet Nam</p>\r\n		<p class=\"profile--item\"><span class=\"college-icon\"></span>Hanoi University of Science and Technology</p>\r\n		<p class=\"profile--item\"><span class=\"heart-icon\"></span>Engaged</p>\r\n		<p class=\"profile--item\"><span class=\"birthday-icon\"></span>Jul 13, 1993</p>\r\n	</div>\r\n</section>");
$templateCache.put("scripts/view/avatar.html","<section id=\"avatar\" ng-controller=\"InfoCtrl\">\r\n	<div class=\"container\">\r\n		<img ng-src=\"{{ info.avatar }}\" class=\"ava\">\r\n	    <p class=\"name\">{{ info.name }}</p>\r\n	    <p class=\"job\">{{ info.job }}</p>\r\n	</div>\r\n</section>");
$templateCache.put("scripts/view/carousel.html","<ul id=\"gallery--carousel\" class=\"owl-carousel\">\r\n	<li class=\"owl-carousel--item\" ng-repeat=\"item in items\">\r\n		<img class=\"lazyOwl\">\r\n	</li>\r\n</ul>");
$templateCache.put("scripts/view/contact.html","<section id=\"contact\" ng-controller=\"ContactFormCtrl\">\r\n  	<div class=\"container\">\r\n  		<h2 class=\"heading heading--contact\">CONTACT</h2>\r\n	    <p class=\"sub-heading sub-heading--contact\">Write in a few words whatever you want to tell me</p>\r\n	    <form class=\"contact-form\" method=\"POST\" action=\"http://formspree.io/davidhazeland@gmail.com\">\r\n	      <input class=\"contact-form__textbox\" type=\"text\" name=\"name\" placeholder=\"Name\"/>\r\n	      <input class=\"contact-form__textbox\" type=\"email\" name=\"email\" placeholder=\"Email\"/>\r\n	      <textarea class=\"contact-form__textarea\" name=\"message\" placeholder=\"Message\"></textarea>\r\n	      <button class=\"contact-form__button\">SEND</button>\r\n        <input type=\"hidden\" name=\"_next\" value=\"//formspree.io//thanks.html\" />\r\n        <input type=\"hidden\" name=\"_subject\" value=\"New submission!\" />\r\n        <input type=\"text\" name=\"_gotcha\" style=\"display:none\"/>\r\n	    </form>\r\n  	</div>\r\n</section>");
$templateCache.put("scripts/view/footer.html","<footer ng-controller=\"InfoCtrl\">\r\n  <div class=\"container\">\r\n    <ul class=\"social\">\r\n      <li class=\"social__item\">\r\n        <a href=\"{{info.facebook}}\" class=\"social__item--facebook\"></a>\r\n      </li>\r\n      <li class=\"social__item\">\r\n        <a href=\"{{info.twitter}}\" class=\"social__item--twitter\"></a>\r\n      </li>\r\n      <li class=\"social__item\">\r\n        <a href=\"{{info.linkedin}}\" class=\"social__item--linkedin\"></a>\r\n      </li>\r\n    </ul>\r\n    <p>Copyright 2015 by <span>David Hazeland<span></p>\r\n  </div>\r\n</footer>");
$templateCache.put("scripts/view/gallery.html","<section id=\"gallery\" ng-controller=\"GalleryCtrl\" class=\"is-expanded-desktop\">\r\n	<div class=\"container\">\r\n	  	<h2 class=\"heading heading--project\">GALLERY</h2>\r\n	    <carousel items=\"items\"></carousel>\r\n	    <q>The quiter you become, the more you are able to hear</q>\r\n	</div>\r\n</section>	");
$templateCache.put("scripts/view/header.html","<header ng-controller=\"HeaderCtrl\">\r\n  <div class=\"container\">\r\n    <a href=\"/\" id=\"logo\" class=\"logo\"></a>\r\n    <span ng-click=\"toggleNav()\" class=\"list-icon right is-collapsed-desktop\"></span>\r\n    <navigation tab=\"tab\" class=\"is-expanded-desktop desktop-nav\"></navigation>\r\n  </div>\r\n  <navigation tab=\"tab\" class=\"is-collapsed-desktop mobile-nav\" ng-show=\"isCollapsedNav\"></navigation>\r\n</header>");
$templateCache.put("scripts/view/info.html","<section id=\"info\" ng-controller=\"InfoCtrl\">\r\n	<h1 class=\"heading heading--about is-expanded-desktop\">INFOMATION</h1>\r\n	<div class=\"container info\">\r\n		<p class=\"info__item\">\r\n			<a href=\"mailto:{{info.email}}\" title=\"Email Now!\" class=\"email-icon\"></a>\r\n			<span>{{info.email}}</span>\r\n		</p>\r\n		<p class=\"info__item\">\r\n			<a href=\"{{info.facebook}}\" class=\"facebook-icon\"></a>\r\n			<span>{{info.facebook | link}}</span>\r\n		</p>\r\n		<p class=\"info__item\">\r\n			<a href=\"{{info.twitter}}\" class=\"twitter-icon\"></a>\r\n			<span>{{info.twitter | link}}</span>\r\n		</p>\r\n		<p class=\"info__item\">\r\n			<a href=\"{{info.linkedin}}\" class=\"linkedin-icon\"></a>\r\n			<span>{{info.linkedin | link}}</span>\r\n		</p>\r\n		<p class=\"info__item\">\r\n			<a href=\"tel:{{info.mobile}}\" title=\"Call Me!\" class=\"mobile-icon\"></a>\r\n			<span>{{info.mobile}}</span>\r\n		</p>\r\n	</div>\r\n</section>");
$templateCache.put("scripts/view/navigation.html","<ul class=\"nav\">\r\n	<li class=\"nav__item\"><a href=\"/\">Home</a></li>\r\n	<li class=\"nav__item\"><a href=\"http://blog.davidhazeland.com/\">Blog</a></li>\r\n	<li class=\"nav__item\"><a href=\"/about.html\">About</a></li>\r\n	<li class=\"nav__item\"><a href=\"/contact.html\">Contact</a></li>\r\n</ul>\r\n");
$templateCache.put("scripts/view/project.html","<section id=\"project\" ng-controller=\"ProjectCtrl\">\r\n    <div class=\"container\">\r\n      <h2 class=\"heading heading--project\">PROJECT</h2>\r\n      <p class=\"sub-heading sub-heading--project\">A bunch of things that I\'ve done so far</p>\r\n      <ul class=\"showcase\">\r\n        <li class=\"showcase__item\" ng-repeat=\"project in projects\">\r\n          <a href=\"{{project.link}}\"><img class=\"showcase__item\" ng-src=\"{{project.image}}\"></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</section>");
$templateCache.put("scripts/view/skill.html","<section id=\"skill\" ng-controller=\"SkillCtrl\">\r\n    <div class=\"container\">\r\n      <h2 class=\"heading heading--skill\">SKILL</h2>\r\n      <p class=\"sub-heading sub-heading--skill\">Some stuff I\'m researching and working</p>\r\n      <div class=\"container\">\r\n        <skill-chart class=\"chart\" data=\"data.skill\"></skill-chart>\r\n        <code-chart class=\"chart\" data=\"data.code\"></code-chart>\r\n        <js-chart class=\"chart\" data=\"data.js\"></js-chart>\r\n      </div>\r\n    </div>\r\n</section>  ");
$templateCache.put("scripts/view/timeline.html","<section id=\"timeline\" ng-controller=\"TimelineCtrl\">\r\n  <div class=\"container cd-container\">\r\n    <div class=\"cd-timeline-block\" ng-repeat=\"item in items\">\r\n      <div class=\"cd-timeline-img cd-{{item.type | name}} is-hidden\">\r\n        <img ng-src=\"images/timeline/cd-icon-{{item.type | name}}.svg\" alt=\"{{item.type}}\">\r\n      </div> <!-- cd-timeline-img -->\r\n\r\n      <div class=\"cd-timeline-content is-hidden\">\r\n        <h2>{{item.title}}</h2>\r\n        <p>{{item.description}}</p>\r\n        <img class=\"cd-img\" ng-src=\"{{item.image}}\">\r\n        <span class=\"cd-date\">{{item.date}}</span>\r\n      </div> <!-- cd-timeline-content -->\r\n    </div> <!-- cd-timeline-block -->\r\n  </div> <!-- cd-timeline -->\r\n</section>\r\n");}]);