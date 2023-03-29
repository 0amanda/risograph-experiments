let black, yellow, red, blue;
let fr = 24;
let squareSize;
let x, y;
let fillopacity;


function setup() {
  createCanvas(2550, 1080);
  pixelDensity(1);
  frameRate(fr);
  black = new Riso('black');
  yellow = new Riso('yellow');
  red = new Riso('red');
  blue = new Riso('blue');
  canvas2 = createGraphics(2550,1080);
  background(255);
  clearRiso();

}

function draw() {


    let s = 100;
    squareSize = random(50, 500);
    background(255);

    black.noStroke();
    red.noStroke();
    yellow.noStroke();
    blue.noStroke();

    blue.fill(5);
    blue.rectMode(CENTER);
    blue.rect(400, 400, squareSize);
    
    yellow.fill(fillopacity=random(10, 200));
    yellow.ellipse(
        random(0, 2550), 
        y=random(0, 2550), 90, 90); 

    red.fill(50);
    red.ellipse( mouseX, mouseY, 140, 140);
    red.cutout(yellow);

    fr = 24;
      frameRate(fr);

    black.fill(25);
    black.ellipse(
        random(0, 2550), 
        y=random(0, 2550), 20, 70);

    drawRiso();
  
}

function mousePressed() {
    // when the user clicks, export the current image and stop
    exportRiso();
}
{
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        noLoop();
    } else if (keyCode === RIGHT_ARROW) {
        loop();
    }
}
}
    
  