(function()  {
    function LandingCtrl($scope, Room, Message) {
        $scope.rooms =  Room.all ;
        $scope.newRoom = {};
        $scope.currentRoom = {};
        $scope.messages = {};
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            
        };
        
        $scope.addRoom = function() {
            Room.add($scope.newRoom).then(function(data) {
              // error handling goes here
                $scope.newRoom = {};
            });
        }
}
 angular
    .module('blocChat')
    .controller('LandingCtrl', ['$scope', 'Room', 'Message' , LandingCtrl])
})();