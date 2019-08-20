let array  = [5,4,7,8,2,1,4,7,5,6,9,8];
let sum = 0;
let listElement = document.getElementById('listElement');
let equasion = "";

for( let i = 0; i<array.length ; i++){

    //get the number from the array
    let number = array[i];
    // create new list elements and fill them
    let newListElement = document.createElement('li');
    let newListElementValue = document.createTextNode(number);
    newListElement.appendChild(newListElementValue);
    listElement.appendChild(newListElement);

    //calculate sum
    sum += number;

    //make equasion
    if(i<(array.length - 1)){
      equasion += number + " + " ;
    }else{
      equasion+= number + " = " + sum;
    }


}


//print sum
let sumElement = document.getElementById("sumElement");
sumElement.innerHTML = sum;

//print equasion
let equasionElement = document.getElementById("equasionElement");
equasionElement.innerHTML = equasion;
