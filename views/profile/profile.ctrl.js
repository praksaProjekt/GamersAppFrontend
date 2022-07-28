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

    profile.fileModel = {
      id: null,
      fileType: null,
      fileName: "",
      file: "",
    };

    $scope.$onInit = () => {
      var video = document.getElementById("video");
      video.pause();
    };

    profile.init = function () {
      var promise = getProfile.get();

      promise.then(function (response) {
        profile.profileData = response.data;
        var profilePhoto = document.getElementById("image");
        profilePhoto.src = profile.profileData.file;
      });
      profile.model = {};
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
      profile.init();
    };

    profile.saveChanges = function () {
      var promise = editProfile.postModel(profile.model);
      promise.then(function () {});
      profile.init();
      profile.switchEdit();
    };

    $scope.updateImage = function () {
      var input = document.getElementById("input").files[0];
      profile.fileModel.fileName =
        document.getElementById("input").files[0].name;
      profile.fileModel.fileType =
        document.getElementById("input").files[0].type;
      console.log(profile.fileModel.fileName);
      var image = document.getElementById("img");
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          image.src = this.result;
          profile.fileModel.file = this.result;
          console.log(this.result.toString());
          image.classList.remove("editImg");
        },
        false
      );
      reader.readAsDataURL(input);
    };

    $scope.updateVideo = function () {
      var videoInput = document.getElementById("videoInput").files[0];

      var source = document.getElementById("source");

      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          profile.model.video = this.result;
          source.src = this.result;
          video.load();
          video.play();
        },
        false
      );

      reader.readAsDataURL(videoInput);
    };
  },
]);
