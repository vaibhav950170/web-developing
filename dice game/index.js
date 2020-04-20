var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);

var player1=document.querySelectorAll("h1")[0];
if(randomnumber1>randomnumber2){
  player1.innerText="Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
  player1.innerText="Player 2 Wins";
}
else{
  player1.innerText="Draw!";
}
