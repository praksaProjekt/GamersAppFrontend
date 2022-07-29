angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  "editProfile",
  "getProfile",
  function ($scope, editProfile, getProfile) {
    var profile = this;

    profile.pictureUrl = "http://127.0.0.1:8887/content/";
    profile.edit = false;

    profile.profileData = {};

    profile.model = {
      id: 0,
      userId: 0,
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
      profilePictureURI: "",
      video: "",
    };

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
        profile.profileData = response.data;
        var profilePhoto = document.getElementById("image");
        profilePhoto.src =
          profile.pictureUrl + profile.profileData.profilePictureURl;
      });
      profile.model = {};
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
      profile.init();
    };

    profile.saveChanges = function () {
      profileUrl = "https://localhost:7190/api/Profile";
      imageApi = "https://localhost:7190/api/Files/uploadfile";
      var promise = editProfile.postModel(profile.model, profileUrl);
      promise.then(function () {
        var promise = editProfile.postModel(profile.fileModel, imageApi);
        promise.then(function () {
          profile.init();
          profile.switchEdit();
        });
      });
    };

    $scope.updateImage = function () {
      var input = document.getElementById("input").files[0];
      profile.fileModel.fileName =
        document.getElementById("input").files[0].name;
      profile.fileModel.fileType = 0;
      console.log(profile.fileModel.fileName);
      var image = document.getElementById("img");
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          image.src = this.result;
          profile.fileModel.fileBase64 = this.result;
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
