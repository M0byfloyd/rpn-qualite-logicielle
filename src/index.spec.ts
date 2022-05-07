// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {caculateConvertedExpression, calculateRNP, verifErrorExpression} from "./index";
expect.extend(matchers);

describe('Batterie de test', function () {
  describe('Test caculateConvertedExpression()',()=> {
    it('Calculate basic expression', () => {
      //GIVEN

      //WHEN
      const actual = caculateConvertedExpression(7 , 3, '*');

      //THEN
      const expected = 21;
      expect(actual).toEqual(expected)
    });
  });

  describe('Test verifErrorExpression()',()=> {
    it('Test without error', () => {
      //GIVEN

      //WHEN
      const actual = verifErrorExpression([7 , 3, '*']);

      //THEN
      const expected = false;
      expect(actual).toEqual(expected)
    });

    it('Test with error', () => {
      //GIVEN

      //WHEN
      const actual = verifErrorExpression([7 , 3, '*', '*']);

      //THEN
      const expected = true;
      expect(actual).toEqual(expected)
    });

    it('Test with error', () => {
      //GIVEN

      //WHEN
      const actual = verifErrorExpression([7 , 3, 7 , 3, '*', '*']);

      //THEN
      const expected = true;
      expect(actual).toEqual(expected)
    });

  });

  describe('Test calculateRNP()',()=> {
    it('Test negate',()=> {
      //GIVEN
      const expression = [1, 'negate'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 12;
      expect(actual).toEqual(expected)
    });

    it('Test addition',()=> {
      //GIVEN
      const expression = [10, 2, '+'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 12;
      expect(actual).toEqual(expected)
    });

    it('Test addition',()=> {
      //GIVEN
      const expression = [14, 8, '+'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 22;
      expect(actual).toEqual(expected)
    });

    it('Test minus',()=> {
      //GIVEN
      const expression = [1, 2, '-'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = -2;
      expect(actual).toEqual(expected)
    });

    it('Test multiplication',()=> {
      //GIVEN
      const expression = [10, 2, '*'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 20;
      expect(actual).toEqual(expected)
    });

    it('Test addition and multiplication',()=> {
      //GIVEN
      const expression = [1, 2, '+', 4, '*'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 12;
      expect(actual).toEqual(expected)
    });

    it('Test multiplication and addition',()=> {
      //GIVEN
      const expression = [1, 2, '*', 4, '+'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = 6;
      expect(actual).toEqual(expected)
    });

    it('Test mix',()=> {
      //GIVEN
      const expression = [3, 6, 1, '+', 2, '*', 4, '+', '-'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = -15;
      expect(actual).toEqual(expected)
    });

    it('Test impossible to calculate',()=> {
      //GIVEN
      const expression = [3, 6, 1, '+', 2, '*', 0, '*', '/'];

      //WHEN
      const actual = calculateRNP(expression);

      //THEN
      const expected = "Cannot divide by zero";
      expect(actual).toEqual(expected)
    });

  });

})

