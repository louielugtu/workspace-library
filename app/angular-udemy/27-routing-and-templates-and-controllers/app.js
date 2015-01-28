/**
 * Created by louie.lugtu on 1/29/2015.
 */
var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

myAngularApp.config(function($routeProvider) {
   $routeProvider
       .when('/', {
           templateUrl: 'pages/main.html',
           controller: 'mainController'
        })
       .when('/second', {
           templateUrl: 'pages/second.html',
           controller: 'secondController'
       });

});

// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Louie';

}]);

// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Lugtu';

}]);

/**
 *  $location  --> to retrieve details of the URL (e.g. #)
 *  Syntax: $location.path()
 */