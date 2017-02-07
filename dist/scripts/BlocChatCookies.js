(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === ''){
           $uibModal.open({
               templateUrl: '/templates/username.html',
               size: 'sm',
               animation: true, 
               controller: function($scope, $uibModalInstance, $cookies){
                   $scope.setUsername = function(username){
                       if (username != ''){
                       $cookies.put('blocChatCurrentUser', username);
                       console.log($cookies.get('blocChatCurrentUser'))
                       $uibModalInstance.close();
                       }
                   }
               },
           }); 
        };
        
    }
    angular 
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();