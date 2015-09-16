'use strict';

/**
 * @ngdoc function
 * @name webappliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappliedApp
 */
angular.module('village',[])
.constant('dataUrl','https://api.parse.com/1/classes/edist')
.run(function ($http) {
	$http.defaults.headers.common['X-Parse-Application-Id']
	='WQt98H8Nfazb2Pu4zFAwksIt9t2eLH38hbgwrlRv';
	$http.defaults.headers.common['X-Parse-REST-API-Key']
	='eXbyil90DXyNSWPaAjpyyVdJg2YQm2z8raS8ykZX';
})
  .controller('VillageCtrl', function ($scope,$http,dataUrl) {
 
 $scope.address = {};
  $scope.refreshAddresses = function(address) {
    var params = {where:JSON.stringify({"name":{"$all":address}})};
    return $http.get(
      //'http://maps.googleapis.com/maps/api/geocode/json',
      'https://api.parse.com/1/classes/edist',
      {params: params}
    ).then(function(response) {
      $scope.addresses = response.data.results
    });
  };

  


$scope.data = {};
$http.get(dataUrl)
	.success(function (data){
		$scope.data.districts = data.results;
	})
	.error(function (response){
		$scope.data.error = response.error || response;
	});


//$scope.refreshAddresses = function(address) {
    
 // }
 
});
