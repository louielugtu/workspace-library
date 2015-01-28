/**
 * Created by louie.lugtu on 1/28/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$filter', '$log', '$http', function($scope, $filter, $log, $http) {

    $scope.igname = '';

    $scope.lowercaseigname = function() {
        return $filter('lowercase')($scope.igname);
    };

    $scope.characters = 5;

    $http.get('response.html')
        .success(function(result) {
            $scope.rules = result;
        })
        .error(function(data, status) {
            $log.error(data);
        });

    $scope.newRule = '';

    $scope.addRule = function() {
        $log.debug('Add new rule!');
        $http.post('addResponse.html', { newRule: $scope.newRule})
            .success(function(result) {
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function(data, status) {
                $log.error(data);
            });
    };


}]);

/**
 * XMLHttpRequest
 * - Created by Microsoft for OWA
 */