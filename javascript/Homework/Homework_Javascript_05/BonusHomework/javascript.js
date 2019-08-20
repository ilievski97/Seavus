
//ask for the recepie name and print it in the header
let recepieName = prompt("What's your recepie name?") + ":";
let headerElement = document.getElementById('header');
headerElement.innerHTML = recepieName;


//run the functions
 getIngridients(getNumberOfIngridients(true));

//function to get the number of ingridients
//if the user enters not a number it asks him again
function getNumberOfIngridients(check){
  if(check == true){
    numberOfIngridients= parseInt(prompt("How many ingridients does your recepie has?"));
  }else {
    numberOfIngridients= parseInt(prompt("How many ingridients does your recepie has? Please enter a number value!"));
  }

  while (isNaN(numberOfIngridients)){
  numberOfIngridients =  getNumberOfIngridients(false);
  }

    return numberOfIngridients;



}

//function to get the ingridients and prints them

function getIngridients(number ){
  for(let i = 0; i < number ; i++){

    let ingridient = prompt(`What is the ${i + 1} ingridient of your recepie. ${number - i + 1} ingridients remaining. `);
    let listElement = document.getElementById('listElement');
    let newListElement = document.createElement('li');
    let newListElementValue = document.createTextNode(ingridient);
    newListElement.appendChild(newListElementValue);
    listElement.appendChild(newListElement);


  }
}
