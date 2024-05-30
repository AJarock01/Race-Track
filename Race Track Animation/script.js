// Race Track Canavs setup

// Setup canvas
let cnv = document.getElementById("RaceTrackCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// top-left corner (0,0)
// top-right corner (600,0)
// bottom-left corner (0,600)
// bottom-right corner (600,600)

// Animation Variables
let TreeColor = "darkgreen";
let keyPhrase = "";

requestAnimationFrame(draw);

function draw() {
  // ground
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 600, 600);

  // Race Track
  ctx.strokeStyle = "black";
  ctx.lineWidth = 30;
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 500);
  ctx.lineTo(500, 500);
  ctx.lineTo(500, 100);
  ctx.lineTo(85, 100);
  ctx.stroke();

  // Starting/Finishing line
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(250, 75);
  ctx.lineTo(250, 125);
  ctx.stroke();

  // Red Car
  ctx.strokeStyle = "red";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(270, 100);
  ctx.lineTo(285, 100);
  ctx.stroke();

  // Blue car
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(270, 110);
  ctx.lineTo(285, 110);
  ctx.stroke();

  // Green car
  ctx.strokeStyle = "green";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(270, 90);
  ctx.lineTo(285, 90);
  ctx.stroke();

  // Count Down backdrop
  ctx.fillStyle = "grey";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 50);
  ctx.lineTo(350, 50);
  ctx.lineTo(350, 0);
  ctx.lineTo(200, 0);
  ctx.fill();

  // Red light
  ctx.fillStyle = "darkred";
  ctx.beginPath();
  ctx.arc(230, 25, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Yellow light
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(275, 25, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Green light
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(320, 25, 20, 0, 2 * Math.PI);
  ctx.fill();

  // Parking Lot
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(115, 300);
  ctx.lineTo(115, 350);
  ctx.lineTo(140, 350);
  ctx.lineTo(140, 450);
  ctx.lineTo(240, 450);
  ctx.lineTo(240, 300);
  ctx.lineTo(110, 300);
  ctx.fill();

  // Tree's
  // Stump 1
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, 70);
  ctx.stroke();
  // Foliage 1
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(35, 60);
  ctx.lineTo(65, 60);
  ctx.lineTo(50, 30);
  ctx.fill();

  // Stump 2
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(40, 150);
  ctx.lineTo(40, 170);
  ctx.stroke();
  // Foliage 2
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(25, 160);
  ctx.lineTo(55, 160);
  ctx.lineTo(40, 130);
  ctx.fill();

  // Stump 3
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(180, 40);
  ctx.lineTo(180, 60);
  ctx.stroke();
  // Foliage 3
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(165, 50);
  ctx.lineTo(195, 50);
  ctx.lineTo(180, 20);
  ctx.fill();

  // Stump 4
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(250, 550);
  ctx.lineTo(250, 570);
  ctx.stroke();
  // Foliage 4
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(235, 560);
  ctx.lineTo(265, 560);
  ctx.lineTo(250, 530);
  ctx.fill();

  // Stump 5
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(450, 20);
  ctx.lineTo(450, 40);
  ctx.stroke();
  // Foliage 5
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(435, 30);
  ctx.lineTo(465, 30);
  ctx.lineTo(450, 5);
  ctx.fill();

  // Stump 6
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(60, 450);
  ctx.lineTo(60, 470);
  ctx.stroke();
  // Foliage 6
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(45, 460);
  ctx.lineTo(75, 460);
  ctx.lineTo(60, 430);
  ctx.fill();

  // Stump 7
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(30, 350);
  ctx.lineTo(30, 370);
  ctx.stroke();
  // Foliage 7
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(15, 360);
  ctx.lineTo(45, 360);
  ctx.lineTo(30, 330);
  ctx.fill();

  // Stump 8
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(50, 250);
  ctx.lineTo(50, 270);
  ctx.stroke();
  // Foliage 8
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(35, 260);
  ctx.lineTo(65, 260);
  ctx.lineTo(50, 230);
  ctx.fill();

  // Stump 9
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(75, 550);
  ctx.lineTo(75, 570);
  ctx.stroke();
  // Foliage 9
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(60, 560);
  ctx.lineTo(90, 560);
  ctx.lineTo(75, 530);
  ctx.fill();

  // Stump 10
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(550, 55);
  ctx.lineTo(550, 75);
  ctx.stroke();
  // Foliage 10
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(535, 65);
  ctx.lineTo(565, 65);
  ctx.lineTo(550, 35);
  ctx.fill();

  // Stump 11
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(450, 535);
  ctx.lineTo(450, 555);
  ctx.stroke();
  // Foliage 11
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(435, 545);
  ctx.lineTo(465, 545);
  ctx.lineTo(450, 515);
  ctx.fill();

  // Stump 12
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(550, 135);
  ctx.lineTo(550, 155);
  ctx.stroke();
  // Foliage 12
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(535, 145);
  ctx.lineTo(565, 145);
  ctx.lineTo(550, 115);
  ctx.fill();

  // Stump 13
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(550, 350);
  ctx.lineTo(550, 370);
  ctx.stroke();
  // Foliage 13
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(535, 360);
  ctx.lineTo(565, 360);
  ctx.lineTo(550, 330);
  ctx.fill();

  // Stump 14
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(535, 420);
  ctx.lineTo(535, 440);
  ctx.stroke();
  // Foliage 14
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(520, 430);
  ctx.lineTo(550, 430);
  ctx.lineTo(535, 400);
  ctx.fill();

  // Stump 15
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(560, 230);
  ctx.lineTo(560, 250);
  ctx.stroke();
  // Foliage 15
  ctx.fillStyle = TreeColor;
  ctx.beginPath();
  ctx.moveTo(545, 240);
  ctx.lineTo(575, 240);
  ctx.lineTo(560, 210);
  ctx.fill();
}

// Keyboard Handler
document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  keyPhrase = keyPhrase + event.key;
  console.log(keyPhrase);
  if (keyPhrase == "winter") {
    TreeColor = "white";
  }
}
