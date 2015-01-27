/**
 * Created by louie.lugtu on 1/26/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {

    $scope.igname = '';

    $scope.lowercaseigname = function() {
        return $filter('lowercase')($scope.igname);
    };

    $scope.characters = 5;

    $scope.rules = [
        {rulename: "Must be five characters"},
        {rulename: "Must be unique"},
        {rulename: "Must containt atleast 1 digits"}
    ];

}]);

/**
 * Common directives:
 *
 * ng-app
 * ng-controller
 * ng-model         --> Binds a view to a model
 * ng-class         --> Adding a class
 * ng-if            --> similar to c:if
 * ng-show          --> hides the html by hiding the html via CSS *
 * ng-hide          --> inverse of ng-show
 * mg-repeat        --> Loops through a collection
 */
