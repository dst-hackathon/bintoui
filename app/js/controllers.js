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

  }]);