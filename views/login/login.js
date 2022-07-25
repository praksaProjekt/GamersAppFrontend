angular.module("gamerApp").controller("LoginController", [
  "$scope",
  "$timeout",
  "$http",
  "auth",
  function ($scope, auth) {
    $scope.login = function (loginUser) {
      auth.login(loginUser);
    };
  },
]);
