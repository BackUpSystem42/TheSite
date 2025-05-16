//constant and delcare variables
const element = document.getElementById("_404Page_Body");
let canvas;
let ctx;

let a;
let b;
let h;

let offset;
let grad; //gradient
//ceiling shape
canvas = document.getElementById("ceiling");
ctx = canvas.getContext("2d");

//sides of the trapezoid
/*
    -------a----------
   /   |              \
  c    |               d
/      h                 \
-------------b------------
*/
a = element.offsetWidth / 3;
b = element.offsetWidth;
h = a / 2;

canvas.width = element.offsetWidth;
canvas.height = h;
// Define a new path:
ctx.beginPath();

// Define a start point
ctx.moveTo(0, 0);

// Define points
ctx.lineTo(b, 0);
ctx.lineTo(a + a, h);
ctx.lineTo(a, h);

ctx.strokeStyle = "rgb(0 0 0 / 0%)";
ctx.lineWidth = 0;
// Draw it
ctx.stroke();

//Color shape
grad = ctx.createLinearGradient(0,0, 0,h);
grad.addColorStop(1, "white");
grad.addColorStop(0, "darkgray");
ctx.fillStyle = grad;
ctx.fill();
// location.reload();
//------------------------------------------------------
//end of the hall
/*
----------a----------
|                   |
|                   |
b                   |
|                   |
---------------------
*/

canvas = document.getElementById("endHallway");
ctx = canvas.getContext("2d");

a = element.offsetWidth / 3;
b = a * 1.5;

canvas.width = element.offsetWidth;
canvas.height = b;

ctx.beginPath();

// Define a start point
ctx.moveTo(a, 0);

// Define points
ctx.lineTo(a + a, 0);
ctx.lineTo(a + a, b);
ctx.lineTo(a, b);

ctx.strokeStyle = "rgb(0 0 0 / 0%)";
ctx.lineWidth = 0;
// Draw it
ctx.stroke();

//Color shape
grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, canvas.width/10, canvas.width/2, canvas.height/2, canvas.width/50);
grad.addColorStop(0, "white");


grad.addColorStop(1, "black");
ctx.fillStyle = grad;
ctx.fill();

//------------------------------------------------------
//floor shape
canvas = document.getElementById("floor");
ctx = canvas.getContext("2d");

//sides of the trapezoid
/*
    -------a----------
   /   |              \
  c    |                d
/      h                 \
-------------b------------
*/
a = element.offsetWidth  / 3;
b = element.offsetWidth;
h = a / 2;
offset = 45;

canvas.width = element.offsetWidth;
canvas.height = h + offset;
// Define a new path:
ctx.beginPath();

// Define a start point
ctx.moveTo(a, 0);

// Define points
ctx.lineTo(a + a, 0);
ctx.lineTo(b, h);
ctx.lineTo(b, h + offset);
ctx.lineTo(0, h + offset);
ctx.lineTo(0, h);

ctx.strokeStyle = "rgb(0 0 0 / 0%)";
ctx.lineWidth = 0;
// Draw it
ctx.stroke();

//Color shape
grad = ctx.createLinearGradient(0,0, 0,100);
grad.addColorStop(0, "white");
grad.addColorStop(.75, "darkgray");
ctx.fillStyle = grad;
ctx.fill();

 
//------------------------------------------------------
//when resize the window it will redraw the shapes
window.addEventListener
("resize",
  function()
  {
    location.reload();
  }
);

// window.addEventListener
// ("mousemove",
//   function(event)
//   {
//     const x = event.clientX;
//     const y = event.clientY;

//     canvas = document.getElementById("endHallway");
//     ctx = canvas.getContext("2d");

//     let offCenterX;
//     let offCenterY;

    
//     if(x > element.offsetWidth/3 && x < element.offsetWidth * 2 /3)
//     {
//       offCenterX = x;
//     }

//      if(y > canvas.height && y < element.offsetWidth * 2 /3)
//     {
//       offCenterY = y;
//     }
//     //when the mouse is outisde the square there is an error

//     console.log(y);

//     grad = ctx.createRadialGradient(offCenterX, offCenterY, 30, 
//                                 offCenterX, offCenterY, 180);
//     grad.addColorStop(0, "white");
//     grad.addColorStop(0.05, "red");
//     grad.addColorStop(0.2, "orange");
//     grad.addColorStop(0.3, "yellow");
//     grad.addColorStop(0.4, "green");
//     grad.addColorStop(0.5, "blue");
//     grad.addColorStop(0.6, "indigo");
//     grad.addColorStop(0.7, "violet");
//     grad.addColorStop(0.8, "white");

//     grad.addColorStop(1, "black");
//     ctx.fillStyle = grad;
//     ctx.fill();

//   }

// );

