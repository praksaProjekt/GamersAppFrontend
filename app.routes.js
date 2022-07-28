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
    .state("forgot-password", {
      url: "/forgot-password",
      templateUrl: "./views/forgot-password/forgotPassword.html",
      controller: "RegisterController",
    })
    .state("profile", {
      url: "/profile",
      templateUrl: "./views/profile/showProfile.html",
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
      controller: "FriendsController",
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
  return true;
}
