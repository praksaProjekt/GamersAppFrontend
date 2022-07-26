angular.module("gamerApp").controller("ProfileController", [
  function (fileService) {
    var profile = this;

    profile.fullName = "Marko Marković";
    profile.title = "The weirdo";
    profile.phone = "222232";
    profile.mobile = "091213212";
    profile.adress = "Kaštela, Croatia";
    profile.edit = false;

    profile.model = {
      fullName: "",
      title: "",
      phone: "",
      mobile: "",
      adress: "",
      email: "",
      mobile: "",
      country: "",
      twitter: "",
      instagram: "",
      facebook: "",
      steam: "",
      epicGames: "",
      file: "",
    };

    profile.switchEdit = function () {
      if (profile.edit == true) {
        profile.edit = false;
      } else {
        profile.edit = true;
      }
    };

    profile.showModel = function () {
      var image = document.getElementById("input").files[0];
      var image2 = document.getElementById("img");
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          console.log(image2);
          image2.src = this.result;
          image2.classList.remove("editImg");
        },
        false
      );

      reader.readAsDataURL(image);
    };
  },
]);
