/**
 * Created by louie.lugtu on 2/01/2015.
 *
 */

var patientApp = angular.module('patientApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

patientApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'patient/home.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

patientApp.controller('homeController', ['$scope', function($scope) {

}]);




