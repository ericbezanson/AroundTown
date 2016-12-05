app.controller("MainController", ['$scope','places', function($scope, places){
  	$scope.mapCenter = { lat: 44.6488, lng: -63.5752, zoom: 17 };

		places.success(function(data){
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
    

}]);
//sets the lat and long for the map that is displayed in the main page, also passes the JSON from the places service into the helper function " geodataToMarkers

// CITIES (url in places must also be updated)
//  Halifax, NS - 44.6488 , -63.5752 
//  Bedford, NS - 44.7247, -63.6909 
//  Toronto, ON - 43.6532, -79.3832
//  East Rutherford, NJ - 40.8340, -74.0971
//  Manhattan, NY - 40.7831, -73.9712
//  Osaka, Japan - 34.6937, 135.5022