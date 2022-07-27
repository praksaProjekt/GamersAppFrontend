angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  "editProfile",
  function ($scope, editProfile) {
    var profile = this;

    profile.fullName = "";
    profile.title = "";
    profile.mobile = "091213212";
    profile.adress = "";
    profile.edit = false;
    profile.twitter = "lmao";
    profile.epicGames = "lmao";

    profile.imgModel = "";

    profile.model = {
      fullName: "",
      title: "",
      email: "",
      mobile: "",
      adress: "",
      country: "",
      twitter: "",
      instagram: "",
      facebook: "",
      epicGames: "",
      steam: "",
      file: "",
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
    };
    profile.saveChanges = function () {
      var promise = editProfile.postModel(profile.model);

      promise.then(function (response) {
        console.log(response);
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
