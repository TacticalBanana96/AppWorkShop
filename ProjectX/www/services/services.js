angular.module('starter.services', ['ionic','firebase'])


 //Daria's services

//Ryvon's services
.factory('FBdata',function($firebaseArray){
  var ref = new Firebase("https://boiling-torch-8435.firebaseio.com/users");
  var allUsers = $firebaseArray(ref);

  return {
    all: function(){
    return allUsers;
  }
  }
})

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

 


 //Renaco's services 

