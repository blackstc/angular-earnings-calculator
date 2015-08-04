function subTotal(price, taxRate) {
  return price *  (100 - taxRate)/100;
}

function tipAmount (price, tipRate) {
  return price * (tipRate)/100;
}

function total (subTotal, tipAmount) {
  return subTotal + tipAmount;
}

function average (total, count) {
  return total / count;
}

module.exports = {
  subTotal: subTotal,
  tipAmount: tipAmount,
  total: total,
  average: average
};
