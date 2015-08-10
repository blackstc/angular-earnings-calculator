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

Meal.prototype.updateLocalStorage = function (newMeal) {
  //get bills from local storage and add bill to local storage
  var localStorageArray = JSON.parse(localStorage.getItem("bills"));
  localStorageArray.push(newMeal);
  localStorage.setItem("bills", JSON.stringify(localStorageArray));
};

Meal.prototype.updateLocalStorageTotals = function (tipAmount, mealCount, averageTip) {
  var localStorageObj = JSON.parse(localStorage.getItem("earnings"));
  localStorageObj.tips = tipAmount;
  localStorageObj.meals = mealCount;
  localStorageObj.averageTip = averageTip;
  localStorage.setItem("earnings", JSON.stringify(localStorageObj));


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

module.exports = {
  calcSubTotal: calcSubTotal,
  tipAmount: tipAmount,
  total: total,
  average: average
};


//Local storage
function LocalStorage(name, data) {
  this.name = name;
  this.data = data;
}
