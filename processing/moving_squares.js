let w;
let h;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    rectMode(CENTER);
    w = width;
    h = height;
}

let incx = 0;

function draw(){
    background(0);
    let inc = 40;
    let deltaX = 0;
    let deltaY = 0;
    let step = 2;
    
    for(let y = 0; y < h; y+=inc){
        deltaY++;
        for(let x = 0; x < w + inc; x+=inc){
            let xpos = w*sin(radians(frameCount));
            let ypos = h/2;
            let d = dist(x, y, xpos, ypos);
            let r = map(d, 0, dist(0, 0, xpos, ypos), 0, 0.9);
                
            deltaX++;
            
            if (deltaX % step == 0){
                fill(255);
                stroke(0);
            } else {
                fill(0);
                stroke(255);
            }
            if (deltaY % step == 0){
                rect(x + incx, y, inc*r, inc*r);
            } else {
                rect(x - incx, y, inc*r, inc*r);
            }
            if(x + incx > w + inc){
                incx = -incx;
            }
        }
    }
    
    incx+=1;
}

