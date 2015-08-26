var earningsCalculator = angular.module("earningsCalculator", []);

earningsCalculator.controller("earningsController", function($scope, $http) {

  function init() {
    $scope.subtotal = 0;
    $scope.tip = 0;
    $scope.total = 0;
    $scope.totalTip = 0;
    $scope.mealCount = 0;
    $scope.averageTip= 0;
  }

  

  init();

});
