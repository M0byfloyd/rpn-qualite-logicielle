const operatorList = ['-','+','*','/'];

export function test() {
    console.log('oeriezrpoi')
}
export function calculateRNP(expression:[]) {
    expression.forEach(function (value) {

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

