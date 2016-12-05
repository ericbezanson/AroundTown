app.controller("MainController", ['$scope','places', function($scope, places){
  	$scope.mapCenter = { lat: 44.6488, lng: -63.5752, zoom: 17 };

		places.success(function(data){
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
    

}]);

//  Halifax - 44.6488 N, 63.5752 W