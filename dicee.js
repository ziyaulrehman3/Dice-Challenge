var r1= Math.random();
r1=r1*6;
r1=Math.floor(r1);
r1=r1+1;


var r2= Math.random();
r2=r2*6;
r2=Math.floor(r2);
r2=r2+1;


var heading=document.querySelector("h1");

if(r1===r2){
   heading.innerText="Match Tie.";
}else if(r1>r2){
    heading.innerText="Player 1 is Win.";
}else if(r1<r2){
    heading.innerText="Player 2 is Win.";
}

var n1="images/dice" + r1 + ".png";
var n2="images/dice" + r2 + ".png";

document.querySelector(".img1").setAttribute("src",n1);
document.querySelector(".img2").setAttribute("src",n2);