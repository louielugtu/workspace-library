/**
 * Created by louie.lugtu on 2/03/2015.
 */
var patientApp = angular.module('myAngularApp', ['ngRoute']);

patientApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/login'
        });
}]);

myAngularApp.controller('mainController', [function($scope) {

}]);