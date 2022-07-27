angular.module("gamerApp").service("editProfile", editProfile);

editProfile.$inject = ["$http"];
function editProfile($http) {
  var service = this;

  service.postModel = function (model) {
    var sending = JSON.stringify(model);
    console.log(sending);
    var response = $http({
      method: "PUT",
      url: "https://localhost:7190/api/Profile",
      data: sending,
    });
    return response;
  };
}
