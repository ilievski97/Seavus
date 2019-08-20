

var year;
var value;
var animals = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
var yourAnimal;

year = prompt("Enter the year");
value = (year-4)%12;

yourAnimal = animals[value];

alert(`Your animal is ${yourAnimal}` );
