angular.module("gamerApp").directive("editProfile", editProfile);

function editProfile() {
  var ddo = {
    templateUrl: "./views/profile/editprofile.html",
  };
  return ddo;
}
