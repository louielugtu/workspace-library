/**
 * Created by louie.lugtu on 1/26/2015.
 */

var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.controller('mainController', function($scope) {

    $scope.name = 'Louie Lugtu';
    $scope.message = 'New scope variale';
    $scope.shout = function() {
        return 'SHOUT!';
    }
    console.log($scope);
});