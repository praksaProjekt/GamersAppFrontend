angular.module("gamerApp").controller("GamesController", [
  "$scope",
  "editProfile",

  function ($scope, editProfile) {
    var games = this;

    games.gamesData = {};

    games.model = {
      userId: 0,
      gameId: 0,
      gamerTag: "",
    };

    games.addGame = function (gamesId) {
      games.model.gameId = gamesId;
      games.model.userId = editProfile.getClaimObjectId();
      console.log(games.model.userId);
      console.log(games.model.gameId);
    };
  },
]);
