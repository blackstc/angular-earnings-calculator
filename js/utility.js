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

Meal.prototype.calcSubTotal = function() {
  this.subTotal = this.mealPrice * (100 + this.taxRate)/100;
  return this.subTotal;
};

Meal.prototype.calcTipAmount = function() {
  this.tipAmount = this.subTotal * this.tipRate/100;
  return this.tipAmount;
};

Meal.prototype.calcTotal = function() {
  this.total = this.subTotal + this.tipAmount;
  return this.total;
};

Meal.prototype.calcTipTotal = function() {
  return tipTotal += this.tipAmount;
};


var Waiter = function(name) {
  this.name = name;
  this.meals = [];
  this.mealCount = 0;
  this.totalTip = 0;
  this.averageTip = 0;
  this.totalSales = 0;
};

Waiter.prototype.addMeal = function (meal) {
  this.meals.push(meal);
};

Waiter.prototype.calcTotalTips = function () {
  var tip = 0;

  for (var i = 0; i < this.meals.length; i++) {
    tip += this.meals[i].tipAmount;
  }
  this.totalTips = tip;
  return tip;
};

Waiter.prototype.calcTotalSales = function () {
  var total = 0;

  for (var i = 0; i < this.meals.length; i++) {
    total += this.meals[i].subTotal;
  }
  this.totalTips = total;
  return total;
};

Waiter.prototype.calcAvgTip = function () {
  return this.calcTotalTips() / this.meals.length;
};

// module.exports = {
//   calcSubTotal: calcSubTotal,
//   tipAmount: tipAmount,
//   total: total,
//   average: average
// };
