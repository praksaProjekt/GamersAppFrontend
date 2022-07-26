angular
  .module("gamerApp")
  .directive("editProfile", editProfile)
  .directive("customOnChange", customOnChange);

function editProfile() {
  var ddo = {
    templateUrl: "./views/profile/editprofile.html",
  };
  return ddo;
}

function customOnChange() {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      element.on("change", onChangeHandler);
      element.on("$destroy", function () {
        element.off();
      });
    },
  };
}
