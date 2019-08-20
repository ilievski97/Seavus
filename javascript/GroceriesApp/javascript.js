console.log("connected");


let groceriesDataBase = [];
let addButton = document.getElementById("addItem");
let list = document.getElementById("list");

let item;

addButton.addEventListener("click", function(){
    let inputItem = document.getElementById("inputItem").value;
    addItem(inputItem);
    
})

function addItem(itemToAdd){
    groceriesDataBase.push(itemToAdd);

    let list = document.getElementById('list');
    let newListElement = document.createElement('li');
    let newListElementValue = document.createTextNode(itemToAdd);
    
    let newRemoveButton =   document.createElement('button');
    newRemoveButton.innerHTML= "remove";
    newRemoveButton.value = "itemToAdd";

   
    newListElement.appendChild(newListElementValue);
    newListElement.appendChild(newRemoveButton);
    list.appendChild(newListElement);
    
    newRemoveButton.addEventListener("click", function(e){
       e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    } )
}

