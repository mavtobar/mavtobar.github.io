var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

var w = 800;
var h = 800;
var inc = 10;

console.log(window);

for (var x = 0; x < w; x+=inc){
    for (var y = 0; y < h; y+=inc){
        linea("black", x, y, w/2 , h/2);    
    }
}



function linea(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.lineWidth = 0.25;
    lienzo.closePath();    
}