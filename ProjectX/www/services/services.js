angular.module('starter.services', ["ionic", "firebase"])


 //Daria's services


 //Ryvon's services

 
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
