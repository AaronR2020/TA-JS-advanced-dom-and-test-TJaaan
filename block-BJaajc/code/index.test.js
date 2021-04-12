const testing=require('./index');
test(`the full name`,()=>{expect(testing.getfullname("aaron","rebelo")).toBe("aaron rebelo")});
test(`inputString`,()=>{expect(testing.isPalindrome(111)).toBe(true)});
test(`inputString`,()=>{expect(testing.getCircumfrence(7)).not.toBe(44)});
test(`inputString`,()=>{expect(testing.getArea(7)).not.toBe(164)});
