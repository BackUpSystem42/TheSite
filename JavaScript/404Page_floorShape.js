const floorCanvas = document.getElementById("floor");
const element = document.getElementById("404Page_Body")
const ctx = canvas.getContext("2d");

//sides of the trapezoid
/*
    -------a----------
    /   |              \
    c    |                d
/      h                 \
-------------b------------
*/
let a = window.innerWidth / 3;
let b = window.innerWidth;
let h = a/2;
let floor = 45;

canvas.width = element.offsetWidth;
canvas.height = 300;
// Define a new path:
ctx.beginPath();

// Define a start point
ctx.moveTo(a, 0);

// Define points
ctx.lineTo(a + a, 0);
ctx.lineTo(b, h);
ctx.lineTo(b, h + floor);
ctx.lineTo(element.offsetWidth-b, h + floor);
ctx.lineTo(element.offsetWidth-b, h);

ctx.strokeStyle = "rgb(0 0 0 / 0%)"
ctx.lineWidth = 10;
// Draw it
ctx.stroke();

//Color shape
const grad = ctx.createLinearGradient(0,0, 0,100);
grad.addColorStop(0, "white");
grad.addColorStop(1, "darkgray")
ctx.fillStyle = grad;
ctx.fill();

    