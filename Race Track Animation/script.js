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
