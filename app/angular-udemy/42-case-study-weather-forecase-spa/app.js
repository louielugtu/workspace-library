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

weatherApp.controller('tt', ['', function() {

}])


weatherApp.controller('homeController', ['$scope', '$log', '$location', function($scope, $log, $location) {

    $scope.city = '';

    $scope.lookupForecast = function() {
        $log.info('Lookup weather forecast...');
        //$location.path('/forecast/' + $scope.city);
        //$routeProvider.otherwise({redirectTo: '/forecast/'+$scope.city});
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', '$resource', function($scope, $log, $routeParams, $resource) {
    //var forecast = $resource('api/forecase/:city', {city:'@city'});
    var enteredCity = $routeParams.city || 'Manila';
    $log.info('Forecast...' + enteredCity);
}]);
