let firstNumber = ~~prompt("Enter your first Number: ")
let operator = prompt("Enter an operand: ")
let secondNumber = ~~prompt("Enter your second Number: ")




function Calc() {
    
if (operator=== "+"){
    alert(`${firstNumber} ${operator} ${secondNumber}\n Answer = ${firstNumber + secondNumber}`)
}else if(operator=== "-"){
    alert(`${firstNumber} ${operator} ${secondNumber}\n Answer= ${firstNumber - secondNumber}`)
}else if (operator === "/"){
    alert(`${firstNumber} ${operator} ${secondNumber}\n Answer = ${firstNumber / secondNumber}`)
}else if (operator ==="*"){
    alert(`${firstNumber} ${operator} ${secondNumber}\n Answer= ${firstNumber * secondNumber}`);
}else alert("Invalid operation")


alert("Reload the page for another calculation")


}

Calc()


