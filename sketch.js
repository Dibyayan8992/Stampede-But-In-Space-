var pxlfont;
//Font Used:"Press Start 2P" By Code "Dibyayan Kar" Boisclair.
//Font Link:https://fonts.google.com/specimen/Press+Start+2P

var stage = 0;

var cx = 0;
var lmove = 2;

var px = 250;
var py = 200;
var pxmove = 0;
var pymove = 3;

var ex = 70;

var hx = 0;
var h2x = 0;
var h3x = 0;
var h1xmove = 1.5;
var h2xmove = 2;
var h3xmove = 2.5;

function preload() {
  pxlfont = loadFont('pixelfont.ttf');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (stage == 0) {
    background(187, 129, 7);

    fill(63, 27, 27);
    textFont(pxlfont);
    textAlign(CENTER);
    textSize(40);
    text("STAMPEDE!", 200, 77);
    textSize(12);
    text('A Game By Dibyayan Kar', width / 2, 95);

    fill(0);
    textSize(17);
    text("A Herd Of Stampeding", 200, 160);
    text("Cattle Is Chasing You", 200, 190);
    text("Down A Canyon,", 200, 220);

    textSize(19);
    text("Can You Outrun Them?", 200, 260);

    push();
      rectMode(CENTER);
      noFill();
      strokeWeight(5);
      stroke(63, 27, 27);
      rect(200, 345, 240, 90);
    
      stroke(255,0,0,150);
      strokeWeight(5);
      rect(195,212,240,0);
    
      rect(235,251,310,0);
    
      fill(255,0,0,150);
      noStroke();
      textFont('Comic Sans MS');
      text('In Space',200,205);
    
      text('Make It To The Space Station?',237,242);
    pop();

    fill(63, 27, 27);
    textSize(15);
    text('Press "i" For', 200, 325);
    text('Instructions On', 200, 350);
    text('How To Play', 200, 375);
     
  }

  if (stage == 1) {
    background(187, 129, 7);

    canyonObstacleSRock(110, 141);
    canyonObstacleMRock(60, 141);
    canyonObstacleStar(70, 230);

    cattleE(95, 337);

    { //Hat
      fill(87, 42, 16);
      ellipse(ex, 53, 63, 50);
      fill(30);
      ellipse(ex, 53, 43, 30);
      fill(107, 42, 26);
      ellipse(ex, 53, 36, 23);
      fill(77, 42, 16);
      ellipse(ex - 2, 53, 23, 15);
      ellipse(ex + 5, 53, 22, 8);
      
      push();
        fill(50,174,237,100);
        stroke(150,100);
        ellipse(ex, 53, 75,75);
      pop();
    } //Hat

    push();
      rectMode(CENTER);
      noFill();
      strokeWeight(5);
      stroke(0);
      rect(200, 50, 360, 75);
      rect(200, 140, 360, 75);
      rect(200, 230, 360, 75);
      rect(200, 335, 360, 110);
    {//Box 2
      rectMode(CORNER);
      stroke(255,0,0,150);
      strokeWeight(5);
      rect(138,133,190,0);
    
      fill(255,0,0,150);
      noStroke();
      textFont('Comic Sans MS');
      text('Asteroids And Meteroids',145,125);
    }//Box 2
    
    {//Box 3
      rectMode(CORNER);
      stroke(255,0,0,150);
      strokeWeight(5);
      rect(130,223,70,0);
    
      fill(255,0,0,150);
      noStroke();
      textFont('Comic Sans MS');
      text('Stars',140,213);
      textSize(12);
    }//Box 3
    
    pop();

    textAlign(LEFT);
    textFont(pxlfont);
    textSize(12);
    text("Use The Up And Down", 120, 50);
    text("Arrows To Move.", 120, 65);

    text("Walls And Rocks", 145, 140);
    text("Will Slow You Down.", 145, 155);

    text("Cacti Will Push You", 135, 230);
    text("Backwards.", 135, 245);

    textSize(18);
    text('Press "s"', 190, 325);
    text("To Start!", 190, 350);

  }

  if (stage == 2) {
    background(0, 2, 87);
    gameBackground();

    canyonMove();

    { //Level
      canyonObstacleMRock(470, 225);
      canyonObstacleStar(666, 180);
      canyonObstacleSRock(774, 270);
      canyonObstacleMRock(970, 195);
      canyonObstacleStar(1234, 225);
      canyonObstacleSRock(1374, 266);
      canyonObstacleMRock(1560, 130);
      canyonObstacleSRock(1774, 266);
      canyonObstacleStar(1820, 225);
      canyonObstacleSRock(2000, 143);
      canyonObstacleMRock(2300, 199);
      canyonObstacleStar(2680, 175);
      canyonObstacleSRock(2774, 186);
      canyonObstacleStar(2960, 123);
      canyonObstacleMRock(3090, 199);
      canyonObstacleMRock(3350, 170);
      canyonObstacleStar(3636, 222);
      canyonObstacleMRock(3806, 157);
      canyonObstacleSRock(4000, 247);
      canyonObstacleMRock(4150, 220);
      canyonObstacleSRock(4321, 159);
      canyonObstacleStar(4600, 290);
      canyonObstacleSRock(4748, 200);
      canyonObstacleStar(5000, 208);
      canyonObstacleMRock(5150, 295);
      canyonObstacleSRock(5348, 220);
      canyonObstacleStar(5542, 210);
      
      
      canyonObstacleMRock(1470, 25);
      canyonObstacleStar(2666, 60);
      canyonObstacleSRock(704, 27);
      canyonObstacleMRock(1070, 95);
      canyonObstacleStar(1340, 215);
      canyonObstacleSRock(4374, 186);
      canyonObstacleMRock(1000, 170);
      canyonObstacleSRock(1774, 66);
      canyonObstacleStar(820, 25);
      canyonObstacleSRock(2330, 43);
      canyonObstacleMRock(4100, 99);
      canyonObstacleStar(1090, 75);
      canyonObstacleSRock(2740, 86);
      canyonObstacleStar(960, 27);
      canyonObstacleMRock(3496, 19);
      canyonObstacleMRock(3223, 130);
      canyonObstacleStar(836, 102);
      canyonObstacleMRock(606, 57);
      canyonObstacleStar(5600, 147);
      canyonObstacleMRock(2150, 20);
      canyonObstacleSRock(2321, 59);
      canyonObstacleStar(4567, 20);
      canyonObstacleSRock(4098, 130);
      canyonObstacleStar(5120, 108);
      canyonObstacleMRock(5590, 95);
      canyonObstacleSRock(1348, 200);
      canyonObstacleStar(2342, 10);
      
      canyonObstacleMRock(70, 350);
      canyonObstacleMRock(170, 360);
      canyonObstacleSRock(270, 350);
      canyonObstacleMRock(370, 370);
      canyonObstacleStar(470, 350);
      canyonObstacleMRock(570, 340);
      canyonObstacleSRock(670, 350);
      canyonObstacleMRock(770, 360);
      canyonObstacleMRock(870, 370);
      canyonObstacleSRock(970, 340);
      canyonObstacleMRock(1110, 350);
      canyonObstacleMRock(1270, 360);
      canyonObstacleSRock(1310, 330);
      canyonObstacleMRock(1470, 360);
      canyonObstacleSRock(1670, 340);
      canyonObstacleSRock(1710, 370);
      canyonObstacleStar(1870, 350);
      canyonObstacleMRock(1910, 360);
      canyonObstacleMRock(2070, 340);
      canyonObstacleSRock(2170, 360);
      canyonObstacleMRock(2270, 380);
      canyonObstacleMRock(2370, 360);
      canyonObstacleSRock(2470, 330);
      canyonObstacleMRock(2570, 360);
      canyonObstacleMRock(2670, 370);
      canyonObstacleSRock(2770, 350);
      canyonObstacleSRock(2870, 340);
      canyonObstacleMRock(3170, 360);
      canyonObstacleMRock(3270, 380);
      canyonObstacleSRock(3370, 360);
      canyonObstacleMRock(3470, 330);
      canyonObstacleMRock(3570, 360);
      canyonObstacleMRock(3670, 370);
      canyonObstacleStar(3770, 350);
      canyonObstacleMRock(3870, 340);
      canyonObstacleSRock(3970, 360);
      canyonObstacleMRock(4070, 340);
      canyonObstacleMRock(4170, 360);
      canyonObstacleMRock(4270, 380);
      canyonObstacleMRock(4370, 370);
      canyonObstacleSRock(4470, 330);
      canyonObstacleSRock(4570, 360);
      canyonObstacleStar(4670, 360);
      canyonObstacleMRock(4770, 350);
      canyonObstacleMRock(4870, 360);
      canyonObstacleSRock(4970, 370);
      canyonObstacleSRock(5070, 340);
      canyonObstacleMRock(5170, 360);
      canyonObstacleMRock(5270, 380);
      canyonObstacleMRock(5370, 370);
      canyonObstacleSRock(5470, 330);
      canyonObstacleMRock(5500, 360);
    } //Level

    player();

    cattle1(-100, 60);

    cattle2(-80, 160);

    cattle3(-120, 260);

    cattleBehavior();

    game();
  }

}

