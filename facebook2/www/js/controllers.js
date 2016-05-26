angular.module('app.controllers', [])

  .controller('loginPageCtrl', function($scope, $firebaseAuth, $firebaseArray, $filter,FBdata) {

  $scope.fbdata = FBdata.all();
  console.log($scope.fbdata);

  $scope.login = function(){
    var ref = new Firebase("https://boiling-torch-8435.firebaseio.com/users");
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

}


})
