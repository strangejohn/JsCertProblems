let cashType = [
  { name: "ONE HUNDRED", amount: 100.0 },
  { name: "TWENTY", amount: 20.0 },
  { name: "TEN", amount: 10.0 },
  { name: "FIVE", amount: 5.0 },
  { name: "ONE", amount: 1.0 },
  { name: "QUARTER", amount: 0.25 },
  { name: "DIME", amount: 0.1 },
  { name: "NICKEL", amount: 0.05 },
  { name: "PENNY", amount: 0.01 }
];
//function starts here
function checkCashRegister(price, cash, cid){
  let output = {status: null, change: []};
  let change = cash-price;
  let register = cid.reduce(
    function(x, y){
      x.total += y[1];
      x[y[0]] = y[1];
      return x;},
    { total: 0 }
  );
//register.total=parseFloat(register.total).toFixed(2);//browser not adding correctly, .001... off
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  };
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  };
  let changeArr = cashType.reduce(function(account, currency) {
    let value = 0;
    while (register[currency.name] > 0 && change >= currency.amount) {
      change -= currency.amount;
      register[currency.name] -= currency.amount;
      value += currency.amount;
      change = Math.round(change * 100) / 100;//fixed parseInt returning string not #
    }
    if (value > 0) {
      account.push([currency.name, value]);
    }
    return account;
  }, []);
  if (changeArr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = changeArr;
  return output;
}
//function ends here
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])