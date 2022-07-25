angular.module("gamerApp").directive("profile", profile);

function profile() {
  var ddo = {
    templateUrl: "./views/profile/profile.html",
  };
  return ddo;
}
