

var what;
var years ;
var result;

 ask();

 function ask() {

   what = prompt("Enter 'DOG' for dog to human years, or 'HUMAN' for human to dog years");
   years = prompt("Enter years:");

   result = converT(what,years);

   if(result != 0 ){
      alert(` The result is ${result} years. `);
   }
}


  function converT(what, years) {

    if ( what == "DOG" ){
      return  years * 7;
    } if (what == "HUMAN" ){
      return  years/7;
    } else {
      ask();
     return 0;
    }

  }
