(function()  {
    function LandingCtrl($scope, Room, Message, $cookies) {
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        $scope.rooms =  Room.all ;
        $scope.newRoom = {};
        $scope.currentRoom = null;
        $scope.messages = {};
        $scope.newMessage = {};
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
            
        };
        
        $scope.addRoom = function() {
            Room.add($scope.newRoom).then(function(data) {
              // error handling goes here
                $scope.newRoom = {};
            });
        };
        
        $scope.addMessage= function(){
            var newMessage = {
                username: $scope.currentUser,
                roomId: $scope.currentRoom.$id,
                content: $scope.newMessage.content,
                sentAt: firebase.database.ServerValue.TIMESTAMP
            }

            Message.add(newMessage);
            $scope.newMessage = {};
        };
    }
     angular
        .module('blocChat')
        .controller('LandingCtrl', ['$scope', 'Room', 'Message', '$cookies' , LandingCtrl])
})();