app.controller('AddController', function($scope, $routeParams){
  $scope.bingBong = 'Ha ha ha'
  $scope.one = +$routeParams.one;
  $scope.two = +$routeParams.two;
})
