angular.module("app.routes", ["ui.router"]).config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./pages/home/home.html",
    })
    .state("auth", {
      url: "/",
      templateUrl: "./pages/auth/home.html",
    })
    .state("auth.login", {
      url: "/",
      templateUrl: "./pages/home/home.html",
    })
    .state("auth.register", {
      url: "/",
      templateUrl: "./pages/home/home.html",
    });

  $urlRouterProvider.otherwise("/");
}
