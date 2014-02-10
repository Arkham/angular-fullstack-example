'use strict';

angular.module('javascriptApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Message',
        'link': '/message'
      }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