function canyonMove() {
  cx = cx - lmove;

  if (cx <= -800) {
    lmove = 3;
  }
  if (cx <= -1200) {
    lmove = 4;
  }
  if (cx <= -2400) {
    lmove = 5;
  }
  if (cx <= -3600) {
    lmove = 6;
  }
  if (cx <= -4400) {
    lmove = 7;
  }
  if (cx <= -5700) {
    lmove = 0;
  }

}

function canyonObstacleStar(ox, oy) {
  { //cactus
    noStroke();
    fill(255,155,49);
    ellipse(cx + ox, oy, 40, 40);
    fill(255,255,55);
    triangle(cx + (ox + 18), oy + 5, cx + (ox + 18), oy - 5, cx + (ox + 25), oy);
    triangle(cx + (ox - 18), oy + 5, cx + (ox - 18), oy - 5, cx + (ox - 25), oy);

    triangle(cx + (ox + 5), oy + 18, cx + (ox - 5), oy + 18, cx + (ox), oy + 25);
    triangle(cx + (ox + 5), oy - 18, cx + (ox - 5), oy - 18, cx + (ox), oy - 25);

    triangle(cx + (ox + 15), oy + 10, cx + (ox + 8), oy + 16, cx + (ox + 16), oy + 18);
    triangle(cx + (ox + 15), oy - 10, cx + (ox + 8), oy - 16, cx + (ox + 16), oy - 18);

    triangle(cx + (ox - 15), oy - 10, cx + (ox - 8), oy - 16, cx + (ox - 16), oy - 18);
    triangle(cx + (ox - 15), oy + 10, cx + (ox - 8), oy + 16, cx + (ox - 16), oy + 18);

    beginShape();
    vertex(cx + (ox + 10), oy);
    vertex(cx + (ox + 7), oy + 3);
    vertex(cx + (ox + 8), oy + 8);
    vertex(cx + (ox + 3), oy + 7);
    vertex(cx + (ox), oy + 10);
    vertex(cx + (ox - 3), oy + 7);
    vertex(cx + (ox - 8), oy + 8);
    vertex(cx + (ox - 7), oy + 3);
    vertex(cx + (ox - 10), oy);
    vertex(cx + (ox - 7), oy - 3);
    vertex(cx + (ox - 8), oy - 8);
    vertex(cx + (ox - 3), oy - 7);
    vertex(cx + (ox), oy - 10);
    vertex(cx + (ox + 3), oy - 7);
    vertex(cx + (ox + 8), oy - 8);
    vertex(cx + (ox + 7), oy - 3);
    endShape(CLOSE);
  } //cactus

  if (px + 40 >= cx + ox && px <= cx + ox + 20 && py + 35 >= oy && py <= oy + 35) {
    px = px - 20;
  }

}

