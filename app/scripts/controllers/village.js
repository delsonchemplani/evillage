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

  Parse.initialize('WQt98H8Nfazb2Pu4zFAwksIt9t2eLH38hbgwrlRv','SAX30IUtkCr2kzsSN2YCIudTGaDDT96N8NZ1C0aq');
 // $(window).load(function(){
        //$('#my-modal').modal('show');
   // });
})
  .controller('VillageCtrl', function ($scope,$rootScope,$http,dataUrl) {
 
  /*$scope.launch = function(which){
    var dlg = null;
    switch(which){
        
            
      // Create Your Own Dialog
      case 'create':
        dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
        dlg.result.then(function(name){
          $scope.name = name;
        },function(){
          $scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
        
        break;
    }; // end switch
  }; // end launch
*/
  $('#my-modal').modal('show');

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
var mydistricts=[];
$http.get(dataUrl)
	.success(function (data){
		
      
    $scope.data.districts =data.results;
    console.log('data'+$scope.data.districts);
	})
	.error(function (response){
		$scope.data.error = response.error || response;
	});






//$scope.refreshAddresses = function(address) {
    
 // }


 /*$scope.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };*/


  $scope.getLocation = function(val) {
    var locations=[];
    var Edist = Parse.Object.extend("edist");
    var query = new Parse.Query(Edist);   
    query.startsWith("name", val.toLowerCase());
   return query.find({
        success: function(results) {
      
        },
         error: function(error) {
       alert("Error: " + error.code + " " + error.message);
      }
     }).then(function(results){
     // alert('res'+results);

      for (var i = 0; i < results.length; i++) {
           var object = results[i];
           locations.push(object.get('name'));
           // alert(locations);
          }
      return locations;
     });



  };


$scope.setLocation= function(){

  $rootScope.mylocation=$scope.asyncSelected;
  $('#my-modal').modal('hide');
  $rootScope.setLocation=true;
}



 
});
