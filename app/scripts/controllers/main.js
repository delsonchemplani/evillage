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




$scope.myInterval = 5000;
$scope.noWrapSlides = false;
var slides = $scope.slides = [];
var slides1 = $scope.slides1 = [];
 slides.push({      
        image: '../images/plumbs.jpg'      
    },{image: '../images/paint.jpg'},{image: '../images/carp.jpg' });
 
 slides1.push({      
        image: '../images/vill1.jpg'      
    },{image: '../images/vill4.jpg'},{image: '../images/vill3.jpg' });

  /*$scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      //image: '//placekitten.com/' + newWidth + '/300',
        image: '../images/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $*///scope.addSlide();
 // }
    
  });