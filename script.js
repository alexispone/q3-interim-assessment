function setup(){
    createCanvas(600,400);
    background(0);
    background(2);
}

function draw(){
    if(mouseIsPressed){
        paint(mouseX, mouseY)
    }
}

function paint(x, y){
    fill(255, 0, 150);
    noStroke();
    ellipse(x, y,100,100);
}

function paint(x, y){
    fill(255, 0, 250)
    ellipse(x, y, 100,100)
}

