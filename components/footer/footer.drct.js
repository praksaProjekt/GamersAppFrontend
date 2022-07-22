angular.module("gamerApp").directive("footer", footer);

function footer() {
    var ddo = {
        templateUrl: "./components/footer/footer.html",
    };

    return ddo;
}
