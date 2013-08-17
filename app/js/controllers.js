'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', 'DishService', function($scope, dishService) {

    $scope.suggest = function() {
      dishService.get();
    };

  }])
  .controller('SuggestController', ['$scope', 'DishService', '$location', function($scope, dishService, $location) {

    $scope.dish = dishService.dish;
    if (!$scope.dish) {
      $location.path('/home');
    }

    $scope.suggest = function() {

      // TODO: Refactor
      $scope.dish = dishService.get();
    };

  }])
  .controller('AddController', ['$scope', 'DishService', function($scope, dishService) {

  }]);