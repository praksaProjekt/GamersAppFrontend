angular.module("gamerApp").controller("LoginController", [
  "$scope",
  "$timeout",
  "$http",
  "auth",
  function ($scope, $timeout, $http, auth) {
    $scope.login = function () {
      auth.login();
    };

    $scope.register = function () {
      auth.register();
    };
  },
]);
