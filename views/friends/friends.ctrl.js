angular.module("gamerApp").controller("friendsController", function ($scope) {
    var friends = [
        "John", "Paul", "Lucie", "Martin", "Frank", "Charlie"
    ];
    $scope.friends = friends;
    $scope.remove = function (friend) {
        var index = $scope.friends.indexOf(friend);
        $scope.friends.splice(index, 1);
        $scope.numberOf = $scope.numberOf - 1;
    };

    $scope.addNewFriend = function () {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend = '';
        $scope.numberOf = $scope.numberOf + 1;
    };
    $scope.numberOf = $scope.friends.length;

});


