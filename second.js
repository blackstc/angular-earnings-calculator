$(document).ready(function() {
  $("input[name=meal-price]").focus();
    //check to see if object exists
      //if it doesnt exist add LocalStorage instance
  if (!localStorage.getItem("bills")) {
    localStorage.setItem("bills", JSON.stringify([]));
  }
  if (!localStorage.getItem("earnings")) {
    localStorage.setItem("earnings", JSON.stringify({tips: 0, meals: 0, averageTip: 0}));
  }

  //get values from local storage
  var storedTotals = JSON.parse(localStorage.getItem("earnings"));
  //update dom with earnings values
  var $runningTotals = $('.totals').eq(1).find("p");
  $runningTotals.eq(0).html("Total Tips:" + storedTotals.tips);
  $runningTotals.eq(1).html("Meal count:" + storedTotals.meals);
  $runningTotals.eq(2).html("Average tip:" + storedTotals.averageTip);


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

    meal.updateLocalStorage(meal);

    var tipTotal = meal.calcTipTotal(this.tipAmount);
    var avgTip = meal.calcAverageTip(tipTotal, mealCount);
    meal.toDom();

    //update earnings with the totals in local storage
    meal.updateLocalStorageTotals(tipTotal, mealCount, avgTip);

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
