angular.module('starter.controllers', [])

.controller('GroupAdd', function($scope) {

	$scope.random = "kadeem";

	
})

.controller('Groups', function($scope,$location) {

	$scope.gotoURL = function(path){

		console.log("testinggggg");
		//$urlRouterProvider.otherwise(path);
		$location.path(path);
	};
});