function canyonObstacleSRock(rx, ry) {
  { //rock
    noStroke();
    fill(100);
    beginShape();
    vertex(cx + (rx + 15), ry - 24);

    vertex(cx + (rx - 10), ry - 20);

    vertex(cx + (rx - 15), ry);

    vertex(cx + (rx), ry + 24);

    vertex(cx + (rx + 23), ry + 18);

    vertex(cx + (rx + 26), ry);

    endShape(CLOSE);

    noFill();
    strokeWeight(3);
    stroke(80);
    beginShape();
    vertex(cx + (rx + 5), ry - 14);

    vertex(cx + (rx - 2), ry + 10);

    vertex(cx + (rx + 13), ry + 8);

    vertex(cx + (rx + 16), ry);

    vertex(cx + (rx + 5), ry - 14);

    endShape();

    line(cx + (rx + 13), ry - 22, cx + (rx + 5), ry - 14);
    line(cx + (rx - 8), ry - 18, cx + (rx + 2), ry - 14);
    line(cx + (rx - 13), ry, cx + (rx - 3), ry + 7);
    line(cx + (rx), ry + 20, cx + (rx - 2), ry + 10);
    line(cx + (rx + 20), ry + 16, cx + (rx + 13), ry + 8);
    line(cx + (rx + 22), ry, cx + (rx + 16), ry);
  } //rock
  if (px + 40 >= cx + rx && px <= cx + rx + 20 && py + 30 >= ry && py <= ry + 35) {
    px = px - lmove;
  }
}

