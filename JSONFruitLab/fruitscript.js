var fruitData = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 5, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
  ];

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function draw() {
    var y = 0; 

    fruitData.forEach(function (fruit) {
      ctx.fillStyle = fruit.color;
      ctx.fillRect(0, y + 0, fruit.quantity * 40, 150);
      
      ctx.fillStyle = "black";
      ctx.font = '40px Helvetica';
      ctx.fillText(fruit.quantity, 10, y+50);

      ctx.fillStyle = "black";
      ctx.font = '40px Helvetica';
      ctx.fillText(fruit.name, 10, y+125);

      y += 150;
    });
  }
  draw();