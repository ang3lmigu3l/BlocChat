(function()  {
    function LandingCtrl($scope, Room) {
        $scope.rooms =  Room.all ;
        $scope.newRoom = {};
        
        $scope.addRoom = function() {
            Room.add($scope.newRoom).then(function(data) {
              // error handling goes here
                $scope.newRoom = {};
            });
        }
}
 angular
    .module('blocChat')
    .controller('LandingCtrl', ['$scope', 'Room' , LandingCtrl])
})();