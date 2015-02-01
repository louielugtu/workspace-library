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



