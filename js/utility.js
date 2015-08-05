function getSubTotal(price, taxRate) {
  return price *  (100 - taxRate)/100;
}

function getTipAmount (price, tipRate) {
  return price * (tipRate)/100;
}

function getTotal (subTotal, tipAmount) {
  return subTotal + tipAmount;
}

function average (total, count) {
  return total / count;
}

// module.exports = {
//   subTotal: subTotal,
//   tipAmount: tipAmount,
//   total: total,
//   average: average
// };
