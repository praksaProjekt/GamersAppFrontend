angular.module("gamerApp").directive("navbar", navbar);

function navbar() {
  var ddo = {
    templateUrl: "./components/navbar/navbar.html",
  };

  return ddo;
}
