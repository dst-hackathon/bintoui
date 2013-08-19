'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DishService', ['$resource', 'serviceEndpoint', function($resource, serviceEndpoint) {

    var Dish = $resource(serviceEndpoint + '/dishes/:id.json', {}, {
      suggest: { method: 'GET', url: serviceEndpoint + '/dishes/suggest.json' },
      list :{ method: 'GET', url: serviceEndpoint + '/dishes.json', isArray:true }
    });

    var service = {};

    service.list = Dish.query;
    
    service.get = function(id) {

      var func = (function() {
        if (id) {
          return _.partial(Dish.get, { id: id });
        } else {
          return Dish.suggest;
        }
      })();

      var dish = service.dish = func(function() {
        dish.imagePath = serviceEndpoint + dish.image_code;
      });

      return dish;
    };

    return service;
  }]);
