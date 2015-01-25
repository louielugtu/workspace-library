/**
 * Created by louie.lugtu on 1/26/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Louie';

    // Similar to setTimeout() but using Angular's architecture.
    $timeout(function() {
        $scope.name = 'Paul';
    }, 3000);
}]);

/**
 * The $scope is the glue between the view and controller.
 */
