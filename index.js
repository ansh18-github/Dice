var randomimg1= Math.floor(Math.random()*6 + 1);
var ranimg1= "images/dice" + randomimg1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", ranimg1);

var randomimg2= Math.floor(Math.random()*6 + 1);
var ranimg2= "images/dice" + randomimg2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ranimg2);

if(randomimg1>randomimg2){
document.querySelector("h1").innerHTML="Player 1 Wins<i class='fas fa-trophy fap'></i>";
}else if(randomimg2>randomimg1){
document.querySelector("h1").innerHTML="Player 2 Wins<i class='fas fa-trophy fap'></i>";
}else if(randomimg1===randomimg2){
document.querySelector("h1").innerHTML="draw <i class='fas fa-glass-cheers fap'></i>";
}
