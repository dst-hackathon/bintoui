'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DishService', [function() {

    var service = {};

    service.get = function() {

      this.dish = {
        restaurantName: 'Madam-T',
        price: 400000.00,
        imagePath: '/app/images/food1.jpg',
        name: ''
      };

      return this.dish;
    };

    return service;
  }]);
