'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ngRoute', 'ngResource', 'ngUpload']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/suggest', {templateUrl: 'partials/suggest.html', controller: 'SuggestController'});
    $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
