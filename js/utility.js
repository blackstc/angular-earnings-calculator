var mealCount = 0;
var tipTotal = 0;
var averageTip = 0;

var Meal = function (mealPrice, taxRate, tipRate) {
  this.mealPrice = mealPrice;
  this.taxRate = taxRate;
  this.tipRate = tipRate;
  this.subTotal = 0;
  this.tipAmount = 0;
  this.total = 0;
};

Meal.prototype.calcSubTotal = function(mealPrice, taxRate) {
  this.subTotal = this.mealPrice * (100 + this.taxRate)/100;
};

Meal.prototype.calcTipAmount = function(subTotal, tipRate) {
  this.tipAmount = this.subTotal * this.tipRate/100;
};

Meal.prototype.calcTotal = function(subTotal, tipAmount) {
  this.total = this.subTotal + this.tipAmount;
};

Meal.prototype.calcTipTotal = function(tipAmount) {
  return tipTotal += this.tipAmount;
};

Meal.prototype.calcAverageTip = function(totalTipAmount, mealCount) {
  return averageTip = totalTipAmount / mealCount;
};

Meal.prototype.toDom = function() {

  var $totalPerCustomer = $('.totals').eq(0).find("p");
  var $runningTotals = $('.totals').eq(1).find("p");

  $totalPerCustomer.eq(0).html("Subtotal: " + (this.subTotal.toFixed(2)));
  $totalPerCustomer.eq(1).html("Tip: " + (this.tipAmount.toFixed(2)));
  $totalPerCustomer.eq(2).html("Total: " + (this.total.toFixed(2)));
  $runningTotals.eq(0).html("Total Tips: " + (tipTotal.toFixed(2)));
  $runningTotals.eq(1).html("Meal count: " + mealCount);
  $runningTotals.eq(2).html("Average tip: " + (averageTip.toFixed(2)));
};

var Waiter = function(name) {
  this.name = name;
  this.meals = [];
  this.totalTips = 0;
  this.totalSales = 0;
};

Waiter.prototype.addMeal = function (meal) {
  this.meals.push(meal);
};

Waiter.prototype.totalTip = function () {
  var tip = 0;

  for (var i = 0; i < this.meals.length; i++) {
    tip += this.meals[i].tipAmount;
  }
  this.totalTips = tip;
  return tip;
};

Waiter.prototype.totalSales = function () {
  var total = 0;

  for (var i = 0; i < this.meals.length; i++) {
    total += this.meals[i].subTotal;
  }
  this.totalTips = total;
  return total;
};

module.exports = {
  calcSubTotal: calcSubTotal,
  tipAmount: tipAmount,
  total: total,
  average: average
};
