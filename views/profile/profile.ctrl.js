angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  "editProfile",
  "getProfile",
  function ($scope, editProfile, getProfile) {
    var profile = this;

    profile.pictureUrl = "http://127.0.0.1:8887/content/";
    profile.edit = false;

    profile.model = {};

    profile.fileModel = {
      userId: null,
      fileType: null,
      fileName: "",
      fileBase64: "",
    };

    $scope.$onInit = () => {
      var video = document.getElementById("video");
      video.pause();
    };

    profile.init = function () {
      var promise = getProfile.get();
      promise.then(function (response) {
        profile.model = response.data;
        console.log(profile.model);
        var profilePhoto = document.getElementById("img");
        var editPhoto = document.getElementById("avatarImg");
        editPhoto.src = profile.pictureUrl + profile.model.profilePictureURI;
        profilePhoto.src = profile.pictureUrl + profile.model.profilePictureURI;
        console.log(profilePhoto.src);
      });
      profile.model = {};
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
    };

    profile.saveChanges = function () {
      profileUrl = "https://localhost:7190/api/Profile";
      imageApi = "https://localhost:7190/api/Files/uploadfile";
      var promise = editProfile.postModel(profile.model, profileUrl);
      promise.then(function () {
        var promise = editProfile.postModel(profile.fileModel, imageApi);
        promise.then(function () {
          profile.switchEdit();
          profile.init();
        });
      });
    };

    $scope.updateImage = function () {
      var input = document.getElementById("input").files[0];
      profile.fileModel.fileName =
        document.getElementById("input").files[0].name;
      profile.fileModel.fileType = 0;
      var image = document.getElementById("avatarImg");
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          image.src = this.result;
          profile.fileModel.fileBase64 = this.result;
          image.classList.remove("editImg");
          console.log(image.src);
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
