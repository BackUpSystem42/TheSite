const canvas = document.getElementById("ceiling");
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


ctx.moveTo(0, 0);

// Define points
ctx.lineTo(element.offsetWidth, 0);

ctx.lineTo(a + a, h);
ctx.lineTo(a, h);

ctx.strokeStyle = "rgb(0 0 0 / 0%)"
ctx.lineWidth = 10;
// Draw it
ctx.stroke();

//Color shape
const grad = ctx.createLinearGradient(0,0, 0,100);
grad.addColorStop(0, "white");
grad.addColorStop(0.75, "darkgray")
ctx.fillStyle = grad;
ctx.fill();

    