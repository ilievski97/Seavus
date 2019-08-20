// Task 3
// Write a JavaScript program that will serve as a bingo application.
// Make an array of numbers from 1 till 37 that you will display it in a <ol> tag
// Make another array that will have only 5 numbers and it will serve you as a winning combination
// There should be 5 input fields for inserting numbers and a button for submitting the bingo combination
// You should get the values from the input fields and check if all of the inserted numbers are equal to the winning combination and display it in a h1 tag winning message “You won 1000000$! Congrats!”
// Else print “More luck next time!”


allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];


let elementAllNumbers = document.getElementById("allNumbers");
let html = "";
for(i=1; i<38; i++){
     html +=  "<li> " +  i  +"</li>";
     elementAllNumbers.innerHTML =html;
    
};







function getNewCombo(){
    let newCombo = [];
    for (i=0; i<5; i++){
        newCombo.push(Math.floor((Math.random() * 37) + 1));
    }
    return newCombo;
}

function listNewCombo(arr){
    let listWinningCombo = document.getElementById("listWinningCombo");
    let html = "";
    for(let e of arr){
        html +=  "<li> " +  e  +"</li>";
        listWinningCombo.innerHTML =html;
    }
}


let button = document.getElementById("check");
button.addEventListener("click", function(){
    let check = true;

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;

    let newCombo = getNewCombo();
    listNewCombo(newCombo);

    if(newCombo[0] != num1){
        check = false;
    };

    if(newCombo[1] != num2){
        check = false;
    };

    if(newCombo[2] != num3){
        check = false;
    };

    if(newCombo[4] != num4){
        check = false;
    };

    if(newCombo[5] != num5){
        check = false;
    };

    if(check == true){
        alert("YOU HAVE WON");
    }else{
        alert("better luck next time");
    }

});