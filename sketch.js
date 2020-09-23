'use strict'
var song;
let bamYes = false;
let angleWing = 2;
let angleBody = 5;
let mic;
let micLevel;
let y = 5;
let x = 10;
let a = 10;
let b = 10;
let sketchStarted = false;

function preload() {
  song = loadSound("song.mp3");

}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  song.play();
  createButton("start").mousePressed(startSketch);

}

function startSketch(){
  mic = new p5.AudioIn();
  mic.start();

  sketchStarted = true;
}

function draw() {
   if (sketchStarted){
     background(0, 0, 5);

   //mouse press it show up
     if (bamYes == true) {
       background(255,255,255);
       fill(217, 115, 69);
       circle( 384, 20, 50, 50);
     }else if (bamYes != true) {
       background(0,0,5);

     }


     // draw back mountain
     fill(149, 156, 163);
     bezier(a + 30, b + 390, a + 20, a + 379, b + 30, a + 70, a + 210, b + 390, a + 290);
     bezier(a + 50, b + 410, a + 290, a + 470, b + 170, a + 10, a + 480, b + 430, a + 470);
     // draw close mountain
     fill(149, 166, 153);
     bezier(a + 40, 430, 300, a + 40, 70, 100, a + 410, 400, 80);
     a -= 2;


     if (a <= -200) {

       a = 400;
     }

     // variable increment
     //rain
     stroke(151, 151, 169);

     line(x, y, x, y + 15);
     line(x + 35, y, x + 36, y + 28);
     line(x + 15, y, x + 15, y + 60);
     line(x + 40, y, x + 38, y + 29);
     line(x + 50, y, x + 50, y + 40);
     line(x + 70, y, x + 70, y + 15);
     line(x + 88, y, x + 89, y + 12);
     line(x + 99, y, x + 100, y + 17);
     line(x + 105, y, x + 106, y + 19);
     line(x + 106, y, x + 107, y + 17);
     line(x + 110, y, x + 109, y + 33);
     line(x + 130, y, x + 130, y + 17);
     line(x + 150, y, x + 149, y + 51);
     line(x + 170, y, x + 169, y + 17);
     line(x + 195, y, x + 195, y + 57);
     line(x + 222, y, x + 225, y + 17);
     line(x + 235, y, x + 236, y + 77);
     line(x + 250, y, x + 248, y + 27);


     y += 4;
     x += 2;


     if (x > height) {

       x = 0;

     }

     if (y > height) {

       y = (-200, -100);
     }

     // console.log("mic level " + mic.getLevel());
     // micLevel = mic.getLevel(0.9);
     angleWing = map(mic.getLevel(), 0, 2, 10, 350);
     angleBody = map(mic.getLevel(), 0, 5, 10, 350);
     noStroke();
     drawBody(angleBody);
     drawWing(angleWing); // parameter = angle rotation

   }


}


function mousePressed() {

  if (mouseX > width * .2 && mouseX < width * .9 && mouseY > height * 0.05 && mouseY < height * .35) {
    bamYes = true;
     }else if (mouseX > 384 && mouseY < 20){
    bamYes = false;
}
}
// back wing
function drawWing(angle) {
  // draw wing

  beginShape();
  curveVertex(270, 120);
  curveVertex(230, 140);
  curveVertex(160, 145);
  curveVertex(130, 130);
  curveVertex(130, 120);
  curveVertex(110, 140);
  curveVertex(130, 170);
  curveVertex(170, 180);
  endShape(CLOSE);

}


function drawBody(angle) {
  //draw body
  push();
  translate(55, -70);
  rotate(angle);
  fill(201, 201, 235);
  beginShape();
  curveVertex(100, 220);
  curveVertex(120, 240);
  curveVertex(140, 230);
  curveVertex(180, 200);
  curveVertex(267, 116);
  curveVertex(270, 113);
  curveVertex(303, 120);
  curveVertex(300, 130);
  curveVertex(278, 200);
  curveVertex(255, 235);
  curveVertex(236, 250);
  curveVertex(202, 260);
  curveVertex(190, 260);
  curveVertex(165, 254);
  endShape(CLOSE);
  //bird belly
  beginShape();
  fill(201, 172, 198);
  curveVertex(168, 250);
  curveVertex(263, 220);
  curveVertex(255, 235);
  curveVertex(236, 250);
  curveVertex(202, 260);
  curveVertex(190, 260);
  curveVertex(165, 255);
  endShape(CLOSE);
  pop();

}

// front wing
function drawWing(angle) {
  push();
  translate(95, -45);
  rotate(angle);
  fill(57, 13, 169);
  beginShape();
  curveVertex(245, 120);
  curveVertex(170, 135);
  curveVertex(110, 120);
  curveVertex(120, 165);
  curveVertex(100, 130);
  curveVertex(120, 176);
  curveVertex(160, 185);
  endShape(CLOSE);
  push();
}
