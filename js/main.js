$(document).ready(function() {
  $("input[name=meal-price]").focus();


  $("form[name='mealForm']").on("click", "input[type='submit']", function(event) {
    event.preventDefault();
    mealCount++;



    //get input values and save to variable
    var mealPrice = +$("input[name='meal-price']").val();
    var taxRate = +$("input[name='meal-taxrate']").val();
    var tipRate = +$("input[name='meal-tiprate']").val();

    //create a new Meal object with the variables above.
    var meal = new Meal(mealPrice, taxRate, tipRate);

    meal.calcSubTotal(this.mealPrice, this.taxRate);
    meal.calcTipAmount(this.subTotal, this.tipRate);
    meal.calcTotal(this.subTotal, this.tipAmount);


    var tipTotal = meal.calcTipTotal(this.tipAmount);
    var avgTip = meal.calcAverageTip(tipTotal, mealCount);


    $('.form-input').val('');

    //return focus to the first input field on the form
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
