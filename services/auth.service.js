angular.module("app.services", ["angular-jwt"]).factory("auth", [
  "$http",
  "$state",
  function ($http, $state) {
    return {
      login: function (form) {
        $http({
          method: "POST",
          url: "https://localhost:7190/api/auth/login",
          data: form,
          headers: { "Content-Type": "application/json" },
        })
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.data);
            $state.go("profile");
          })
          .catch((error) => {
            console.error(error);
          });
      },

      register: function (form) {
        $http({
          method: "POST",
          url: "https://localhost:7190/api/auth/register",
          data: form,
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
            console.log("hello");
            $state.go("login");
          })
          .catch((error) => {
            console.error(error);
          });
      },

      logout: function () {
        localStorage.removeItem("token");
      },

      isLoggedIn: function () {
        var myToken = localStorage.getItem("token");
        if (myToken) {
          return true;
        } else {
          return false;
        }
      },
    };
  },
]);
