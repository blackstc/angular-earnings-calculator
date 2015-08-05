// add scripts

$(document).on('ready', function() {
  var tipTotal = 0;
  var mealCount = 0;


  $("form[name='mealForm']").on("click", "input[type='submit']", function(event) {
    event.preventDefault();

    var mealDetails = {};

    //get values from form
    mealDetails.mealPrice = +$("input[name='meal-price']").val();
    mealDetails.taxRate = +$("input[name='meal-taxrate']").val();
    mealDetails.tipRate = +$("input[name='meal-tiprate']").val();

    //values to add to the DOM
    var subTotal = getSubTotal(mealDetails.mealPrice, mealDetails.taxRate);
    var tipAmount = getTipAmount(mealDetails.mealPrice, mealDetails.tipRate);
    var total = getTotal(subTotal, tipAmount);
    tipTotal += tipAmount;
    mealCount++;
    var averageTip = average(tipTotal, mealCount).toFixed(2);

    var $totalPerCustomer = $('.totals').eq(0).find("p");
    var $runningTotals = $('.totals').eq(1).find("p");
    //appending the specific values to their respective DOM elements
    $totalPerCustomer.eq(0).html("Subtotal: " + subTotal);
    $totalPerCustomer.eq(1).html("Tip: " + tipAmount);
    $totalPerCustomer.eq(2).html("Total: " + total);
    $runningTotals.eq(0).html("Total Tips: " + tipTotal);
    $runningTotals.eq(1).html("Meal count: " + mealCount);
    $runningTotals.eq(2).html("Average tip: " + averageTip);
    $('.form-input').val('');
  });

  $("form[name='mealForm']").on("click", "input[type='button']", function(event) {
    event.preventDefault();
     $("form[name='mealForm']").find("input[type=number]").val("");
   });

  $('input[value=Reset]').on('click', function() {
      $totalPerCustomer.eq(0).html("Subtotal:");
      $totalPerCustomer.eq(1).html("Tip: ");
      $totalPerCustomer.eq(2).html("Total:");
      $runningTotals.eq(0).html("Total Tips:");
      $runningTotals.eq(1).html("Meal count:");
      $runningTotals.eq(2).html("Average tip:");
      $tipTotal = 0;
      mealCount = 0;
  });
});
