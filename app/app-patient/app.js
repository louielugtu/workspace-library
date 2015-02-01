/**
 * Created by louie.lugtu on 2/01/2015.
 *
 */
var patientApp = angular.module('patientApp', ['ngRoute', 'ngResource']);

patientApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/home'
        })
       .when('/home', {
           templateUrl: 'pages/home.html',
           controller: 'homeController'
       })
       .when('/patient', {
           templateUrl: 'patient/view.html',
           controller: 'viewPatientController'
       })
       .when('/patient/:id', {
           templateUrl: 'patient/view.html',
           controller: 'viewPatientController'
       })
       .when('/forecast/:city/:range', {
           templateUrl: 'patient/add.html',
           controller: 'addUpdatePatientController'
       })
       .otherwise({
           redirectTo: '/home'
       });
}]);



