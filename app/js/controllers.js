'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeController', [function() {

  }])
  .controller('SuggestController', ['$scope', function($scope) {
    $scope.dish = {
      restaurantName: 'Madam-T',
      price: 400000,
      imagePath: '/app/images/food1.jpg',
      name: ''
    };
  }]);