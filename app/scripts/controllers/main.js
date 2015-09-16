'use strict';

/**
 * @ngdoc function
 * @name smartvillageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartvillageApp
 */
angular.module('smartvillageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.address = {};
  $scope.refreshAddresses = function(address) {
    var params = {name: address, sensor: false};
    return $http.get(
    //  'http://maps.googleapis.com/maps/api/geocode/json',
        'https://api.parse.com/1/classes/edist',
      {params: params}
    ).then(function(response) {
      $scope.addresses = response.data.results
    });
  };

    
  });
