angular.module("gamerApp").controller("LoginController", [
  "$scope",
  "auth",
  function ($scope, auth) {
    $scope.login = function (loginUser) {
      console.log(auth);
      auth.login(loginUser);
    };
  },
]);
