/**
 * Created by louie.lugtu on 1/26/2015.
 */

var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.controller('mainController', function($scope) {

});

var searchBook = function (id, title, name, genre) {
    return 'My Book';
}

//searchBook(1, 'New Book', 'This is my first book', 'education'
var searchBookString = searchBook.toString();
console.log(searchBook(1, 'New Book', 'This is my first book', 'education'));
console.log(searchBook);
console.log(searchBookString);

// Notes: You take any function into String to figure out the expected paramenters into a functio