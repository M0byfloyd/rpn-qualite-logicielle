export function calculateRNP(expression: Array<any>) {
    let operandList: Array<any> = [];
    const result: Array<any> = [];

    // Retourne syntax si erreur est trouvé
    if(verifErrorExpression(expression)){
        return 'Syntax Error'
    }

    //Pour chaque élément de l'expression
    expression.forEach(function (value: number | string) {
        console.log(typeof  value)

        // Si l'élément est un nombre
        if (typeof value === 'number') {
            //S'il y a deja 2 éléments à calculer (deux opérandes)
            if (operandList.length === 2) {
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

export function verifErrorExpression(expression: Array<any>){
    let operator:number = 0;
    let operand:number = 0;
    expression.forEach( function (element){
        if (typeof element === 'number'){
            operand ++;
        }
        else{
            operator ++;
        }
    });
    return operand != (operator + 1);
}