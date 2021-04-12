const calc=require("./calculator.js");

test("adding",()=>{expect(calc.add(1,2).toBe(3))});
test("fact",()=>{expect(calc.factorial(3).toBe(6))});
test("sub",()=>{expect(calc.subtract(4,1).toBe(3))});
test("sum",()=>{expect(calc.sum(1,2).toBe(3))});
test("mult",()=>{expect(calc.multiply(1,2).toBe(2))});
test("pow",()=>{expect(calc.power(3,2).toBe(9))});