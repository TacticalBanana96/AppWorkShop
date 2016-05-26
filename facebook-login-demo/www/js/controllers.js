angular.module('starter.controllers', ["ionic",'firebase'])

.controller('DashCtrl', function($scope, $firebaseAuth, $firebaseArray, $filter,FBdata) {

$scope.fbdata = FBdata.all();
console.log($scope.fbdata);

$scope.login = function(){
  var ref = new Firebase("https://sizzling-torch-8150.firebaseio.com/users");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error){
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          var users = $filter('filter')($scope.fbdata, {details : authData.facebook});
          console.log(users);

          if(users.length >= 1){
            angular.forEach(users,function(user, key) {
              user.details = authData.facebook;
            })
          }
            $scope.fbdata.$add({details : authData.facebook});
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

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,FBdata) {

$scope.fbdata = FBdata.all();

  $scope.settings = {
    enableFriends: true
  };
});
