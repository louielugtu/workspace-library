/**
 * Created by louie.lugtu on 2/01/2015.
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

    $scope.persons = [
        {
            name:'Louie',
            street: '25 Josefina Francisco St.',
            city: 'Las Pinas City',
            country: 'Philippines',
            zip: '1740'
        },
        {
            name:'Jemai',
            street: 'Novaliches',
            city: 'Quezon City',
            country: 'Philippines',
            zip: '1111'
        }
    ];

    $scope.formattedAddress = function(person) {
        return person.street +' '+person.city+', '+person.country+' '+person.zip;
    };

}]);

// Custom Directive
myAngularApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

    $scope.person = {
        name:'Louie',
        street: '25 Josefina Francisco St.',
        city: 'Las Pinas City',
        country: 'Philippines',
        zip: '1740'

    };

    $scope.formattedAddress = function(person) {
        return person.street +' '+person.city+', '+person.country+' '+person.zip;
    };

}]);

myAngularApp.directive('searchResult', function() {
    return {
        restrict: 'AECM', //A-attribute, E-element, C-class, M-Comment
        templateUrl: 'directives/searchResults.html',
        scope: {
            personObject: '=', //= - two-way-binding
            formattedAddress: '&'
        },
        replace: true, //Default is false

        compile: function(elem, attrs) {
            // We will normally not do anything here.
            console.log('Compiling...');
            console.log(elem.html() );
            return {

                /* Angular documentation recommends not to sue the pre linking
                    pre: function(scope, elements, attributes) {
                    console.log('Pre-linking...');
                    console.log(elements);
                },*/

                post: function(scope, elements, attributes) {
                    console.log('Post-linking...');
                    // You can now add logic in using the directives (you can do redirection)
                    if (scope.personObject.name == 'Louie') {
                        elements.removeAttr('class');
                    }
                    console.log(elements);
                }
            }
        }
    }
});

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
 *  All service except are singleton.
 *
 *  $scope inherits from the $rootScope which is a handler by the app.
 */