function subTotal(price, taxRate) {
  return price *  (100 - taxRate)/100;
}

function tipAmount (price, tipRate) {
  return price * (tipRate)/100;
}

function total (price, tip) {
  return price + tip;
}

function average (total, count) {
  return total / count;
}
