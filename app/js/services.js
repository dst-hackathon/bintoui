'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DishService', ['$resource', function($resource) {

    var service = {};
    var basePath = 'http://binto.codedeck.com'

    var Dish = $resource(basePath + '/dishes/:id.json', {}, {
      suggest: { method: 'GET', url: basePath + '/dishes/suggest.json' },
      list :{ method: 'GET', url: basePath + '/dishes.json', isArray:true }
    });

    service.get = function(id) {
      var dish;
      if(id){
        dish = this.dish = Dish.get({id:id},function(){
            dish.imagePath = basePath + dish.image_code;
        });
      }
      else{
        //suggest
        dish = this.dish = Dish.suggest(function() {
          dish.imagePath = basePath + dish.image_code;
        });  
      }

      return dish;
    };
    
    service.list = function(){
        return Dish.query();
    };

    return service;
  }]);
