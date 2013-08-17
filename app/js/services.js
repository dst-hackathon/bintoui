'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DishService', ['$resource', function($resource) {

    var service = {};
    var basePath = 'http://binto.codedeck.com'

    var Dish = $resource(basePath + '/dishes.json', {}, {
      suggest: { method: 'GET', url: basePath + '/dishes/suggest.json' }
    });

    service.get = function() {

      var dish = this.dish = Dish.suggest(function() {
        dish.imagePath = basePath + dish.image_code.url;
      });

      return dish;
    };

    return service;
  }]);
