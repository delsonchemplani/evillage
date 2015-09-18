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
    'ui.bootstrap'

      ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/village.html',       
         controller: 'VillageCtrl'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'       
      })
      .otherwise({
        redirectTo: '/'
      });
  });
