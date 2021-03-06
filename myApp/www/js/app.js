// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
  'mgcrea.ngStrap', 'satellizer', 'monospaced.elastic', 'ngMaterial'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// // ============================== angular material ==============================
// .config( function($mdThemingProvider){
//   // Configure a dark theme with primary foreground yellow
//   $mdThemingProvider.theme('docs-dark', 'default')
//       .primaryPalette('yellow')
//       .dark();
// })

// =================================== states ===================================
.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  // .state('app.login', {
  //   url: "/login",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/login.html",
  //       controller: 'LoginCtrl'
  //     }
  //   }
  // })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.question', {
    url: "/question",
    views: {
      'menuContent': {
        templateUrl: "templates/question.html"
      }
    }
  })

  .state('app.categories', {
    url: "/categories",
    views: {
      'menuContent': {
        templateUrl: "templates/categories.html"
      }
    }
  })

  .state('app.restapi', {
    url: "/restapi",
    views: {
      'menuContent': {
        templateUrl: "templates/restapi.html",
        controller: 'RestAPICtrl'
      }
    }
  })

;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  $authProvider.facebook({
    clientId: '1234'
  });

  $authProvider.google({
    clientId: '182163907923-a21l1knn1qefjfoasl2t0c2mbv62ca24.apps.googleusercontent.com'
  });

  $authProvider.github({
    clientId: '1234'
  });

  $authProvider.loginRedirect = '/app/profile'
});
