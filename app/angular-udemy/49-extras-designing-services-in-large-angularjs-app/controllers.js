/**
 * Created by Louie on 2/1/2015.
 */

weatherApp.controller('homeController', ['$scope', '$log', '$location', 'weatherService', function($scope, $log, $location, weatherService) {

    $scope.city = weatherService.city;

    $scope.lookupForecast = function() {
        //$location.path('/forecast/' + $scope.city);
        //$routeProvider.otherwise({redirectTo: '/forecast/'+$scope.city});
        weatherService.city = $scope.city;
    };

    $scope.submit = function() {
        $location.path('/forecast/' + $scope.city);
    }

}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', 'weatherService', 'forecastService', function($scope, $log, $routeParams, weatherService, forecastService) {
    $scope.city = $routeParams.city || weatherService.city;
    $scope.day = $routeParams.range || '7';

    $scope.forecasts = forecastService.GetWeather($scope.city, $scope.day);

    $scope.convertToCelsius = function(tempK) {
        return Math.round(tempK - 273);
    };

    $scope.formatDate = function(date) {
        return new Date(date * 1000);
    };

}]);
