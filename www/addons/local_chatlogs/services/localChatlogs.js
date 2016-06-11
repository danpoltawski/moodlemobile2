angular.module('mm.addons.local_chatlogs')


.factory('$mmaLocalChatlogs', function($q, $mmSite, $mmFS, $mmUtil, $mmSitesManager) {
    var self = {};

    /**
     * Get chatlogs list
     *
     * @return {Promise}        Promise resolved when the Certificate is retrieved.
     */
    self.getConversationList = function() {
        var params = {};
        var preSets = {getFromCache: false};

        return $mmSite.read('local_chatlogs_get_conversation_list', params, preSets).then(function(response) {
            if (response.conversations) {
                return response.conversations
            }
            return $q.reject();
        });
    };

    self.getConversationMessages = function(conversationid) {
        var params = {conversationid: conversationid};
        var preSets = {getFromCache: false};

        return $mmSite.read('local_chatlogs_get_conversation_messages', params, preSets).then(function(response) {
            if (response.messages) {
                return response.messages
            }
            return $q.reject();
        });
    };

    return self;
});
