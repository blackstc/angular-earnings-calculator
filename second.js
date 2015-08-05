$(document).ready(function() {
  $("input[name=meal-price]").focus();
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
    this.subTotal = this.mealPrice * (100 - this.taxRate)/100;
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
    averageTip = totalTipAmount / mealCount;
  };

  Meal.prototype.toDom = function() {

    var $totalPerCustomer = $('.totals').eq(0).find("p");
    var $runningTotals = $('.totals').eq(1).find("p");

    $totalPerCustomer.eq(0).html("Subtotal: " + this.subTotal);
    $totalPerCustomer.eq(1).html("Tip: " + this.tipAmount);
    $totalPerCustomer.eq(2).html("Total: " + this.total);
    $runningTotals.eq(0).html("Total Tips: " + tipTotal);
    $runningTotals.eq(1).html("Meal count: " + mealCount);
    $runningTotals.eq(2).html("Average tip: " + averageTip);
  };


  $("form[name='mealForm']").on("click", "input[type='submit']", function(event) {
    event.preventDefault();
    mealCount++;


    //get input values and save to variable
    var mealPrice = +$("input[name='meal-price']").val();
    var taxRate = +$("input[name='meal-taxrate']").val();
    var tipRate = +$("input[name='meal-tiprate']").val();

    //create a new Meal object with the variables above.
    var meal1 = new Meal(mealPrice, taxRate, tipRate);

    meal1.calcSubTotal(this.mealPrice, this.taxRate);
    meal1.calcTipAmount(this.subTotal, this.tipRate);
    meal1.calcTotal(this.subTotal, this.tipAmount);
    meal1.calcTipTotal(this.tipAmount);
    meal1.calcAverageTip(tipTotal, mealCount);
    meal1.toDom();

    $('.form-input').val('');
    $("input[name=meal-price]").focus();
  });

  $("form[name='mealForm']").on("click", "input[type='button']", function(event) {
    event.preventDefault();
     $("form[name='mealForm']").find("input[type=number]").val("");
   });

  $('input[value=Reset]').on('click', function() {
    var $totalPerCustomer = $('.totals').eq(0).find("p");
    var $runningTotals = $('.totals').eq(1).find("p");
    $totalPerCustomer.eq(0).html("Subtotal:");
    $totalPerCustomer.eq(1).html("Tip: ");
    $totalPerCustomer.eq(2).html("Total:");
    $runningTotals.eq(0).html("Total Tips:");
    $runningTotals.eq(1).html("Meal count:");
    $runningTotals.eq(2).html("Average tip:");
    tipTotal = 0;
    mealCount = 0;
  });
});
