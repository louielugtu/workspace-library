/**
 * Created by louie.lugtu on 1/29/2015.
 */
var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

myAngularApp.config(function($routeProvider) {
   $routeProvider
       .when('/', {
           templateUrl: 'pages/main.html',
           controller: 'mainController'
        })
       .when('/second', {
           templateUrl: 'pages/second.html',
           controller: 'secondController'
       })
       .when('/second/:num', {
           templateUrl: 'pages/second.html',
           controller: 'secondController'
       })
       .when('/book/:id', {
           templateUrl: 'pages/book.html',
           controller: 'bookController'
       });

});

// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Louie';

}]);

myAngularApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

    $scope.name = 'Lugtu';
    // if $routeParams.num not exists, use 1.
    $scope.num = $routeParams.num || 1;


}]);

myAngularApp.controller('bookController', ['$scope', '$log', '$routeParams', '$http', function($scope, $log, $routeParams, $http) {

    $http.get('response.html')
        .success(function(result) {
            var bookFound;
            for (var i = 0; i < result.length; i++) {
                if(result[i].id == $routeParams.id) {
                    bookFound = result[i];
                }
            }
            console.log(bookFound);
            if ((typeof bookFound == 'undefined') && result.length > 1) {
                bookFound = result[0];
            }
            console.log(result);
            console.log(bookFound);
            $scope.book = bookFound;
        })
        .error(function(data, status) {
            $log.error(data);
        });

}]);

/**
 *  $location  --> to retrieve details of the URL (e.g. #)
 *  Syntax: $location.path()
 */