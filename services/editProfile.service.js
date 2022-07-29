angular.module("gamerApp").service("editProfile", editProfile);

editProfile.$inject = ["$http"];
function editProfile($http) {
  var service = this;

  service.postModel = function (model, sendUrl) {
    var methodType;

    var id = service.getClaimObjectId();
    var methodType = service.setMethod(sendUrl);
    model = service.setModel(sendUrl, id, model);
    var sending = JSON.stringify(model);
    var response = $http({
      method: methodType,
      url: sendUrl,
      data: sending,
    });
    return response;
  };

  service.getClaimObjectId = function () {
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
    return claimObject.id;
  };
  service.setMethod = function (sendUrl) {
    if (sendUrl === "https://localhost:7190/api/Profile") {
      methodType = "PUT";
    } else {
      methodType = "POST";
    }
    return methodType;
  };

  service.setModel = function (url, id, model) {
    if (url === "https://localhost:7190/api/Profile") {
      model.id = id;
    } else {
      model.userId = id;
    }
    return model;
  };
}
