angular.module("gamerApp").directive("navbar", navbar);

function navbar() {
  console.log("uslo");
  var ddo = {
    templateUrl: "./components/navbar/navbar.html",
  };
  console.log(ddo.templateUrl);
  return ddo;
}
