// Task 1
// Make a simple calculator application
// It should have two input fields of type number and four buttons
// Every button should perform the different calculation: SUM, DIFFERENCE, MULTIPLICATION, DIVISION, SQUARE
// You should create a function for each of them and to call it on the appropriate button click
// After clicking the button the result should be display the result in an appropriate <p> tag.


let result = document.getElementById("result");




let buttonSum = document.getElementById("buttonSum");
buttonSum.addEventListener("click",function(){
    
   

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let res =  parseInt(number1) + parseInt(number2);
    result.innerText = `Sum is ${res}` ;
    
});

let buttonDif = document.getElementById("buttonDif");
buttonDif.addEventListener("click",function(){
    
   

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let res =  parseInt(number1) - parseInt(number2);
    result.innerText = `Difference is ${res}` ;
    
});

let buttonDiv = document.getElementById("buttonDiv");
buttonDiv.addEventListener("click",function(){
    
   

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let res =  parseInt(number1) / parseInt(number2);
    result.innerText = `Division is ${res}` ;
    
});

let buttonMult = document.getElementById("buttonMult");
buttonMult.addEventListener("click",function(){
    
   

    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let res =  parseInt(number1) * parseInt(number2);
    result.innerText = `Multiplication is ${res}` ;
    
});

let buttonSqr = document.getElementById("buttonSqr");
buttonSqr.addEventListener("click",function(){
    
   
    let res = 1;
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    for(i = 0; i < parseInt(number2); i++){
         res *=  parseInt(number1);
    }
    


    result.innerText = `${number1} on power of ${number2} is ${res}` ;
    
});