export function calculateRNP(expression: Array<any>) {
    let cal: Array<any> = [];
    const result: Array<any> = [];
    expression.forEach(function (value: number | string) {
        if (typeof value === 'number') {
            if (cal.length > 1) {
                result.push(cal[0]);
                cal[0] = cal[1];
                cal[1] = value;
            } else {
                cal.push(value);
            }
        } else {
            if (cal.length === 2) {
                result.push(caculateConvertedExpression(cal[0], cal[1], value));
                cal = [];
            } else {
                result.push(value)
                cal = [];
            }
        }
    });
    if (cal.length > 0) {
        result.concat(cal);
    }
    if (result.length > 1) {
        result[0] = calculateRNP(result);
    }
    return result[0];
}

export function caculateConvertedExpression(firstN: number, secondN: number, operator: string): number {
    let result = firstN + secondN;
    switch (operator) {
        case '-': {
            result = firstN - secondN;
            break;
        }
        case '*': {
            result = firstN * secondN;
            break;
        }
        case '/': {
            result = firstN / secondN;
        }
    }
    return result;
}

