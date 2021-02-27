
let graphics=["♦", "♥", "♠", "♣"];
let simbol=["A","2","3","4","5","6","7","8","9","10","J"," Q","K"];

window.onload = () => {
 
let graphicsRandom=Math.floor(Math.random() * graphics.length);
let simbolRandom=Math.floor(Math.random() * simbol.length);
let finalGraphic=graphics[graphicsRandom];
let finalsimbol=simbol[simbolRandom];


   

let element1= document.querySelector(".random").innerHTML=finalGraphic;
let element2=document.querySelector(".random2").innerHTML=finalGraphic;

let element3=document.querySelector("#number").innerHTML=finalsimbol;
  
}