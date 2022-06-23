let firstNumber = ~~prompt("Enter your first Number: ")
let operator = prompt("Enter an operand: ")
let secondNumber = ~~prompt("Enter your second Number: ")


function Calc() {
    
if (operator=== "+"){
    alert(firstNumber + secondNumber)
}else if(operator=== "-"){
    alert (firstNumber - secondNumber)
}else if (operator === "/"){
    alert  (firstNumber / secondNumber)
}else if (operator ==="*"){
    alert (firstNumber * secondNumber);
}else alert("Invalid operation")


}

Calc()


