
// mixes dice Nr. 1
let randomNumber1 = Math.floor((Math.random()*6)+1); 
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png"); 


// mixes dice Nr. 2 

let randomNumber2 = Math.floor((Math.random()*6)+1); 
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png"); 


// changes Title depending on outcome 
if (randomNumber1 === randomNumber2){
    document.querySelector("#title").innerHTML = "It's a draw.";
} else if (randomNumber1 > randomNumber2){
    document.querySelector("#title").innerHTML = "Player 1 wins!";
} else {
    document.querySelector("#title").innerHTML = "Player 2 wins!";
}


