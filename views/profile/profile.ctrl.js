angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  "editProfile",
  "getProfile",
  function ($scope, editProfile, getProfile) {
    var profile = this;

    profile.edit = false;

    profile.profileData = {};

    profile.model = {
      id: "",
      fullName: "",
      title: "",
      email: "",
      mobile: "",
      address: "",
      country: "",
      twitter: "",
      instagram: "",
      facebook: "",
      epicGames: "",
      steam: "",
      file: "",
    };

    profile.init = function () {
      var promise = getProfile.get();
      promise.then(function (response) {
        profile.profileData = response.data;
        console.log(response.data);
        var profilePhoto = document.getElementById("image");
        profilePhoto.src = profile.profileData.file;
        profile.model.model = {};
      });
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
      profile.init();
    };
    profile.saveChanges = function () {
      var promise = editProfile.postModel(profile.model);

      promise.then(function (response) {
        profile.init();
      });
      profile.switchEdit();
    };

    $scope.updateImage = function () {
      var input = document.getElementById("input").files[0];
      var image = document.getElementById("img");
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          image.src = this.result;
          profile.model.file = this.result;
          image.classList.remove("editImg");
        },
        false
      );
      reader.readAsDataURL(input);
    };
  },
]);
