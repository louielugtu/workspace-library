/**
 * Created by louie.lugtu on 1/28/2015.
 */
var myAngularApp = angular.module('myAngularApp', []);
// Always wrap your dependencies as array. This will help you avoid problems with minification. The drawback, the order will now matter.
myAngularApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {

    $scope.igname = '';

    $scope.lowercaseigname = function() {
        return $filter('lowercase')($scope.igname);
    };

    $scope.characters = 5;

    var rulesrequest = new XMLHttpRequest();
    rulerequest.onreadystatechange = function() {
        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
            rulesrequest.responseText;
            $scope.rules = JSON.parse
        }
    }

}]);

/**
 * XMLHttpRequest
 * - Created by Microsoft for OWA
 */