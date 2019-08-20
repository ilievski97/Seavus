
var randomNumber;
var luck = [ null,"You are on the right track","Danger is near","Luck will find you","You are about to make a mistake","Your future is unclear"];


function randomGen(){
  randomNumber = Math.floor((Math.random() * 5) + 1);
  return randomNumber;
}

alert(`Today your lucky luck is: ${luck[randomGen()]}`);
