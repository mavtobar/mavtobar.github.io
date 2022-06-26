var texto = document.getElementById("txtLineas");
var boton = document.getElementById("btnLineas");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

function dibujoPorClick(){
    var x = parseInt(texto.value);
    var w = d.width;
    var h = d.height;
    var inc = w / x;
    var lineas = x;
    var l = 0;


    for (l = 0; l < lineas; l+=2){
        linea("black", 0, l*inc, l*inc , w);
    }

    for (l = 0; l < lineas; l+=2){
        linea("black", l*inc, 0, h , l*inc);
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
}