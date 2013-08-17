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

    // $scope.loadingImage = true;
    // $scope.$on('$viewContentLoaded', function() {
    //   imagesLoaded(document.querySelector('.dish-image'), function(instance) {
    //     $scope.loadingImage = false;

    //     console.log(instance);
    //   });
    // });


    $scope.suggest = function() {

      // TODO: Refactor
      $scope.dish = dishService.get();
    };

  }]);