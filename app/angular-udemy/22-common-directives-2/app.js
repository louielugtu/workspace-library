/**
 * Created by louie.lugtu on 1/26/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {

    $scope.buttonClicked = function() {
        alert("clicked!");
    };

    $scope.name = 'Louie Lugtu';

}]);

/**
 * Common directives (Part 2):
 *
 * ng-click
 * ng-hover?
 * ng-cloak  --> Will hide element, until Angular has worked in it.
 *
 */


