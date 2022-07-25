angular.module("app.routes", ["ui.router"]).config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/profile/profile.html",
    })
    .state("login", {
      url: "/login",
      templateUrl: "./pages/auth/login/login.html",
      controller: "LoginController",
    })
    .state("register", {
      url: "/register",
      templateUrl: "./pages/auth/register/register.html",
    });

  $urlRouterProvider.otherwise("/");
}
