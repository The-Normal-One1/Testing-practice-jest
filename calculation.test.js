const Calculator = require('./calculation.js')

  describe('The value', () => {
    test('addition test', ()=>{
        expect(Calculator.addition(8, 5)).toBe(13)
        expect(Calculator.addition(-25, 25)).toBe(0)
        expect(Calculator.addition(-15, 18)).toBe(3)
        })
  });

  describe('The value', () => {
    test('subtraction test', ()=>{
        expect(Calculator.subtraction(8, 5)).toBe(3)
        expect(Calculator.subtraction(8, 8)).toBe(0)
        expect(Calculator.subtraction(85, 100)).toBe(-15)
        })
  });


  describe('The value', () => {
    test('Multiplication test', ()=>{
        expect(Calculator.multiplication(5, 5)).toBe(25)
        expect(Calculator.multiplication(-1, 9)).toBe(-9)
        expect(Calculator.multiplication(-1,-9)).toBe(9)
        })
  });

  describe('The value', () => {
    test('division test', ()=>{
        expect(Calculator.division(50, 5)).toBe(10)
        expect(Calculator.division(-50,5)).toBe(-10)
        expect(Calculator.division(-50,-5)).toBe(10)
        })
  });





