angular.module('mm.addons.local_chatlogs')

.controller('mmaChatlogsListCtrl', function($scope, $stateParams, $mmaLocalChatlogs) {
    $scope.loaded = false;
    return $mmaLocalChatlogs.getConversationList().then(function(chatlist) {
        $scope.chats = chatlist;
        $scope.loaded = true;
    });

});
