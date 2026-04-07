const turnON = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn(){
if(!Broken()){
lamp.src = "./img/ligada.jpg";
}}
function lampOff() {
if (!Broken()) {
lamp.src ="./IMG/desligada.jpg";
}}
function Broken(){
lamp.src = "./img/quebrada.jpg";
}
function Broken(){
return lamp.src.includes("quebrada");
}
turnON.addEventListener("click", lampOn);
turnOff.addEventListener("click" ,lampOff);
lamp.addEventListener("mouseover",lampOn);
lamp.addEventListener("mouseleave",lampOff);
lamp.addEventListener("dblclick" ,Broken);