angular.module("gamerApp").controller("LoginController", [
  "$scope",
  "$timeout",
  "$http",
  "auth",
  function ($scope, auth) {
    $scope.register = function (registerUser) {
      auth.register(registerUser);
    };
  },
]);