function canyonObstacleMRock(rx, ry) {
  { //Rock
    fill(100);
    noStroke();
    beginShape();
    vertex(cx + (rx + 25), ry - 20);

    vertex(cx + (rx), ry - 28);

    vertex(cx + (rx - 28), ry);

    vertex(cx + (rx - 14), ry + 24);

    vertex(cx + (rx), ry + 28);

    vertex(cx + (rx + 26), ry + 14);

    endShape(CLOSE);

    noFill();
    strokeWeight(3);
    stroke(80);
    beginShape();
    vertex(cx + (rx - 7), ry - 10);

    vertex(cx + (rx - 18), ry);

    vertex(cx + (rx), ry + 13);

    vertex(cx + (rx + 16), ry + 8);

    vertex(cx + (rx + 10), ry - 5);

    vertex(cx + (rx - 7), ry - 10);

    endShape();

    line(cx + (rx + 10), ry - 5, cx + (rx + 25), ry - 20);
    line(cx + (rx - 7), ry - 10, cx + (rx), ry - 28);
    line(cx + (rx - 17), ry, cx + (rx - 28), ry);
    line(cx + (rx), ry + 13, cx + (rx - 14), ry + 24);
    line(cx + (rx), ry + 13, cx + (rx), ry + 28);
    line(cx + (rx + 16), ry + 8, cx + (rx + 26), ry + 14);
  } //rock
  if (px + 40 >= cx + rx && px <= cx + rx + 25 && py + 35 >= ry && py <= ry + 30) {
    px = px - lmove;
  }

}

function player() {
    fill(220);
  rect(cx+5700,300,400,100);
  
  push();
    fill(255,0,0,150);
  noStroke();
  textFont('Comic Sans MS');
    text('Space Station',cx+6050,350);
  pop();
  
  
  { //Hat
    noStroke();
    fill(87, 42, 16);
    ellipse(px, py, 63, 50);
    fill(30);
    ellipse(px, py, 43, 30);
    fill(107, 42, 26);
    ellipse(px, py, 36, 23);
    fill(77, 42, 16);
    ellipse(px - 2, py, 23, 15);
    ellipse(px + 5, py, 22, 8);
    
    fill(50,174,237,100);
    stroke(150,100);
    ellipse(px, py, 75,75);
  } //Hat

  px = px - pxmove;

  if (keyIsDown(UP_ARROW)) {
    py = py - pymove;
  }
  if (keyIsDown(DOWN_ARROW)) {
    py = py + pymove;
  }
  
  if (py-30<0){
    py= py+pymove;
  }
  
  if (py+30>400){
    py= py-pymove;
  }

}

