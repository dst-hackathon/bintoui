'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', 'DishService', function($scope, dishService) {
    $scope.isHome = true;

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
  .controller('AddController', ['$scope', '$location', function($scope, $location) {

    $scope.uploadComplete = function(content, completed) {

      if (completed) {
        resetForm();

        $location.path('/home');
      }

    };

    $scope.onSubmit = function($event) {

      $('input').prop('disabled', true);
      $('[validate]').trigger('validate');

      if ($('.has-error').length > 0) {

        $('#submitBtn').prop('disabled', false);

        return $event.preventDefault();
      }
    };

    function resetForm() {
      $scope.dish = {};

      // TODO: If possible, should be refactored to be another directive
      $('#image').val('');
      $('input').prop('disabled', false);
    }

  }]);