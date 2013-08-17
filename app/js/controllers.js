'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', 'DishService', function($scope, dishService) {

    $scope.suggest = function() {
      dishService.get();
    };

  }])
  .controller('ViewController', ['$scope', 'DishService', '$location', '$routeParams',
      function($scope, dishService, $location, $routeParams) {

    $scope.dish = dishService.dish;
    if (!$scope.dish && !$routeParams.id) {
      $location.path('/home');
    }
    
    if($routeParams.id){
      $scope.dish = dishService.get($routeParams.id);
    }
    
    $scope.suggest = function() {

      // TODO: Refactor
      $scope.dish = dishService.get($routeParams.id);
    };

  }])
  .controller('AddController', ['$scope', 'DishService', function($scope, dishService) {

  }]);