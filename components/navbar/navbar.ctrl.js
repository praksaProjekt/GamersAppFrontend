angular.module("gamerApp").controller("NavbarController", ["$scope", "auth", function ($scope, auth) {
    $scope.isLoggedIn2 = function () {
        return auth.isLoggedIn();
    }
    $scope.logout2 = function () {
        auth.logout();
    }
}]);