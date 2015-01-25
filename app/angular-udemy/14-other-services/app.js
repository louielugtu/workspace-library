/**
 * Created by louie.lugtu on 1/26/2015.
 */

var myAngularApp = angular.module('myAngularApp', [
    'ngMessages',
    'ngResource'
]);

// Angular will inject the instance of the $scope and $log to the controller. The order is not important.
myAngularApp.controller('mainController', function($scope, $log, $filter) {

    // Using $log

    $log.info('Heyo!');
    if($log.debugEnabled) {
        $log.debug('Sup!');
    }
    $log.warn('Oh noes!');
    $log.error('@#$%! F*ck!');

    // Using $filter
    $scope.name = 'Louie';
    $scope.formattedname = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.debug($scope.formattedname);

});

myAngularApp.controller('messagesController', function ($scope){

});

myAngularApp.controller('resourceController', function ($scope, $resource){
    //$log.info('$resource: '+ $resource)
});

/**
 * Moving forward, we will use $log for logging :)
 */
