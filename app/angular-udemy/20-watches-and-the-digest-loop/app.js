/**
 * Created by louie.lugtu on 1/26/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {
    $scope.igname = '';

    $scope.lowercaseigname = function() {
        return $filter('lowercase')($scope.igname);
    };

    $scope.$watch('igname', function(newValue, oldValue) {
        $log.info('Changed!');
        $log.debug('Old Value: '+oldValue);
        $log.debug('New Value: '+newValue);
    });

    // Will not change because it runs outside Angular context
    setTimeout(function() {

        $scope.igname = 'unknown';
        console.log('IGName Changed!');

    }, 3000);
}]);

/**
 * Events: Click, KeyPress, MouseOver, Change
 *
 * Everytime you put values to the scope, Angular automatically creates a WATCHER inside the WATCHER LIST.
 * This tracks the changes (OLD VALUE and NEW VALUE) to that value added in the scope. It happens inside
 * the digest cycle. The digest loop updates everything that has changed.
 *
 */