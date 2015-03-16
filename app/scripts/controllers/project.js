define([], function(){
	var controller = function($scope, $http){
		var url = 'data/projects.json';
		$http
			.get(url)
			.success(function(response){
				$scope.projects = response;
			});
	};

	return controller;
});