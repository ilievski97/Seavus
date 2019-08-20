console.log("conected");
//Task01
    // let a = 7;
    // let b = 8;
    // let c = a + b;

    // console.log(`a: ${a}, b: ${b}, c: ${c}`);

//Task02
    // let num = 1;
    // let bool = true;
    // let string = "string";

    // console.log(`num is type ${typeof num}, bool is type ${typeof bool}, string is type ${typeof string}`);

//Task03
    // let x = 10, y = 3;
    // let div = x/y;
    // console.log(div);

//Task04
// Declare a variable name.
// Assign the variable to your name.
// Declare and assign a variable lastName with the value of your last name.
// Print Hello, and your name and last name in the console from the previous variables.
 
    // let name = "David";
    // let lastName= "Ilievski";
    // console.log(name + " " + lastName);



// Task 5
// Declare two number variables and assign them any number
// Write an if statement that prints the larger one in console

    // let num1 = 2, num2 = 5;
    // if(num1 > num2){
    //     console.log(`${num1} is bigger than ${num2}`);
    // }else if(num1 < num2){
    //     console.log(`${num2} is bigger than ${num1}`);
    // }else{
    //     console.log(`${num2} and ${num1} are same`);
    // }
 
// Task 6
// Declare a variable and assign any number to it
// Write an if statement that finds out if a number is even OR larger than 100
// If it is print in the console: The number is cool!

    // let number = 5;
    // if((number%2 == 0)&&(numver > 100)){
    //     console.log(`${number} is an even number and it's larger than 100`);
    // }else{
    //     console.log(`Doesn't fit the description`);
    // }
 
// Task 7
// Write a JavaScript program that will convert denars to euros.
// One euro is 61.5 denars.

    // let dennar =1, conversionRate = 61.5;

    // let euro = convertMkdToEuro(dennar,conversionRate);
    // console.log(euro);

    // function convertMkdToEuro(dennar,conversionRate){
    //     return dennar*conversionRate;
    // }
    
// Task 8
// Declare a variable named day
// Initialize it with some day of the week as string
// Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
// Print "I am free" in console on all other days

    // let day = "Monday";
    // let statement;

    // switch (day){
    //     case "Monday" : statement = "in SEDC";
    //     break;
    //     case "Wendsday" : statement = "in SEDC";
    //     break;
    //     default:  statement = "free";
    //     break;
    // }
    // console.log(`I am ${statement}`);
    
// Task 9
// Declare and assign an array of 6 integers. Ex 5,6,15,42.
// Declare and assign an array of strings. Ex Dragan Trajan Martin
// Print the first value of each array.
// Print the arrays.  /
// Change the values of the first element in both arrays. /
// Assign a value to the 100 th member of the first array. /
// Print how many elements the array has? /
// What is the value of the 99th element in the array. **
// Write an example of push.**
// Write an example of pop.**
// What is the value of the 1000th element in both arrays? **
// 9.Write an if statement that prints "It's a cool number" if 
// a number is even or larger than 100

    // let arrayNum = [5,6,15,5465,54,46];
    // let arrayString = ["A","B","C","D","E"];
    // console.log(arrayNum[0]);
    // console.log(arrayString[0]);
    // arrayNum[0]  = 4;
    // arrayString[0] = "A2";
    // arrayNum[99] = 100;
    // console.log(`arrayNum has ${arrayNum.size} elements, arrayString has ${arrayString.size}`);
    // console.log(arrayNum[98]);
    // console.log(arrayString[98]);
    // arrayString.push("A0");
    // arrayString.pop("F");
    // console.log(arrayNum[999]);
    // console.log(arrayString[999]);

    // for(let e of arrayNum){
    //         if((e%2 == 0)||(e>100)){
    //             console.log(`${e} is even or larger than 100.`);
    //         } 
    // }
    
    
// Task 10
// Write a while loop that counts from 0 to 10.
// The numbers should be printed in the console.

    // let i=0;
    // while(i<=10){
    //     console.log(i);
    //     i++; 
    // }

     
