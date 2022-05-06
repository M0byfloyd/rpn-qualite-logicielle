let error:boolean|string;

export function calculateRNP(expression: Array<any>): string | boolean {
    let operandList: Array<any> = [];
    let result: Array<any> = [];

    // Retourne syntax si erreur est trouvé
    if(verifErrorExpression(expression)){
        return 'Syntax Error'
    }

    // Pour chaque élément de l'expression
    expression.forEach(function (value: number | string) {

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
                // On check si l'operation est possible
                let check = checkOperation(operandList[0], operandList[1], value);
                if (check === true){
                    //On calcule avec ces deux opérandes et la valeur (qui est ici l'opérateur)
                    result.push(caculateConvertedExpression(operandList[0], operandList[1], value));
                    operandList = [];
                }
                else {
                    error = check;
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
    return error ?? result[0];
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

export function checkOperation(firstOperand: number, secondOperand: number, operator: string): boolean|string
{
    if (operator === '/' && secondOperand === 0){
        return 'Calculation not possible';
    }
    return true;
}
