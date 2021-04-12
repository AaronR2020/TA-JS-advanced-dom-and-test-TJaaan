function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function sum(a,b) {
  return a+b;
}

function multiply(a,b) {
  return a*b;
}

function power(a,b) {
  return Math.pow(a,b);
}

function factorial(a) {
while(a>1){
  a*=a-1;
}
return a;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
