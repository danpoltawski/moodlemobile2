angular.module('mm.addons.local_chatlogs')

.factory('$mmaLocalChatlogsHandlers', ["$mmCourse", "$state", function($mmCourse, $state) {
  var self = {};

  self.isEnabled = function() {
      return true;
  };

  self.isEnabledForUser = function(user, courseId) {
     return true;
  };

  self.sideMenuNav = function() {

      var self = {};

      /**
       * Check if handler is enabled.
       *
       * @return {Boolean} True if handler is enabled, false otherwise.
       */
      self.isEnabled = function() {
          return true;
      }
      /**
       * Get the controller.
       *
       * @return {Object} Controller.
       */
      self.getController = function() {

          /**
           * Side menu nav handler controller.
           *
           * @module mm.addons.notifications
           * @ngdoc controller
           * @name $mmaNotificationsHandlers#sideMenuNav:controller
           */
          return function($scope) {
              $scope.icon = 'ion-bug';
              $scope.title = 'Developer Chatlogs';
              $scope.state = 'site.local_chatlogs-list';
          };
      }

      return self;
  };

  return self;
}]);