// Task 11
// Write a for loop that counts from 1 to 20 but skips every second number.
// The numbers should be printed in the console.

    // for(i = 1 ; i<= 20; i+=2){
    //     console.log(i);
    // }

 
// Task 12
// Write a JavaScript program that will find the sum of all items in the given array,
// make it dynamic, so the result will change if the array is changed.
    
    // let arr = [54,54,645,45,4,54,54,645,5,544,21];
    // let sum = sumArray(arr);
    // console.log(sum);

    // function sumArray(array){
    //     let result = 0;
    //     for(let e of array){
    //         result += e;
    //     }
    //     return result;
    // }
 
// Task 13
// Write a JavaScript program that will find the sum of all positive numbers in the array.
 
    // let array = [54,45,-54,54,-4,-7,451,-78];

    // function getPossitive(arr){
    //     let positiveArray = [];

    //     for(let e of arr){
    //         if(e>0){
    //             positiveArray.push(e);
    //         }
    //     }

    //     return positiveArray;
    // }

    // console.log(getPossitive(array));

// Task 14
// Write javascript program that will take the items from a given array
// and make new aray with the same items in revers order.

    // let array = [1,2,3,4,5,6,7,8,9,10];
    // console.log(array.length);

    // function reverse(arr){

    //     let reversArray = [];

    //             for(let i = 0; i < arr.length; i++){

    //                 reversArray[arr.length - i -1 ] = arr[i];
                    

    //             }
        
    //             return reversArray;
    //         }
    

    // console.log(reverse(array));
    
 
// Task 15
// Write javascript program that will find the average value
// from the all the item values in the given array.

    // let array = [1,2,3,4,5,6,7,8,9,10];

    // function getAverage(arr){
           
    //         let sum = 0;
    //         for(let e of arr){
    //             sum += e;
    //         }
    
    //         return sum/arr.length;
    //     }

    //     let average = getAverage(array);
    //     console.log(average);


    
// Task 16
// Write a function that prints your name in the console

    // let name = "David";
    // printName(name);

    // function printName(name){
    //     console.log(name);
    // }
 
// Task 17
// Write a function that accepts your name as an argument and returns "Hello NAME"

    //   let name = "David";
    //     console.log(returnName(name));

    // function returnName(name){
    //     return "Hello " + name;
    // }
 
// Task 18
// Write a function that accepts 2 numbers as arguments and returns the sum of the two

    // function getSum(a,b){
    //     return a+b;
    // }

    // console.log(getSum(5,10));
 
// Task 19
// Write a function that takes a number and returns a message that tells you
// if the number is odd or even

// function check(num){
    
//         if(num%2 == 0){
//             return "even";
//         }else{
//             return "odd";
//         }
//     }

//     console.log(check(5));
 
// Task 20
// Write a function that takes an array of numbers and returns the number
// of numbers in the array that are even

// let array = [1,2,3,4,5,6,7,8,9,10];

//     function getEven(arr){
           
//             let even = [];
//             for(let e of arr){
//                 if(e%2 == 0){
//                     even.push(e);
//                 }
                
//             }
//             return even;
           
//         }

        
//         console.log(getEven(array));



 
// Task 21
// Write an HTML h1 element and select it in javascript by id


    let heading = document.getElementById("heading");
 
// Task 22
// Write two p elements and select them by class

    let paragraphs = document.getElementsByClassName("paragraph");
 
// Task 23
// Write two h3 elements and select the first one by tag name

    let headingOne =  document.getElementsByTagName("h3")[0];
    headingOne.innerHTML = "test";
 
// Task 24
// Write a div and inside it write one h1 and 2 p elements
// Select the second p element through the div element
// Hint: You must select the div element and try to find p from there

    let div = document.getElementById("div1");
    let child = div.children[2];
 
// Task 25
// Write a h1 element with some text inside of it
// Change the text inside the h1 with Javascript

 heading.innerHTML = "changed text";
 
// Task 26
// Write an ul element in HTML
// In the ul element add 5 new li elements with Javascript

    let list = document.getElementById("list");
    
    for(i=0; i<5; i++){
        list.innerHTML += `<li> ${i + 1} </li>`
    }
