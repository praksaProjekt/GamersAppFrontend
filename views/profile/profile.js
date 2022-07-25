angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  function ($scope) {
    $scope.isEditing = false;

    $scope.setEditing = function () {
      console.log("scopeisEditing");
    };
  },
]);
