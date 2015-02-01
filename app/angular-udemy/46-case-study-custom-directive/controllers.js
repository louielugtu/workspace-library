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



}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', '$resource', 'weatherService', function($scope, $log, $routeParams, $resource, weatherService) {
    $scope.city = $routeParams.city || weatherService.city;
    $scope.day = $routeParams.range || '7';

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
        cnt: $scope.day
    });

    $scope.convertToCelsius = function(tempK) {
        return Math.round(tempK - 273);
    };

    $scope.formatDate = function(date) {
        return new Date(date * 1000);
    };

}]);
