angular.module("gamerApp").controller("RegisterController", [
  "$scope",
  "auth",
  function ($scope, auth) {
    $scope.register = function (registerUser) {
      if (registerUser.password === registerUser.confirmpassword) {
        auth.register(registerUser);
      } else {
        $scope.unmatchedPasswords = true;
      }
    };
  },
]);
