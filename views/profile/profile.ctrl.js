angular.module("gamerApp").controller("ProfileController", ProfileController);

function ProfileController() {
  var profile = this;
  profile.fullName = "Marko Markovic";
  profile.email = "Marko@gmail.com";
  profile.phone = "ko jos koristi fiksni";
  profile.mobile = "091504213";
  profile.adress = "Kaštela";
  profile.edit = true;

  profile.switchEdit = function () {
    if (profile.edit == true) {
      profile.edit = false;
    } else {
      profile.edit = true;
    }
  };
}
