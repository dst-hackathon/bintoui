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
        price: 400000.00 + Math.floor(Math.random() * 100),
        imagePath: '/app/images/food1.jpg',
        name: 'Steamed Rice-skin Dumplings'
      };

      return this.dish;
    };

    return service;
  }]);
