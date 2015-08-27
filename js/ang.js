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

  //calculate the totals for each individual meal and add them to waiters meal array
  function calculateMeals() {
    var meal = new Meal($scope.mealPrice, $scope.taxRate, $scope.tipRate);
    waiter.addMeal(meal);
    $scope.subtotal = meal.calcSubTotal();
    $scope.tip = meal.calcTipAmount();
    $scope.total = meal.calcTotal();
  }

  //calculate the running total for the waiter created
  function calculateWaiterTotals() {
    $scope.averageTip = waiter.calcAvgTip();
    $scope.totalTip = waiter.calcTotalTips();
    $scope.totalSales = waiter.calcTotalSales();
    $scope.mealCount = waiter.meals.length;
  }

  //function to calculate from button click in index file
  $scope.calculateTotals = function() {
    calculateMeals();
    calculateWaiterTotals();
  };

  //create waiter and call initial values
  var waiter = new Waiter("Charlie");
  init();

}]);
