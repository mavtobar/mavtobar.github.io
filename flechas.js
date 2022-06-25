document.addEventListener("keyup", dibujarTeclado);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("dibujo1");
var lienzo = d.getContext("2d");

var x = d.width/2;
var y = d.height/2;



function linea(color, xi, yi, xf, yf, papel){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    
    lienzo.closePath();    
}

function dibujarTeclado(evento){
    // console.log("Tecla oprimida");
    // console.log(evento);
    // console.log(evento.keyCode);

    var colorLinea = "black";
    var inc = 10;
  
    switch(evento.keyCode){
        case teclas.UP: 
            linea(colorLinea, x, y, x, y - inc, lienzo);
            y-=inc;
        break;

        case teclas.DOWN: 
            linea(colorLinea, x, y, x, y + inc, lienzo);
            y+=inc;
        break;

        case teclas.RIGHT: 
            linea(colorLinea, x, y, x + inc, y, lienzo);
            x+=inc;
        break;

        case teclas.LEFT: 
            linea(colorLinea, x, y, x - inc, y, lienzo);
            x-=inc;
        break;
        default:
            console.log("otra tecla");
        break;
    }

}