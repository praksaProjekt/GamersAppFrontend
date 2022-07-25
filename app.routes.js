angular.module("app.routes", ["ui.router"]).config(RoutesConfig).run(AuthGuard);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
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
    .state("home", {
      url: "/",
      templateUrl: "./views/profile/profile.html",
      controller: "ProfileController",
      resolve: {
        auththenticate: [
          "$q",
          function ($q) {
            if (AuthGuard()) {
              return $q.resolve("AUTH_SUCCESS");
            } else {
              return $q.reject("AUTH_REQUIRED");
            }
          },
        ],
      },
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "./views/profile/profile.html",
      controller: "ProfileController",
      resolve: {
        auththenticate: [
          "$q",
          function ($q) {
            if (AuthGuard()) {
              return $q.resolve("AUTH_SUCCESS");
            } else {
              return $q.reject("AUTH_REQUIRED");
            }
          },
        ],
      },
    })
    .state("games", {
      url: "/games",
      templateUrl: "./views/games/games.html",
      resolve: {
        auththenticate: [
          "$q",
          function ($q) {
            if (AuthGuard()) {
              return $q.resolve("AUTH_SUCCESS");
            } else {
              return $q.reject("AUTH_REQUIRED");
            }
          },
        ],
      },
    })
    .state("friends", {
      url: "/friends",
      templateUrl: "./views/friends/friends.html",
      resolve: {
        auththenticate: [
          "$q",
          function ($q) {
            if (AuthGuard()) {
              return $q.resolve("AUTH_SUCCESS");
            } else {
              return $q.reject("AUTH_REQUIRED");
            }
          },
        ],
      },
    });

  $urlRouterProvider.otherwise("/");
}

function AuthGuard() {
  return localStorage.getItem("token");
}
