angular.module("gamerApp").service("editProfile", editProfile);

editProfile.$inject = ["$http"];
function editProfile($http) {
  var service = this;

  service.postModel = function (model) {
    var jwt = localStorage.getItem("token");
    var base64Url = jwt.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    var claimObject = JSON.parse(jsonPayload);
    model.id = claimObject.id;

    var sending = JSON.stringify(model);
    var response = $http({
      method: "PUT",
      url: "https://localhost:7190/api/Profile",
      data: sending,
    });
    console.log(sending);
    return response;
  };
}
