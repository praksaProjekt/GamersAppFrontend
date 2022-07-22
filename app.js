angular
  .module("gamerApp", ["app.routes", "app.services", "app.error"])
  .run(($transitions, $state, $injector) => {
    $transitions.onBefore(
      {
        to: "app.**",
      },
      () => {
        const $window = $injector.get("$window");
        if (!localStorage.getItem("user")) {
          return $state.target("login", $state.transition.params());
        }
        return true;
      }
    );
  });
