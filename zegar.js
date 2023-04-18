



function czas2() {


var dzis = new Date();

var miesoc = dzis.getMonth()+1;

var dzien = dzis.getDay();

var rok = dzis.getFullYear();


document.getElementById("czas").innerHTML = miesoc+"/"+dzien+"/"+rok;


setTimeout("czas2()",1000);



}

function stoper() {

var czas = new Date();

var godzina = czas.getHours();
if (godzina<10) godzina = "0"+godzina;
var minuta = czas.getMinutes();
if (minuta<10) minuta = "0"+minuta;
var sekunda = czas.getSeconds();
if (sekunda<10) sekunda = "0"+sekunda;

document.getElementById("12").innerHTML = godzina+":"+minuta+":"+sekunda;

setTimeout("stoper()",1000)


}

