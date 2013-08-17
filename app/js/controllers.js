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

    $scope.uploadComplete = function(content, completed) {

      console.log(completed);
      if (completed) {
        $scope.dish = {};

        // TODO: If possible, should be refactored to be another directive
        $('#image').val('');
      }

    };

    $scope.validate = function($event) {

      $('[validate]').trigger('validate');

      if ($('.has-error').length > 0) {

        $('#submitBtn').prop('disabled', false);

        return $event.preventDefault();
      }
    };

  }])
  .controller('ListController', ['$scope','DishService', function($scope,dishService) {
    $scope.dishes = dishService.list();
    
    $scope.refresh = function() {
        $scope.dishes = dishService.list();
    };

  }]);