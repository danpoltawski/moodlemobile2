angular.module('mm.addons.local_chatlogs', [])


.config(function($stateProvider, $mmSideMenuDelegateProvider) {

    $stateProvider

    .state('site.local_chatlogs-list', {
           url: '/local_chatlogs/list',
           views: {
               'site': {
                   templateUrl: 'addons/local_chatlogs/templates/list.html',
                   controller: 'mmaChatlogsListCtrl'
               }
           }
       })

       .state('site.local_chatlogs-chat', {
        url: '/local_chatlogs/chat',
        views: {
            'site': {
                templateUrl: 'addons/local_chatlogs/templates/chat.html',
                controller: 'mmaChatlogsChatCtrl'
            }
        },
        params: { conversationid: null }
    });


    // Register side menu addon.
    $mmSideMenuDelegateProvider.registerNavHandler('mmaLocalChatlogs', '$mmaLocalChatlogsHandlers.sideMenuNav', 10);
});
