 //Daria's controllers
angular.module('starter.controllers', ["ionic",'firebase'])

.controller('ChatsCtrl', ['$scope', '$stateParams', '$firebaseArray', '$rootScope', '$ionicHistory', '$state',
      function($scope, $stateParams, $firebaseArray, $rootScope, $ionicHistory, $state) {
                $rootScope.notifyIonicGoingBack = function() {
                   $state.go('groups');
                }
                $scope.$myBack = function() {
                    $ionicHistory.goBack();
                    $rootScope.notifyIonicGoingBack();
                  };
                console.log('state ' + $stateParams);
                var ref = new Firebase('https://projectxu.firebaseio.com/chats') //USE OUR Firebase FOR CHAT!!
                $scope.sender_id = 1;
                $scope.group_id = $stateParams.group_id;
                var sync = $firebaseArray(ref);
                sync.$loaded(function (data) {
                    var filtered_chats = new Array();
                    angular.forEach(data, function(value, key) {
                      if(value.group_id == $scope.group_id) {
                        filtered_chats.push(value);

                      }
                    });
                    $scope.chats = filtered_chats;
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
.controller('DashCtrl', function($scope, $state, $firebaseAuth, $firebaseArray, $filter,FBdata) {
console.log('aaaaa');
$scope.fbdata = FBdata.all();
console.log($scope.fbdata);

$scope.login = function(){
  var ref = new Firebase("https://projectxu.firebaseio.com/users");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error){
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $state.go("groups"); 
          var users = $filter('filter')($scope.fbdata, authData.facebook);
          console.log(users);


          if(users.length >= 1){
            angular.forEach(users,function(user, key) {
              user = authData.facebook;
            })
          }
            $scope.fbdata.$add(authData.facebook);
      }

    },{scope:"public_profile,email"});

//facebookpicture link: graph.facebook.com/1073160602726868/picture?width=100

/*ref.authWithOAuthRedirect("facebook", function(error) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    // We'll never get here, as the page will redirect on success.
  }
});*/
}


})
 
 //Renaco's controllers
 .controller('TasksCtrl', function($scope, $stateParams, $rootScope, $state, $ionicHistory) {
  $rootScope.notifyIonicGoingBack = function() {
     $state.go('groups');
  }
  $scope.$myBack = function() {
      $ionicHistory.goBack();
      $rootScope.notifyIonicGoingBack();
    };
  $scope.randomVAr = $stateParams.group_id;
  console.log("task");

})

 //Kadeem's controllers
.controller('Group', function($scope, $stateParams, Groups) {

  $scope.group_id = $stateParams.group_id;
  
  console.log('Full group ' + Groups.get($scope.group_id));
	console.log('Group ' + $scope.randomVAr);

})

//Controller for adding group
.controller('GroupAdd', function($scope) {

	$scope.random = "kadeem"; //For testing purposes

})

//Controller for groups 
.controller('Groups', function($scope, $state, Groups) {

	$scope.groups = Groups.all();

	$scope.gotoURL = function(state, group_id){

    $state.go(state, {'group_id': group_id});
	};
});