'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappliedApp
 */
angular.module('village',[])
.constant('dataUrl','https://api.parse.com/1/classes/Districts')
.run(function ($http) {
	$http.defaults.headers.common['X-Parse-Application-Id']
	='pmHR8LoON2m1cc9UxKK6kYgLCXPf2y4TVD7BnvEB';
	$http.defaults.headers.common['X-Parse-REST-API-Key']
	='pQaSXDSZR3ONDS65NxWt1XnTMGP2tl8H8RY5jB2b';
})
  .controller('VillageCtrl', function ($scope,$http,dataUrl) {
 
$scope.data = {};
$http.get(dataUrl)
	.success(function (data){
		$scope.data.districts = data.results;
	})
	.error(function (response){
		$scope.data.error = response.error || response;
	});
 
});
