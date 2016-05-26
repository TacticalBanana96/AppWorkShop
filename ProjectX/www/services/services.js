angular.module('starter.services', ["ionic", "firebase"])


 //Daria's services


 //Ryvon's services
.factory('FBdata',function($firebaseArray){
  var ref = new Firebase("https://projectxu.firebaseio.com/groups");
  var allUsers = $firebaseArray(ref);

  return {
    all: function(){
    return allUsers;
  }
  };
});

 //Renaco's services 


///Kadeem's services
.factory('Groups', function($firebaseArray) {

  var data = new Firebase("https://projectxu.firebaseio.com/groups");
  
  var groups_array = $firebaseArray(data);

  return {
    all: function() {
      return groups_array;
    }

  };
});
