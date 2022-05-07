let error: boolean | string;

export function calculateRNP(expression: Array<any>): string {
    let operandList: Array<any> = [];
    let result: Array<any> = [];

    expression = checkNegate(expression);

    if(verifErrorExpression(expression)){
        return 'Syntax Error'
    }

    expression.forEach(function (value: number | string) {
        if (typeof value === 'number') {
            if (operandList.length === 2) {
                result.push(operandList[0]);
                operandList[0] = operandList[1];
                operandList[1] = value;

            }
            else {
                operandList.push(value);
            }
        } else {
            if (operandList.length === 2) {
                try {
                    result.push(caculateConvertedExpression(operandList[0], operandList[1], value));
                    operandList = [];
                } catch (errorMessage:any) {
                    error = errorMessage;
                }
            } else {
                result = [...result, ...operandList, value];
                operandList = [];
            }
        }
    });

    if (result.length > 1) {
        return calculateRNP(result);
    }

    return <string>error ?? result[0];
}

export function caculateConvertedExpression(firstOperand: number, secondOperand: number, operator: string): number {
    let result = firstOperand + secondOperand;

    if (secondOperand === 0 && operator === "/") {
        throw 'Cannot divide by zero';
    }

    switch (operator) {
        case '-': {
            result = firstOperand - secondOperand;
            break;
        }
        case '*': {
            result = firstOperand * secondOperand;
            break;
        }
        case '/': {
            result = firstOperand / secondOperand;
        }
    }

    return result;
}

export function verifErrorExpression(expression: Array<any>) {
    let operator: number = 0;
    let operand: number = 0;
    expression.forEach(function (element) {
        if (typeof element === 'number') {
            operand++;
        } else {
            operator++;
        }
    });
    return operand != (operator + 1);
}

export function checkNegate(expressionToCheck: Array<number | string>) {
    // Negate
    return expressionToCheck;
}
