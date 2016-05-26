angular.module('app.services', ['ionic','firebase'])

.factory('FBdata',function($firebaseArray){
  var ref = new Firebase("https://boiling-torch-8435.firebaseio.com/users");
  var allUsers = $firebaseArray(ref);

  return {
    all: function(){
    return allUsers;
  }
  };
});
