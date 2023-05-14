function js01(){
var div=document.getElementById("message");
var divclone=div.cloneNode(true);
let nimimerkki;
let viesti;
let päivämäärä;
nimimerkki=document.getElementById("Nimimerkki").value;
viesti=document.getElementById("Viesti").value;
let date=new Date();
päivämäärä=date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();

divclone.style.border = "none";
if(document.getElementById("Tärkeä").checked)
divclone.style.border = "2px solid #D72323";
var otsikko= divclone.querySelector("h4");
otsikko.textContent=päivämäärä+" "+nimimerkki;
var teksti= divclone.querySelector("p");
teksti.textContent=viesti;
var chatdiv=document.getElementById("chat");
chatdiv.insertBefore(divclone,chatdiv.firstChild);
var lineBreak = document.createElement("br");
chatdiv.insertBefore(lineBreak, chatdiv.firstChild);



}