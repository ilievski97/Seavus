var number;
var sum = 0;
var result;

ask("FIRST");
ask("SECOND");
ask("THIRD");
result = sum /3;
alert(`The average is ${result}`);

function ask(which){


      number = prompt(`Enter the ${which} number, Must be a positive number!`);
      check(which, number);

}


function check(which, number){

  if ( !(isNaN(number)) && (parseInt(number) >= 0)  ){
      sum = sum + parseInt(number);
  }
 else {
   ask(which);
}}
