/**
 * Created by louie.lugtu on 2/01/2015.
 */
var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {



}]);

/**
 * Angular normalizes attribute names.
 *
 *  It normalizes louie-lugtu into louieLugtu.
 */
