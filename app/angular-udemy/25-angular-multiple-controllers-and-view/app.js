/**
 * Created by louie.lugtu on 1/29/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', function($scope) {

    $scope.name = 'Main';

}]);

myAngularApp.controller('secondController', ['$scope', function($scope) {

    $scope.name = 'Second';

}]);

