const calculator = require('./calculator');
const x = 13;
const y = 5;
test('Add numbers using the add method', () => {
     expect(calculator.add(x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
     expect(calculator.subtract(x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
     expect(calculator.multiply(x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
     expect(calculator.divide(x, y)).toBe(2.6)
});
test('Find the remainder of dividing numbers using the modulo method', () => {
     expect(calculator.modulo(x, y)).toBe(3)
});

















/* const calc=require('./calculator.js');

test("adding",()=>{
    expect( calc.add(1,2) ).toBe(3)
});

test("fact",()=>{
    expect(calc.factorial(3)).toBe(6)
});

test("sub",()=>{
    expect(calc.subtract(4,1)).toBe(3)
});

test("sum",()=>{
    expect(calc.sum(1,2)).toBe(3)
});

test("mult",()=>{
    expect(calc.multiply(1,2)).toBe(2)
});

test("pow",()=>{
    expect(calc.power(3,2)).toBe(9)
});

test("remove Value form array",()=>{
    expect(calc.removeFromArray([1,2,3],2)).toBe([1,3])
}); */