  var song;
  let bamYes = false;
  let angleWing = 2;
  let angleBody = 5;
  let mic;
  let micLevel;
  let y = 5;
  let x = 10;
  let mount0;
  let mount1;
  let mount2;



  function preload() {
    song = loadSound("song.mp3");

  }

  function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    song.play();



    mount0 = new Mount(width * .5, height * .4, .5);
    mount1 = new Mount(width * .6, height * .6, .7);
    mount2 = new Mount(width * .7, height * .7, .9);


    console.log(mount0);
    mic = new p5.AudioIn();
    mic.start();
  }

  function draw() {

    mount0.display();
    mount1.display();
    mount2.display();

    mount0.move();
    mount1.move();
    mount2.move();

    background(0, 0, 5);

    // console.log("mic level " + mic.getLevel());
    // micLevel = mic.getLevel(0.9);
    angleWing = map(mic.getLevel(), 0, 2, 10, 350);
    angleBody = map(mic.getLevel(), 0, 5, 10, 350);
    noStroke();
    drawBody(angleBody);
    drawWing(angleWing); // parameter = angle rotation
    //drawMount(410, 375, 380, 245, 350, 375);
    //drawMount(370, 375, 320, 245, 310, 375);
    //drawMount(340, 375, 290, 245, 290, 375);
    

    // mouse press it show up
    // if (bamYes == true) {
    //   fill(0, 0, 0);
    //  beginShape();
    //  //??????
    //  endShape();
    //}

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




    function mousePressed() {

      if (mouseX > width * .2 && mouseX < width * .2 && mouseY > height * 0.05 && mouseY < height * .35) {
        bamYes = true;

        background(255, 255, 255);

      } else if (mouseX < width * .2 || mouseX > width * .2) {
        bamYes = true;


        background(0, 0, 5);

      }
    }

    // back wing
    function drawWing() {
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
      translate(18, -30);
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
      translate(40, 15);
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
      pop();
    }

   // function drawMount(xPos, yPos) {
   //   push();
    //  translate(xPos, yPos);
   //   rotate();
   //   fill(149, 156, 153);
   //   triangle(410, 375, 380, 245, 350, 375);
   //   pop();

   // }

  }