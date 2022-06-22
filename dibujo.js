var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

var w = 800;
var h = 800;
var inc = 10;
var lineas = w/inc;
var l = 0;


while(l < lineas){
    linea("black", 0, l*inc, l*inc , w);
    l = l + 1;
}


function linea(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.lineWidth = 1;
    lienzo.closePath();    
}