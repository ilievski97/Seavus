var balance = 100;
var withdraw;

ask(true);

function ask(x){

  if(x == true){
      withdraw = prompt(`Balance value is ${balance}. Enter the withdraw value:`);
      tranaction(withdraw);

  } else {
    withdraw = prompt(`Not enough money. Enter withdraw value smaller than ${balance}:`);
    tranaction(withdraw);
  }
}

function tranaction(withdraw){

  if(balance>=withdraw){
    balance= balance - withdraw;
    alert(`You have withdrawn ${withdraw}, remaining balance is ${balance}. Press Okey to make a new withdraw.`);
    ask(true);
  }
  else {
    ask(false);
  }

}
