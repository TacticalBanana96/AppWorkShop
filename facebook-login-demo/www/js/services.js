angular.module('starter.services', ['ionic','firebase'])

.factory('FBdata',function($firebaseArray){
  var ref = new Firebase("https://sizzling-torch-8150.firebaseio.com/");
  var allUsers = $firebaseArray(ref);

  return {
    all: function(){
    return allUsers;
  }
  };
});
