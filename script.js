class Calculator {

    constructor(previousOperandElem, currentOperandElem){
        this.previousOperandElem = previousOperandElem;
        this.currentOperandElem = currentOperandElem;
        this.clear();
    }
    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if(number == "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator){

        if(this.currentOperand === "" ) return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute(){

        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)) return
        switch(this.operator){
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "&#247;":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.computation = undefined;
        this.previousOperand = "";

    }

    updateDisplay(){

        this.currentOperandElem.innerText = 
            this.getDisplayNumber(this.currentOperand);

        if(this.operator != null){
            this.previousOperandElem.innerText = `${
            this.getDisplayNumber(this.previousOperand)}  ${this.operator}`;
        }
        else{
            this.previousOperandElem.innerText = "";
        }
    }

getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay 
    if(isNaN(integerDigits)){
        integerDisplay = ''
    }
    else{
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }
        else {
            return integerDisplay;
        }
    }
}




const numberElems = document.querySelectorAll('[data-number]')
const operatorElems = document.querySelectorAll('[data-operator]')
const allClearButton = document.querySelector('[data-allClear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandElem = document.querySelector('[data-previous-operand]')
const currentOperandElem = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandElem, currentOperandElem);


numberElems.forEach( number => {
    number.addEventListener("click", () => {
        calculator.appendNumber(number.innerText)
        calculator.updateDisplay()
    })
})

operatorElems.forEach( operator => {
    operator.addEventListener("click", () => {
        calculator.chooseOperator(operator.innerText)
        calculator.updateDisplay();
    })
})

allClearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})









































// class Calculator {

//     constructor(previousOperandElem, currentOperandElem){
//         this.previousOperandElem = previousOperandElem;
//         this.currentOperandElem = currentOperandElem;
//         this.clear();
//     }


// clear(){
//     this.previousOperand = "";
//     this.currentOperand = "";
//     this.operation = undefined;
// }

// delete(){
//     this.currentOperand = this.currentOperand.toString().slice(0, -1);
// }

// appendNumber(number){
//     if(number === "." && this.currentOperand.includes('.')) return 
//     this.currentOperand = this.currentOperand.toString() + number.toString();
// }

// chooseOperator(operation){
//     if(this.currentOperand === '') return
//     if(this.previousOperand !== ''){
//         this.compute();
//     }
//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = '';

// }

// getDisplayNumber(number){
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay 
//     if(isNaN(integerDigits)){
//         integerDisplay = ''
//     }
//     else{
//         integerDisplay = integerDigits.toLocaleString('en', {
//             maximumFractionDigits: 0})
//         }
//         if(decimalDigits != null) {
//             return `${integerDisplay}.${decimalDigits}`
//         }
//         else {
//             return integerDisplay;
//         }
//     }

// updateDisplay(){
//     this.currentOperandElem.innerText = 
//     this.getDisplayNumber(this.currentOperand);
//     if(this.operation != null){
//         this.previousOperandElem.innerText = 
//         `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`;
//     } else {
//         this.previousOperandElem.innerText = ''
//     }
// }


// compute(){

//     let computation;
//     const prev = parseFloat(this.previousOperand);
//     const curr = parseFloat(this.currentOperand);

//     if(isNaN(prev) || isNaN(curr)) return
    
//     switch(this.operation) {
//         case "+":
//             computation = curr + prev;
//             break;
//         case "-":
//             computation = prev - curr;
//             break;
//         case "*":
//             computation = curr * prev;
//             break;
//         case "&247;":
//             computation = prev / curr;
//             break;  
//         default:
//             return;          
//     }
    
//     this.currentOperand = computation;
//     this.operation = undefined;
//     this.previousOperand = '';
// }

// }


// const numberElems = document.querySelectorAll('[data-number]');
// const operatorElems = document.querySelectorAll('[data-operator]')
// const previousOperandElem = document.querySelector('[data-previous-operand')
// const currentOperandElem = document.querySelector('[data-current-operand')
// const deleteButton = document.querySelector('[data-delete')
// const equalsButton = document.querySelector('[data-equals]')
// const clearElem = document.querySelector('[data-allClear')

// const calculator = new Calculator(previousOperandElem, currentOperandElem)

// numberElems.forEach( numberElem => {
//     numberElem.addEventListener("click", () => {
//         calculator.appendNumber(numberElem.innerText);
//         calculator.updateDisplay();
//     });
// });


// operatorElems.forEach( operatorElem => {
//     operatorElem.addEventListener("click", () => {
//         calculator.chooseOperator(operatorElem.innerText);
//         calculator.updateDisplay();
//     });
// });

// equalsButton.addEventListener("click", button => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// clearElem.addEventListener("click", button => {
//     calculator.clear();
//     calculator.updateDisplay();
// })

// deleteButton.addEventListener("click", button => {
//     calculator.delete();
//     calculator.updateDisplay();
// })