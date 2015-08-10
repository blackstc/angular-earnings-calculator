var code = require('../js/utility.js');

var meal = {mealPrice: 100, taxRate: 10, tipRate: 15, subTotal: 0, tipAmount: 0, total: 0};


describe('subtotal', function() {
  it('should calculate price less taxRate times price', function() {
    expect(code.calcSubTotal(meal.mealPrice, meal.taxRate)).toEqual(90);
  });
});

describe('tipAmount', function() {
  it('should calculate tipAmount based on price and tip rate', function() {
    expect(code.tipAmount(10, 20)).toEqual(2);
  });
});

describe('total', function() {
  it('should calculate total based on subtotal plus tipAmount', function() {
    expect(code.total(100, 20)).toEqual(120);
  });
});

describe('average', function() {
  it('should calculate total divided by count', function() {
    expect(code.average(100, 20)).toEqual(5);
  });
});
