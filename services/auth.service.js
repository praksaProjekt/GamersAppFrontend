angular.module("app.services", []).factory("auth", [
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
            localStorage.setItem("token", data.data.token);
            $state.go("profile");
          })
          .error((error) => {
            console.error(error);
          });
      },

      register: function (form) {
        $http({
          method: "POST",
          url: "https://localhost:7190/api/User/register",
          data: form,
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
            $state.go("login");
          })
          .error((error) => {
            console.error(error);
          });
      },

      logout: function () {
        localStorage.removeItem("token");

        $http({
          method: "DELETE",
          url: "https://localhost:7190/api/User/register",
          data: form,
          headers: { "Content-Type": "application/json" },
        })
          .then((data) => {
            console.log(data);
            console.log("hello");
          })
          .error((error) => {
            console.error(error);
          });
      },

      isLoggedIn: function () {
        $http
          .get("URL_PLACEHOLDER")
          .then((data) => {
            console.log(data);
            console.log("hello");
          })
          .error((error) => {
            console.error(error);
          });
      },
    };
  },
]);
