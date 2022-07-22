angular.module("app.services", []).factory("auth", [
  function () {
    return {
      login: function () {
        console.log("login");
      },

      register: function () {
        console.log("register");
      },
    };
  },
]);
