angular.module('bleAccelerometer.controllers', [])

.controller('StatusCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
