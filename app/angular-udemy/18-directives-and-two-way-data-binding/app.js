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

}]);

/**
 * Directive: An instruction to AngularJS to manipulate a piece of the DOM. This can be the following (but not limited):
 *  - Add a class
 *  - Hide this
 *  - Create this
 *
 *  Examples in Angular: ng-app, ng-controller, ng-model & etc.
 */

/**
 * Model --> $scope.igname
 * View  --> <h1>instagram.com/ {{ igname }}</h1>
 *
 * What's in between? (see section 19 - Javascript Aside: The event loop)
 */