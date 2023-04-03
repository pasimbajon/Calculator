let numberOne;
let numberTwo;
let state;
let decimals;
let numbers = [];
const operators = ['+','-','x','÷','='];
let operator;
function clearEntry(){
    document.getElementById('current_display').value=null;
    numberOne=0;
    for(counter=0;counter<=decimals+1;counter++){
        numbers.pop()
    }
    decimals=0;
}
function clearInput(){
    document.getElementById('current_display').value=null;
    document.getElementById('previous_display').value=null;
    numberOne=0;
    numberTwo=0;
    for(counter=0;counter<=decimals+1;counter++){
        numbers.pop()
    }
    decimals=0;
}
function toDisplayPlus(current_input){
    numberOne=current_input;
    if(checkInput()){
        operator=0;
        document.getElementById('previous_display').value= numberOne + operators[0];
    }
}
function toDisplayMinus(current_input){
    numberOne=current_input;
    if(checkInput()){
        operator=1;
        document.getElementById('previous_display').value= numbersOne + operators[1];
    }
}
function toDisplayMultipy(current_input){
    numberOne=current_input;
    if(checkInput()){
        operator=2;
        document.getElementById('previous_display').value= numberOne + operators[2];
    }
}
function toDisplayDivide(current_input){
    numberOne=current_input;
    if(checkInput()){
        operator=3;
        document.getElementById('previous_display').value= numberOne + operators[3];
    }
    
}
function getResult(current_input){
    numberTwo=current_input;
    var result;
    if(checkInput()){
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
}
function checkInput(){
    if(numberOne  >= 0 || numberOne <= 0){
        return true
    }else {
        return false
    }
}
function toThePower(current_input){
    numberOne=current_input;
    if(checkInput()){
       var result = numberOne * numberOne;
        document.getElementById('previous_display').value= numberOne + operators[4];
        document.getElementById('current_display').value= result; 
    }
    
}
function toDivieByOne(current_input){
    numberOne=current_input;
    if(checkInput()){
        var result = 1 / numberOne;
        document.getElementById('previous_display').value= '1' + '/' + numberOne + operators[4];
        document.getElementById('current_display').value= result;
    }
    
}
function inputNumbers(current_input){
    numbers.push(current_input);
    document.getElementById('current_display').value+=number[decimals];
    decimals++;
}