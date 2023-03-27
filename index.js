canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="gray";
ctx.lineWidth=1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(300, 200, 40, 0, 2* Math.PI)
ctx.stroke