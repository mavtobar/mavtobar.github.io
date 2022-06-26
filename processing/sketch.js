function setup(){
    createCanvas(800, 800);
    colorMode(HSB, 100);
    frameRate(30);
    rectMode(CENTER);
}
let inc = 20;
let xoff = 0.01;
let yoff = 0.02;
let zoff = 0.04;
let xpos;
let ypos;

function draw(){
    background(255);
    for (let x = 0; x < width; x+=inc){
        xoff+=0.0001;
        for (let y = 0; y < height; y+=inc){
            yoff+=0.00001;
            xpos = map(cos(radians(0.01*x*frameCount)), -1, 1, 0, width);
            ypos = map(sin(radians(0.01*y*frameCount)), -1, 1, 0, height);
            let d = dist(x, y, xpos, ypos);
            let c = map(d, 0, dist(0, 0, xpos, ypos), 0, 100);
            let r = map(d, 0, dist(0, 0, xpos, ypos), 0, inc);
            stroke(c, 255, 255);
            fill(c, 255, 255);
            let rn = noise(xoff, yoff, zoff);
            r = map(rn, 0, 1, 0, inc);
            let a = map(d, 0, dist(0, 0, xpos, ypos), 0, 360);
            // r = rn*100;
            push();
            translate(x, y);
            rotate(radians(a));
            rect(0, 0, 8*r, 0.125*r);
            pop();
    }
}
zoff+=0.001;
    
}