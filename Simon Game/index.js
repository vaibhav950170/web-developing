var gamepattern=[];
var userClickPattern=[];

var level=0;
var started=false;
var buttonColours=["red","blue","green","yellow"];

$("body").keypress(function(){
if(!started){
$("h1").text("Level "+level);
  started=true;
}})


$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userChosenColor.length-1);
})


function nextSeq(){
  level++;
  $("h1").text("level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChoseColour=buttonColours[randomNumber];
  gamepattern.push(randomChoseColour);
    $("#"+randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoseColour);
}
function playSound(name){
  new Audio("/home/vaibhav/Downloads/[FreeCourseSite.com] Udemy - The Complete 2020 Web Development Bootcamp/14. Boss Level Challenge 2 - The Simon Game/Simon Game Challenge Starting Files/sounds/"+name+".mp3").play();
}
function animatePress(currentColor){
$("."+currentColor).addClass("pressed");
setTimeout(function(){
  $("."+currentColor).removeClass("pressed");
},100);
}
function checkAnswer(curerntLevel){
  if(gamepattern[curerntLevel]==userClickPattern[curerntLevel]){
    console.log("Success");
    if(userClickPattern.length==gamepattern.length){
      setTimeout(function(){
        nextSeq();
      },1000);
    }
  }
  else{
    console.log("wrong");
    $("body").addClass("game-over");
    new Audio("/home/vaibhav/Downloads/[FreeCourseSite.com] Udemy - The Complete 2020 Web Development Bootcamp/14. Boss Level Challenge 2 - The Simon Game/Simon Game Challenge Starting Files/sounds/wrong.mp3").play();
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
  }
}
