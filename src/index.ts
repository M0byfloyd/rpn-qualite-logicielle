const operatorList = ['-','+','*','/'];

export function test() {
    console.log('oeriezrpoi')
}
export function calculateRNP(expression:[]) {
    let cal = [];
    expression.forEach(function (value) {
        if(typeof value === 'number'){
            cal.push(value);
        }
        if else (typeof value === 'string'){
            if (cal.length === 2){
                caculateConvertedExpression(cal[0],cal[1],value);
            }
            else {

            }
        }
    });
}

export function caculateConvertedExpression(firstN:number, secondN:number, operator:string ):number {
    switch (operator) {
        case '+': {
            return firstN + secondN;
        }
        case '-': {
            return firstN - secondN;
        }
        case '*': {
            return firstN * secondN;
        }
        case '/': {
            return firstN / secondN;
        }
    }
}

export const calculator = Object.freeze({
    test:test(),
})

