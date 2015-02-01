/**
 * Created by louie.lugtu on 2/01/2015.
 *
 */
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/home'
        })
       .when('/home', {
           templateUrl: 'pages/home.html',
           controller: 'homeController'
       })
       .when('/forecast/:city', {
           templateUrl: 'pages/forecast.html',
           controller: 'forecastController'
       })
       .otherwise({
           redirectTo: '/home'
       });
}]);

/*weatherApp.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);*/

weatherApp.controller('homeController', ['$scope', '$log', '$location', 'weatherService', function($scope, $log, $location, weatherService) {

    $scope.city = weatherService.city;

    $scope.lookupForecast = function() {
        $log.info('Lookup weather forecast...');
        //$location.path('/forecast/' + $scope.city);
        //$routeProvider.otherwise({redirectTo: '/forecast/'+$scope.city});
        weatherService.city = $scope.city;
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', '$resource', 'weatherService', function($scope, $log, $routeParams, $resource, weatherService) {
    //var forecast = $resource('api/forecase/:city', {city:'@city'});
    var enteredCity = $routeParams.city || 'Manila';
    $log.info('Forecast...' + enteredCity);
    $log.info('City from service : '+weatherService.city);

    $scope.forecast = {
        city: enteredCity
    };
}]);

weatherApp.service('weatherService', function() {
    this.city = 'Manila, Philippines';
});