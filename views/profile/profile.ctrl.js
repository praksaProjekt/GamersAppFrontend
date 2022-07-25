angular.module("gamerApp").controller("ProfileController", [
  function () {
    var profile = this;
    
    profile.fullName = "";
    profile.email = "";
    profile.phone = "";
    profile.mobile = "";
    profile.adress = "";
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
