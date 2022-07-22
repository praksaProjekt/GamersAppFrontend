angular.module("app.services", []).factory("auth", [
  "$http",
  function ($http) {
    return {
      login: function (form) {
        console.log(form);
        $http
          .post("URL_PLACEHOLDER", form)
          .success(function (data) {
            console.log(data);
            console.log("hello");
          })
          .error(function (error) {
            console.error(error);
          });
      },

      register: function (form) {
        $http
          .post("URL_PLACEHOLDER", form)
          .success(function (data) {
            console.log(data);
            console.log("hello");
          })
          .error(function (error) {
            console.error(error);
          });
      },
    };
  },
]);
