'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DishService', ['$resource', function($resource) {

    var Dish = $resource('http://binto.codedeck.com/dishes/suggest.json', {}, {
      suggest: { method: 'GET', url: 'http://binto.codedeck.com/dishes/suggest.json' }
    });

    var service = {};

    service.get = function() {

      // this.dish = {
      //   restaurantName: 'Madam-T',
      //   price: 400000.00 + Math.floor(Math.random() * 100),
      //   imagePath: '/app/images/food1.jpg',
      //   name: 'Steamed Rice-skin Dumplings'
      // };

      // return this.dish;

      var dish = this.dish = Dish.suggest(function() {
        dish.imagePath = 'http://binto.codedeck.com/' + dish.image_code.url;
      });

      return dish;
    };

    return service;
  }]);
