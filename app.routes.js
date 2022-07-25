angular.module("app.routes", ["ui.router"]).config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home/home.html",
    })
    .state("login", {
      url: "/login",
      templateUrl: "./views/login/login.html",
      controller: "LoginController",
    })
    .state("register", {
      url: "/register",
      templateUrl: "./views/register/register.html",
      controller: "RegisterController",
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "./views/profile/profile.html",
    })
    .state("friends", {
      url: "/friends",
      templateUrl: "./views/friends/friends.html",
    });

  $urlRouterProvider.otherwise("/");
}