function game() {

  //gameOver
  {
    if (px <= 45) {
      fill(255, 45);
      rect(0, 0, 400, 400);

      fill(0);
      textFont(pxlfont);
      textAlign(CENTER);
      textSize(30);
      text("YOU'VE BEEN", 200, 155);
      text("TRAMPLED", 200, 195);

      textSize(15);
      text('Press "r" To Restart', 200, 255);
      text('Or "m" To Go To Menu', 200, 280);

      lmove = 0;
      pymove = 0;
    }
  }

  //gameWon
  {
    if (cx <= -5600) {
      py = py + 10;
    }
    if (cx <= -5600 && py >= 350) {
      py = 350;
    }

    if (cx <= -5600 && px >= 220) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(255);
      textSize(30);
      text('YOU MADE IT!', 200, 185);
      textSize(15);
      text('With A Perfect Score!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }
    if (cx <= -5600 && px < 220 && px >= 100) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(255);
      textSize(30);
      text('YOU MADE IT!', 200, 185);
      textSize(15);
      text('Good Job!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }

    if (cx <= -5600 && px < 100 && px > 45) {
      textFont(pxlfont);
      textAlign(CENTER);
      fill(255);
      textSize(30);
      text('YOU', 200, 100);
      text('(Barely)', 200, 140);
      text('MADE IT!', 200, 180);
      textSize(15);
      text('But Good Job!', 200, 220);
      textSize(12);
      text('Press "m" To Go To Menu', 200, 255);
      text('Or "r" To Restart', 200, 275);
    }
  }
}

function cattle1(sx, sy) {
  
  fill(220);
  triangle((sx - 70) + hx, sy, sx + (hx), sy + 10, sx + (hx), sy - 10); //Tail
  ellipse(sx + (hx), sy, 100, 60); //Body
  noStroke();
  fill(63, 27, 27);
  ellipse((sx + 40) + (hx), sy, 50, 50); //Head
  ellipse((sx + 60) + (hx), sy, 30, 40); //Muzzle
  
  fill(223, 145, 131, 100);
  ellipse((sx + 70) + (hx), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (hx), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (hx), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32) + (hx), sy + 25, 10, 25);
  ellipse((sx + 32) + (hx), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (hx), sy + 50);
    vertex((sx + 35) + (hx), sy + 35);
    vertex((sx + 33) + (hx), sy + 15);
    vertex((sx + 40) + (hx), sy + 10);
    vertex((sx + 43) + (hx), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (hx), sy - 50);
    vertex((sx + 35) + (hx), sy - 35);
    vertex((sx + 33) + (hx), sy - 15);
    vertex((sx + 40) + (hx), sy - 10);
    vertex((sx + 43) + (hx), sy - 35);
    endShape(CLOSE);
  } //Horns

  hx = hx + h1xmove;
  
  push();
  fill(50,174,237,100);
  stroke(150,100);
  ellipse(sx+40+hx, sy, 100,100);
  pop();

}

function cattle2(sx, sy) {
  fill(220);
  triangle((sx - 70) + h2x, sy, sx + (h2x), sy + 10, sx + (h2x), sy - 10); //Tail
  ellipse(sx + (h2x), sy, 100, 60); //body
  noStroke();
  fill(153, 95, 41);
  ellipse((sx + 40) + (h2x), sy, 50, 50); //head
  ellipse((sx + 60) + (h2x), sy, 30, 40); //muzzle
  
  fill(223, 165, 131, 100);
  ellipse((sx + 60) + (h2x), sy, 25, 10); //decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70) + (h2x), sy, 10, 25); //nose

  fill(0);
  ellipse((sx + 48) + (h2x), sy + 12, 8, 8); //eye
  ellipse((sx + 48) + (h2x), sy - 12, 8, 8); //eye

  fill(123, 77, 27);
  ellipse((sx + 32) + (h2x), sy + 25, 10, 25);
  ellipse((sx + 32) + (h2x), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (h2x), sy + 50);
    vertex((sx + 35) + (h2x), sy + 35);
    vertex((sx + 33) + (h2x), sy + 15);
    vertex((sx + 40) + (h2x), sy + 10);
    vertex((sx + 43) + (h2x), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (h2x), sy - 50);
    vertex((sx + 35) + (h2x), sy - 35);
    vertex((sx + 33) + (h2x), sy - 15);
    vertex((sx + 40) + (h2x), sy - 10);
    vertex((sx + 43) + (h2x), sy - 35);
    endShape(CLOSE);
  } //Horns

  h2x = h2x + h2xmove;

  push();
  fill(50,174,237,100);
  stroke(150,100);
  ellipse(sx+40+h2x, sy, 100,100);
  pop();
  
}

