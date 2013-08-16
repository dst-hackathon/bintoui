'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', 'DishService', function($scope, dishService) {

    $scope.suggest = function() {
      dishService.get();
    };

  }])
  .controller('SuggestController', ['$scope', 'DishService', function($scope, dishService) {

    $scope.dish = dishService.dish;

    $scope.suggest = function() {

      // TODO: Refactor
      $scope.dish = dishService.get();
    };   

  }]);