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

          console.log("show : "+path);

          image
            .hide()
            .attr('src', path);

          $(elm).children().remove();
          $(elm)
            .append(spinner)
            .append(image);

          if( path && path.length > 0 )
          {
              imagesLoaded(image, function() {
                  spinner.hide();
                  image.show();
              });
          }

        });
      }
    };
      
  }])
  .directive('validate', [function() {

    return {
      link: function(scope, elm, attrs) {

        var doValidation = function(validation) {
          var value = $(elm).val();

          switch(validation) {
            case 'required':
              return !!value;

            case 'number':
              return _.isNumber(value);

            default:
              return false;
          }
        };

        var errorMessage = $(elm).siblings('.error-message');
        errorMessage.hide();

        $(elm).on('input blur change validate', function(event) {
          var validations = attrs.validate;

          $.each(validations.split(' '), function(i, validation) {

            var valid = doValidation(validation);

            $(elm).closest('.form-group').toggleClass('has-error', !valid);
            errorMessage.toggle(!valid);

            return !valid;
            
          });
        });
      }
    };
  }]);
