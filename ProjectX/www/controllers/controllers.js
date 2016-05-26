angular.module('starter.controllers', [])


 //Daria's controllers
angular.module('starter.controllers', ["ionic",'firebase'])

.controller('ChatsCtrl', ['$scope', '$firebaseArray', '$rootScope',
      function($scope, $firebaseArray, $rootScope) {

                var ref = new Firebase('https://projectxu.firebaseio.com/chats') //USE OUR Firebase FOR CHAT!!
                $scope.sender_id = 1;
                $scope.group_id = 1;
                var sync = $firebaseArray(ref);
                sync.$loaded(function (data) {
                    $scope.chats = data;
                });




                $scope.sendChat = function(chat){

                  //if($rootScope.authData){
                  /*  $scope.chats.$add({
                      user: $rootScope.authData.facebook.username, //SWITCH TO FACEBOOK!!!
                      message: chat.message,
                      imgURL: $rootScope.authData.facebook.cachedUserProfile.profile_img_url
                    });
                  */

                  $scope.chats.$add({
                      user_id: $scope.sender_id, //SWITCH TO FACEBOOK!!!
                      message: chat.message, 
                      group_id: $scope.group_id, 
                      timestamp: new Date().getTime()
                    });
                    chat.message ="";
                  //}

                }


}])


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