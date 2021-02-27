
let graphics=["♦", "♥", "♠", "♣"];
let simbol=["A","2","3","4","5","6","7","8","9","10","J"," Q","K"];
function randomGraphics(){ 
let graphicsRandom=Math.floor(Math.random() * graphics.length);
 return graphics[graphicsRandom];
}
function randomSimbols (){
    let simbolRandom=Math.floor(Math.random() * simbol.length);
    return simbol[simbolRandom];
}

window.onload = () => {
document.querySelector(".random").innerHTML=randomGraphics();

document.querySelector("#number").innerHTML=randomSimbols();
  
}