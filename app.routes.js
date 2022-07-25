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
      templateUrl: "./views/login/login.html",
      controller: "LoginController",
    })
    .state("register", {
      url: "/register",
      templateUrl: "./views/register/register.html",
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "./views/profile/profile.html",
    })
    .state("games", {
      url: "/games",
      templateUrl: "./views/games/games.html",
    })
    .state("friends", {
      url: "/friends",
      templateUrl: "./views/friends/friends.html",
    });

  $urlRouterProvider.otherwise("/");
}
