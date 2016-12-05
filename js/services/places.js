//service uses the ang $http directive to gather relevant wikipedia information based on the lat/lng in the URL and place them in a JSON object, this service then takes the data and makes it available for use in the Main Controller. It is then passed into the helper function, generating the map markers.

app.factory('places', ['$http', function($http){
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=44.6488%7C-63.5752&gslimit=30&format=json&callback=JSON_CALLBACK')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });	
}]);