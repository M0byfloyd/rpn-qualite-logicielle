// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {caculateConvertedExpression, calculateRNP, convertExpression} from "./index";
expect.extend(matchers);

describe('Test calculateRNP()',()=> {
  it('test if is not a string',()=> {
    //GIVEN
    const expression = 145

    //WHEN
    const actual = calculateRNP(expression);

    //THEN
    const expected = 'Expression must be a string';
    expect(actual).toEqual(expected)
  });
});

describe('Test convertExpression()',()=> {
  it('Get basic converted expression', () => {
    //GIVEN
    const expression = '12 +'

    //WHEN
    const actual = convertExpression(expression);

    //THEN
    const expected = ['1', '2', ' ', '+'];
    expect(actual).toEqual(expected)
  });
});

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
    const expression = ['1', '2', '+', '2', '*'];

    //WHEN
    const actual = calculateRNP(expression);

    //THEN
    const expected = '3';
    expect(actual).toEqual(expected)
  });
});

