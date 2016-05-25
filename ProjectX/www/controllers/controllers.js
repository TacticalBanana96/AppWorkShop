angular.module('starter.controllers', [])


 //Daria's controllers


 //Ryvon's controllers

 
 //Renaco's controllers


 //Kadeem's controllers
.controller('Group', function($scope, $stateParams) {

	$scope.groupData = "Software Engineering";
	$scope.randomVAr = $stateParams.group_id;
	console.log($scope.randomVAr);

})

//Controller for adding group
.controller('GroupAdd', function($scope) {

	$scope.random = "kadeem"; //For testing purposes

})

//Controller for groups 
.controller('Groups', function($scope,$location,Groups) {

	$scope.groups = Groups.all();
	console.log($scope.groups);

	$scope.gotoURL = function(path){
		$location.path(path);
	};
});