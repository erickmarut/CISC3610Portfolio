// Getting the canvas element and its 2d context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Drawing background
ctx.fillStyle = '#25bdf5'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Drawing grass using a for loop
ctx.fillStyle = '#38ab0a';
for (let i = 0; i < canvas.width; i += 10) {
    ctx.fillRect(i, 250, 5, 20);
}

// Drawing bottom background
ctx.fillStyle = '#38ab0a';
ctx.fillRect(0, 270, canvas.width, canvas.height - 270);

// Drawing sun
ctx.beginPath();
ctx.arc(50, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = '#fffb0d';
ctx.fill();
ctx.closePath();

// Drawing cloud
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(155, 150, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(180, 140, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(205, 150, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// Drawing cloud 2
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(355, 80, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(380, 70, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(405, 80, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();