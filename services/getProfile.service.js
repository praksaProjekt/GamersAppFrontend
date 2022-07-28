angular.module("gamerApp").service("getProfile", getProfile);

getProfile.$inject = ["$http"];
function getProfile($http) {
  var service = this;

  service.get = function () {
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
    console.log(claimObject.id);
    var promise = service.getProfile(claimObject.id);
    return promise;
  };

  service.getProfile = function (idNumber) {
    var promise = $http({
      method: "GET",
      url: "https://localhost:7190/api/Profile/" + idNumber,
    });

    return promise;
  };
}
