/**
 * Created by paul.b.m.lugtu on 2/4/2015.
 */
patientApp.controller('loginControllerModal', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {

    $scope.credential = {
        email: '',
        password: ''
    };

    $scope.authenticated=false;

    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'login.html',
            controller: 'loginController',
            size: size,
            backdrop: 'static',
            resolve: {
                credential: function () {
                    return $scope.credential;
                }
            }
        });

        modalInstance.result.then(function (authenticated) {
            $scope.authenticated = authenticated;
            $log.info('Modal closed ' + $scope.authenticated);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    if (!$scope.authenticated) {
        $scope.open();
    }
}]);

patientApp.controller('loginController', [
    '$scope', '$modalInstance', '$log', 'credential', 'loginService',
    function ($scope, $modalInstance, $log, credential, loginService) {
        $scope.loginLoading = false;

        $scope.credential = credential;

        $scope.submit = function() {
            $scope.loginLoading = true;
            var status = loginService.login($scope.credential.email, $scope.credential.password);
            if (status) {
                $modalInstance.close(status);
                $scope.loginLoading = false;
            } else {
                $log.warn('Login failed!');
            }
        };

    }]);

patientApp.service('loginService', ['$resource', '$log', function($resource, $log) {
    this.login = function(email, password) {
        $log.debug(email);
        $log.debug(password);

        return true;
    }
}]);