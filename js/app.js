var app = angular.module('SinglePage', ['ngRoute']);

app.controller('BigController', function($scope, $route){
  $scope.test = 3;
})

app.config(function($routeProvider){
  $routeProvider
    .when('/add/:one/:two', {
      templateUrl: 'partials/add.html',
      controller: 'AddController'
    })
    .when('/hello', {
      templateUrl: 'partials/hello.html',
      controller: 'HelloController'
    })
})
