/**
 * Created by louie.lugtu on 1/26/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.controller('mainController', [function($scope) {

}]);

var things = [1,
    '2',
    function() {
        alert('Louie');
    }];

console.log(things);
// You can execute the function inside an array.
things[2]();