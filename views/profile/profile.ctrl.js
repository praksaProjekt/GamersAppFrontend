angular.module("gamerApp").controller("ProfileController", [
  function () {
    var profile = this;

    profile.fullName = "Marko Marković";
    profile.title = "The weirdo";
    profile.phone = "222232";
    profile.mobile = "091213212";
    profile.adress = "Kaštela, Croatia";
    profile.edit = false;

    profile.switchEdit = function () {
      if (profile.edit == true) {
        profile.edit = false;
      } else {
        profile.edit = true;
      }
    };
  },
]);