function cattle3(sx, sy) {

  fill(220);
  triangle((sx - 70) + h3x, sy, sx + (h3x), sy + 10, sx + (h3x), sy - 10); //Tail
  ellipse(sx + (h3x), sy, 100, 60); //Body
  noStroke();
  fill(63, 27, 27);
  ellipse((sx + 40) + (h3x), sy, 50, 50); //Head
  ellipse((sx + 60) + (h3x), sy, 30, 40); //Muzzle
  
  fill(223, 165, 131, 150);
  ellipse((sx + 60) + (h3x), sy, 25, 10); //Decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70) + (h3x), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48) + (h3x), sy + 12, 8, 8); //Eye
  ellipse((sx + 48) + (h3x), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32) + (h3x), sy + 25, 10, 25);
  ellipse((sx + 32) + (h3x), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55) + (h3x), sy + 50);
    vertex((sx + 35) + (h3x), sy + 35);
    vertex((sx + 33) + (h3x), sy + 15);
    vertex((sx + 40) + (h3x), sy + 10);
    vertex((sx + 43) + (h3x), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55) + (h3x), sy - 50);
    vertex((sx + 35) + (h3x), sy - 35);
    vertex((sx + 33) + (h3x), sy - 15);
    vertex((sx + 40) + (h3x), sy - 10);
    vertex((sx + 43) + (h3x), sy - 35);
    endShape(CLOSE);
  } //Horns

  h3x = h3x + h3xmove;

  push();
  fill(50,174,237,100);
  stroke(150,100);
  ellipse(sx+40+h3x, sy, 100,100);
  pop();
  
}

function cattleE(sx, sy) {
  
  fill(220);
  triangle((sx - 70), sy, sx, sy + 10, sx, sy - 10); //Tail
  ellipse(sx, sy, 100, 60); //Body
  
  noStroke();
  fill(63, 27, 27);
  ellipse((sx + 40), sy, 50, 50); //Head
  ellipse((sx + 60), sy, 30, 40); //Muzzle
  
  fill(223, 165, 131, 150);
  ellipse((sx + 60), sy, 25, 10); //Decoration
  
  fill(223, 145, 131);
  ellipse((sx + 70), sy, 10, 25); //Nose

  fill(0);
  ellipse((sx + 48), sy + 12, 8, 8); //Eye
  ellipse((sx + 48), sy - 12, 8, 8); //Eye

  fill(83, 27, 27);
  ellipse((sx + 32), sy + 25, 10, 25);
  ellipse((sx + 32), sy - 25, 10, 25);

  { //Horns
    fill(212, 148, 91);
    beginShape();
    vertex((sx + 55), sy + 50);
    vertex((sx + 35), sy + 35);
    vertex((sx + 33), sy + 15);
    vertex((sx + 40), sy + 10);
    vertex((sx + 43), sy + 35);
    endShape(CLOSE);

    beginShape();
    vertex((sx + 55), sy - 50);
    vertex((sx + 35), sy - 35);
    vertex((sx + 33), sy - 15);
    vertex((sx + 40), sy - 10);
    vertex((sx + 43), sy - 35);
    endShape(CLOSE);
  } //Horns
  
  push();
  fill(50,174,237,100);
  stroke(150,100);
  ellipse(sx+40, sy, 100,100);
  pop();

}

function cattleBehavior() {

  if (hx >= 100 || hx <= 0) {
    h1xmove = -h1xmove;
  }
  if (h2x >= 90 || h2x <= -40) {
    h2xmove = -h2xmove;
  }
  if (h3x >= 120 || h3x <= -10) {
    h3xmove = -h3xmove;
  }

  if (cx <= -5700) {
    h1xmove = 5.5;
    h2xmove = 5.75;
    h3xmove = 5.25;
  }
}

function gameBackground() {
  background(0, 2, 87);

  this.linedist = random(20, 40);

  for (var x = -50; x <= height; x = x + linedist) {
    push();
    strokeWeight(2);
    stroke(255, 33);
    line(0, x, 400, x);
    pop();

  }
}

function keyPressed() {
  if (key == 'r') {
    cx = 0;
    lmove = 2;

    px = 250;
    py = 200;
    pxmove = 0;
    pymove = 3;

    hx = 0;
    h2x = 0;
    h3x = 0;
    h1xmove = 1.5;
    h2xmove = 2;
    h3xmove = 2.5;
  } else if (key == 'm') {
    stage = 0;
  } else if (key == 'i') {
    stage = 1;
  } else if (key == 's') {
    stage = 2;
  }

}