angular.module('mm.addons.local_chatlogs')

.controller('mmaChatlogsChatCtrl', function($scope, $stateParams, $mmaLocalChatlogs) {
    var conversationid = $stateParams.conversationid;

    $scope.title = "Chatlogs";
    $scope.loaded = false;
    $scope.messages = [];
    return $mmaLocalChatlogs.getConversationMessages(conversationid).then(function(chatlist) {
        $scope.messages = chatlist;
        $scope.loaded = true;
    });
});
