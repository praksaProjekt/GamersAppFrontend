angular.module("gamerApp").service("editProfile", editProfile);

editProfile.$inject = ["$http"];
function editProfile($http) {
  var service = this;

  service.postModel = function (model, sendUrl) {
    var methodType;
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
    console.log(claimObject);

    if (sendUrl === "https://localhost:7190/api/Profile") {
      model.id = claimObject.id;
      methodType = "PUT";
    } else {
      model.userId = claimObject.id;
      methodType = "POST";
    }

    var sending = JSON.stringify(model);
    console.log(sending);
    var response = $http({
      method: methodType,
      url: sendUrl,
      data: sending,
    });
    console.log(sending);
    return response;
  };
}
