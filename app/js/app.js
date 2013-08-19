'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ngRoute', 'ngResource', 'ngUpload']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddController'});
    $routeProvider.when('/dish/:id?', {templateUrl: 'partials/dish.html', controller: 'DishController'});
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

app.constant('serviceEndpoint', 'http://binto.codedeck.com');