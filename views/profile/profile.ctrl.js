angular.module("gamerApp").controller("ProfileController", [
  "$scope",
  function ($scope) {
    var profile = this;

    profile.fullName = "";
    profile.title = "";
    profile.mobile = "091213212";
    profile.adress = "";
    profile.edit = false;
    profile.twitter = "lmao";
    profile.epicGames = "lmao";

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
      video: "",
    };

    $scope.$onInit = () => {
      var video = document.getElementById("video");
      video.pause();
    };

    profile.switchEdit = function () {
      profile.edit = !profile.edit;
    };

    profile.saveChanges = function () {
      console.log(profile.model);
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
