var code = require('../js/utility.js');


describe('subtotal', function() {
  it('should calculate price less taxRate times price', function() {
    expect(code.subTotal(10, 10)).toEqual(9);
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
