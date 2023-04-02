let numberOne;
let numberTwo;
let state;
const operators = ['+','-','x','÷','='];
let operator;
function clearEntry(){
    document.getElementById('current_display').value=null;
    numberOne=0;
}
function clearInput(){
    document.getElementById('current_display').value=null;
    document.getElementById('previous_display').value=null;
    numberOne=0;
    numberTwo=0;
}
function toDisplayPlus(current_input){
    numberOne=current_input;
    operator=0;
    document.getElementById('previous_display').value= numberOne + operators[0];
}
function toDisplayMinus(current_input){
    numberOne=current_input;
    operator=1;
    document.getElementById('previous_display').value= numberOne + operators[1];
}
function toDisplayMultipy(current_input){
    numberOne=current_input;
    operator=2;
    document.getElementById('previous_display').value= numberOne + operators[2];
}
function toDisplayDivide(current_input){
    numberOne=current_input;
    operator=3;
    document.getElementById('previous_display').value= numberOne + operators[3];
}
function getResult(current_input){
    numberTwo=current_input;
    var result;
    if(operator == 0){
        result = numberOne + numberTwo;
    }
    else if (operator == 1){
        result = numberOne - numberTwo;
    }
    else if (operator == 2){
        result = numberOne * numberTwo;
    }
    else if (operator == 3){
        result = numberOne / numberTwo;
    }
    else{
        result = 0;
    }
    document.getElementById('previous_display').value= numberOne + operators[operator] + numberTwo + operators[4];
    document.getElementById('current_display').value= result;
}