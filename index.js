// Generating the random number for image 1 or player 1
var randomNumber1 = Math.round(Math.random()*6)+1;  //1 - 6
var randomDiceImage = "dice"+randomNumber1+".png"; //dice1.png to dice6.png
var randomImageSource = "images/"+randomDiceImage;
// changing the image according to the random number
var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImageSource);


// Generating the random number for the image 2 or player 2
  var randomNumber2 = Math.round(Math.random()*6)+1;
  var randomDiceImage = "dice"+randomNumber2+".png"; //dice1.png to dice6.png
  var randomImageSource2= "images/"+randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


// Game decider
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins!";

}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins!";

}else{
  document.querySelector("h1").innerHTML = "Draw!";

}
function reload(){
location.reload();
}
