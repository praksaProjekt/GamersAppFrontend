angular.module("gamerApp").service("getProfile", getProfile);

getProfile.$inject = ["$http", "editProfile"];
function getProfile($http, editProfile) {
  var service = this;

  service.get = function () {
    var id = editProfile.getClaimObjectId();
    console.log(id);
    var promise = service.getProfile(id);
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
