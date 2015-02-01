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
       .when('/forecast/:city/:range', {
           templateUrl: 'pages/forecast.html',
           controller: 'forecastController'
       })
       .otherwise({
           redirectTo: '/home'
       });
}]);

weatherApp.controller('homeController', ['$scope', '$log', '$location', 'weatherService', function($scope, $log, $location, weatherService) {

    $scope.city = weatherService.city;

    $scope.lookupForecast = function() {
        //$location.path('/forecast/' + $scope.city);
        //$routeProvider.otherwise({redirectTo: '/forecast/'+$scope.city});
        weatherService.city = $scope.city;
    };



}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', '$resource', 'weatherService', function($scope, $log, $routeParams, $resource, weatherService) {
    $scope.city = $routeParams.city || weatherService.city;

    // Instantiate the API
    var forecastAPI = $resource(
        'http://api.openweathermap.org/data/2.5/forecast/daily',
        {
            callback: "JSON_CALLBACK"
        },
        {
            get: {
                method: "JSONP" //Enables call outside the app
            }
        }
    );
    //?q=London&cnt=7
    $scope.forecasts = forecastAPI.get({
        q: $scope.city,
        cnt: $routeParams.range || 7
    });

    $scope.convertToCelsius = function(tempK) {
        return Math.round(tempK - 273);
    };

    $scope.formatDate = function(date) {
        return new Date(date * 1000);
    };

}]);

weatherApp.service('weatherService', function() {
    this.city = 'Manila, Philippines';
});