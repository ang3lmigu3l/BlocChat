(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        var addRoom = function(room) {
            room.createdAt = firebase.database.ServerValue.TIMESTAMP;
            return rooms.$add(room);
        }
        
        return {
            all : rooms,
            add: addRoom
        };
    }
    angular 
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
