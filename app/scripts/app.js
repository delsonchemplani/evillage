'use strict';

/**
 * @ngdoc overview
 * @name smartvillageApp
 * @description
 * # smartvillageApp
 *
 * Main module of the application.
 */
angular
  .module('smartvillageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'village',
    'ngTouch',
    'ui.select'
      ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }) .when('/village', {
        templateUrl: 'views/village.html',
        controller: 'VillageCtrl'
       
      })
      .otherwise({
        redirectTo: '/'
      });
  });
