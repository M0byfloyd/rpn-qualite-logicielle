export function calculateRNP(expression: Array<any>) {
    let operandList: Array<any> = [];
    const result: Array<any> = [];

    //Pour chaque élément de l'expression
    expression.forEach(function (value: number | string) {
        console.log(typeof  value)

        // Si l'élément est un nombre
        if (typeof value === 'number') {
            //Si il ne manque pas d'élément pour un calcul (deux opérandes)
            if (operandList.length > 1) {
                result.push(operandList[0]);
                operandList[0] = operandList[1];
                operandList[1] = value;

            }
            // Si c'est le premier on push direct dans le tableau de calcul
            else {
                operandList.push(value);
            }
        } else {
            // Si le calcul a deux opérandes
            if (operandList.length === 2) {
                //On calcule avec ces deux opérandes et la valeur (qui est ici l'opérateur)
                result.push(caculateConvertedExpression(operandList[0], operandList[1], value));
                operandList = [];
            } else {
                result.push(value)
                operandList = [];
            }
        }
    });

    if (operandList.length > 0) {
        result.concat(operandList);
    }
    if (result.length > 1) {
        result[0] = calculateRNP(result);
    }

    return result[0];
}

export function caculateConvertedExpression(firstOperand: number, secondOperand: number, operator: string): number {
    let result = firstOperand + secondOperand;

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

