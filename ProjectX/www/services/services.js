angular.module('starter.services', ['ionic','firebase'])


 //Daria's services

//Ryvon's services
.factory('FBdata',function($firebaseArray){
  var ref = new Firebase("https://projectxu.firebaseio.com/users");
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
    },
    get: function(group_id) {
      var result = null;
      angular.forEach(groups_array,function(value,key){
        console.log(group_id);
        console.log(value.$id);
        if(group_id == value.$id){
          result = value;
        }
      });
      return result;
    }

  };
});

 


 //Renaco's services 

