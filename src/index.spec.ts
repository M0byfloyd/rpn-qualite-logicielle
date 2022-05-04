// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {caculateConvertedExpression, calculateRNP} from "./index";
expect.extend(matchers);

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

describe('Test calculateRNP()',()=> {
  it('test if is not a string',()=> {
    //GIVEN
    const expression = [1, 2, '-'];

    //WHEN
    const actual = calculateRNP(expression);

    //THEN
    const expected = -1;
    expect(actual).toEqual(expected)
  });
});

describe('Test calculateRNP() 2eme',()=> {
  it('test if is not a string',()=> {
    //GIVEN
    const expression = [1, 2, '+', 4, '*'];

    //WHEN
    const actual = calculateRNP(expression);

    //THEN
    const expected = -3;
    expect(actual).toEqual(expected)
  });
});

