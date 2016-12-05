var app = angular.module("AroundTown", ['leaflet-directive', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider 
  .when('/', {
    controller: "MainController",
    templateUrl: "views/main.html"
  })
  .when('/about',{
    controller: "AboutController",
    templateUrl: "views/about.html"
  })
  .otherwise({
    redirectTo: "/"
  });
  
});

// creates the module and gets the required dependancies "leaflet-directive" and "ngRoute".
// configures routing setting the home page to the main controller and view and the about page to the about controller and view.