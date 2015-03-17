define([], function(){
	var directives = function(){
		var linkFn = function(scope, element, attrs) {
			
		};

		return {
			templateUrl: 'scripts/views/navigation.html',
			restrict: 'E',
			link: linkFn
		};
	};

	return directives;
});