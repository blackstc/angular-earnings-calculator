// add scripts

$(document).on('ready', function() {
  var $tipTotal = 0;
  var $mealCount = 0;

  $("form[name='mealForm']").on("click", "input[type='submit']", function(event) {
    event.preventDefault();

    //get values from form
    var $mealPrice = +$("input[name='meal-price']").val();
    var $taxRate = +$("input[name='meal-taxrate']").val();
    var $tipRate = +$("input[name='meal-tiprate']").val();

    //values to add to the DOM
    var $subTotal = subTotal($mealPrice, $tipRate);
    var $tipAmount = tipAmount($mealPrice, $tipRate);
    var $total = total($mealPrice, $tipRate);
    $tipTotal += $tipAmount;
    $mealCount++;
    var $averageTip = average($tipTotal, $mealCount).toFixed(2);


    //appending the specific values to their respective DOM elements
    $('.totals').eq(0).find("p").eq(0).html("Subtotal: " + $subTotal);
    $('.totals').eq(0).find("p").eq(1).html("Tip: " + $tipAmount);
    $('.totals').eq(0).find("p").eq(2).html("Total: " + $total);
    $('.totals').eq(1).find("p").eq(0).html("Total Tips: " + $tipTotal);
    $('.totals').eq(1).find("p").eq(1).html("Meal count: " + $mealCount);
    $('.totals').eq(1).find("p").eq(2).html("Average tip: " + $averageTip);
    $('.form-input').val('');
  });

  $("form[name='mealForm']").on("click", "input[type='button']", function(event) {
    event.preventDefault();
     $("form[name='mealForm']").find("input[type=number]").val("");
   });


});
