(function(){
    function ModalCtrl($uibModal, Room){
        this.openModal = function() {
            var modalInstance  = $uibModal.open({
                animation: true,
                templateUrl : '/templates/modal.html',
                size: 'sm',
                controller: function($scope, $uibModalInstance){
                    $scope.newRoom = {};
                    $scope.cancel = function(){
                        $uibModalInstance.dismiss('cancel');
                        console.log("button clicked");
                    };
                    $scope.create = function(){
                        $uibModalInstance.close($scope.newRoom);
                    };
                },
                
            });
            modalInstance.result.then(function(data){
                    Room.add(data);
            })
        };
        
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})();