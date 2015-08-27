var earningsCalculator = angular.module("earningsCalculator", []);

earningsCalculator.controller("earningsController", ["$scope", function($scope, $http) {

  //add initial values for input fields
  function init() {
    $scope.subtotal = 0;
    $scope.tip = 0;
    $scope.total = 0;
    $scope.totalTip = 0;
    $scope.mealCount = 0;
    $scope.averageTip= 0;
    }

  function calculateMeals() {
    var meal = new Meal($scope.mealPrice, $scope.taxRate, $scope.tipRate);
    waiter.addMeal(meal);
    $scope.subtotal = meal.calcSubTotal();
    $scope.tip = meal.calcTipAmount();
    $scope.total = meal.calcTotal();
    debugger;
  }

  function calculateWaiterTotals() {
    $scope.averageTip = waiter.calcAvgTip();
    $scope.totalTip = waiter.calcTotalTips();
    $scope.totalSales = waiter.calcTotalSales();
    $scope.mealCount = waiter.meals.length;
  }

  $scope.calculateTotals = function() {
    calculateMeals();
    calculateWaiterTotals();
    console.log("hi");
  };

  var waiter = new Waiter("Charlie");
  init();

}]);
