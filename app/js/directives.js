'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('imageLoader', [function() {

    var imageTemplate = '<img class="img-responsive"></img>';
    var spinnerTemplate = '<i class="icon-spinner icon-spin icon-large"></i>';

    return {
      restrict: 'AE',
      link: function(scope, elm, attrs) {

        attrs.$observe('path', function(path) {
          var image = $(imageTemplate);
          var spinner = $(spinnerTemplate);

          console.log(path);

          image
            .hide()
            .attr('src', path);

          $(elm).children().remove();
          $(elm)
            .append(spinner)
            .append(image);

          imagesLoaded(image, function() {
            spinner.hide();
            image.show();
          });

        });
      }
    };
      
  }]);
