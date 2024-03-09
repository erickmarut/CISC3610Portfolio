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

// Drawing house 
ctx.fillStyle = '#fca400';
ctx.fillRect(340, 250, 100, 80); //sqaure for house

ctx.fillStyle = '#9c701f';
ctx.beginPath(); //roof
ctx.moveTo(340, 250);
ctx.lineTo(440, 250);
ctx.lineTo(390, 200);
ctx.closePath();
ctx.fill();

ctx.fillStyle = '#918a8a';
ctx.fillRect(350, 270, 30, 30);//window

ctx.fillStyle = '#9c701f';
ctx.fillRect(390, 270, 30, 60); //door

ctx.fillStyle = '#000000';
ctx.fillRect(410, 300, 5, 5); //door handle

ctx.strokeStyle = '#000000'; //lines in window
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(365, 270);
ctx.lineTo(365, 300);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(350, 285);
ctx.lineTo(380, 285);
ctx.stroke();

// Drawing flower
ctx.fillStyle = '#ff99cc';
ctx.beginPath();
ctx.arc(300, 300, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.strokeStyle = '#00ff00'; // Drawing stem
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(300, 310);
ctx.lineTo(300, 325);
ctx.stroke();
ctx.closePath();

// Drawing flower 2
ctx.fillStyle = '#7607ba';
ctx.beginPath();
ctx.arc(270, 315, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.strokeStyle = '#00ff00'; // Drawing stem
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(270, 325);
ctx.lineTo(270, 340);
ctx.stroke();
ctx.closePath();

// Drawing flower 3
ctx.fillStyle = '#d4113b';
ctx.beginPath();
ctx.arc(240, 300, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.strokeStyle = '#00ff00'; // Drawing stem
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(240, 310);
ctx.lineTo(240, 325);
ctx.stroke();
ctx.closePath();

// Caption
ctx.font = '20px Helvetica';
ctx.fillStyle = 'black';
ctx.fillText('My Sunny, Peaceful Home', 130, 475);


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const cloudImage = new Image();
    const cloud2Image = new Image();

    cloudImage.src = "cloud.png";
    cloud2Image.src = "cloud.png";

    const cloud1 = { x: 0, y: 50, speed: 2 };
    const cloud2 = { x: 200, y: 100, speed: 1.5 };

    function drawBackground() {
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

        // Drawing house 
        ctx.fillStyle = '#fca400';
        ctx.fillRect(340, 250, 100, 80); //sqaure for house

        ctx.fillStyle = '#9c701f';
        ctx.beginPath(); //roof
        ctx.moveTo(340, 250);
        ctx.lineTo(440, 250);
        ctx.lineTo(390, 200);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#918a8a';
        ctx.fillRect(350, 270, 30, 30);//window

        ctx.fillStyle = '#9c701f';
        ctx.fillRect(390, 270, 30, 60); //door

        ctx.fillStyle = '#000000';
        ctx.fillRect(410, 300, 5, 5); //door handle

        ctx.strokeStyle = '#000000'; //lines in window
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(365, 270);
        ctx.lineTo(365, 300);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(350, 285);
        ctx.lineTo(380, 285);
        ctx.stroke();

        // Drawing flower
        ctx.fillStyle = '#ff99cc';
        ctx.beginPath();
        ctx.arc(300, 300, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = '#00ff00'; // Drawing stem
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(300, 310);
        ctx.lineTo(300, 325);
        ctx.stroke();
        ctx.closePath();

        // Drawing flower 2
        ctx.fillStyle = '#7607ba';
        ctx.beginPath();
        ctx.arc(270, 315, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = '#00ff00'; // Drawing stem
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(270, 325);
        ctx.lineTo(270, 340);
        ctx.stroke();
        ctx.closePath();

        // Drawing flower 3
        ctx.fillStyle = '#d4113b';
        ctx.beginPath();
        ctx.arc(240, 300, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = '#00ff00'; // Drawing stem
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(240, 310);
        ctx.lineTo(240, 325);
        ctx.stroke();
        ctx.closePath();

        // Caption
        ctx.font = '20px Helvetica';
        ctx.fillStyle = 'black';
        ctx.fillText('My Sunny, Peaceful Home', 130, 475);
    }

    // Draw moving clouds
    function drawCloud(x, y, image) {
        ctx.drawImage(image, x, y);
    }

    function update() {
        // Redraw the background on each frame
        drawBackground();

        cloud1.x += cloud1.speed;
        cloud2.x += cloud2.speed;

        if (cloud1.x > canvas.width) {
            cloud1.x = -cloudImage.width;
        }
        if (cloud2.x > canvas.width) {
            cloud2.x = -cloud2Image.width;
        }

        drawCloud(cloud1.x, cloud1.y, cloudImage);
        drawCloud(cloud2.x, cloud2.y, cloud2Image);

        requestAnimationFrame(update);
    }

    update();
});