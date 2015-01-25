/**
 * Created by louie.lugtu on 1/26/2015.
 */

var myAngularApp = angular.module('myAngularApp', []);
// Angular will inject the instance of the $scope to the controller.
myAngularApp.controller('mainController', function($scope) {

});

var searchBook = function (id, title, name, genre) {
    return 'My Book';
}

// Get details of the searchBook function
console.log(angular.injector().annotate(searchBook));

/**
 * Note:
 *   - Angular searches for all variables with '$' and '$$', and injects all it's inherited object (e.g. $scope).
 *   - Angular uses the prefixes '$' and '$$', to prevent accidental name collisions with your code.
 */
