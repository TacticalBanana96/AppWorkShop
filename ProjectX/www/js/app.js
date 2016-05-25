// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module("ionic").provider("$ionicMaterialConfig", function() {
  var e = this;
  this.allPlatforms = !1, e.$get = function() {
    return e
  }
}), angular.module("ionic").directive("button", ["$ionicPlatform", function(e) {
  return {
    restrict: "E",
    compile: function(n, t) {
      t.hasOwnProperty("noRipple") || n.addClass("mdl-js-button mdl-js-ripple-effect"), e.ready(function() {
        componentHandler.upgradeElement(n[0], "MaterialButton"), componentHandler.upgradeElement(n[0], "MaterialRipple")
      })
    }
  }
}]), angular.module("ionic").directive("ionTabNav", ["$ionicPlatform", function(e) {
  return {
    restrict: "E",
    compile: function(n, t) {
      t.hasOwnProperty("noRipple") || n.addClass("mdl-tabs__tab"), e.ready(function() {
        componentHandler.upgradeElement(n[0], "MaterialButton"), componentHandler.upgradeElement(n[0], "MaterialRipple")
      })
    }
  }
}]), angular.module("ionic").directive("ionTabs", ["$ionicPlatform", function(e) {
  return {
    restrict: "E",
    compile: function(n, t) {
      t.hasOwnProperty("noRipple") || n.addClass("mdl-js-tabs mdl-js-ripple-effect"), e.ready(function() {
        componentHandler.upgradeElement(n[0], "MaterialTabs"), componentHandler.upgradeElement(n[0], "MaterialRipple")
      })
    }
  }
}]);

//********************************************
//******** DO NOT TROUBLE ABOVE CODE!! *******
//********************************************

angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {


 $stateProvider

 .state('group', {
   url: '/group/:group_id',
   //abstract: true,
   templateUrl: 'templates/group.html',
   controller: 'Group'
 })

 .state('groups', {
   url: '/groups',
   templateUrl: 'templates/groups.html',
   controller: 'Groups'
 })
 
 //Daria's States
 .state('group.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tabs-chats.html',
          controller: 'ChatsCtrl'
        }
      }
  })


 //Ryvon's States

 
 //Renaco's States 



 .state('groupadd', {
   url: '/group_add/',
   templateUrl: 'templates/group-add.html',
   controller: 'GroupAdd'
 });


 $urlRouterProvider.otherwise('/groups');
});






