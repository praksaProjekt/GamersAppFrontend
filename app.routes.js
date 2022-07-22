angular.module("app.routes", ["ui.router"]).config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./pages/home/home.html",
    })
    .state("login", {
      url: "/login",
      templateUrl: "./pages/auth/login/login.html",
      controller: "LoginController",
    })
    .state("register", {
      url: "/register",
      templateUrl: "./pages/home/home.html",
    });

  $urlRouterProvider.otherwise("/");
}
