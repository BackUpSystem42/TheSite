const red = { r: 232, g: 20, b: 22, a: 1};

const orange = { r: 255, g: 165, b: 0, a: 1};

const yellow = { r: 250, g: 235, b: 54, a: 1};

const green = { r: 121, g: 195, b: 20, a: 1};

const blue = { r: 72, g: 125, b: 231, a: 1};

const indigo = { r: 75, g: 54, b: 157, a: 1};

const violet = { r: 112, g: 54, b: 157, a: 1};

const rainbow = [red, orange, yellow, green, blue, indigo, violet];

const button_name = ["red-button", "orange-button", "yellow-button", "green-button", "blue-button", "indigo-button", "violet-button"];

let colorModeRainbow = [];

let backImg = document.getElementById("back-logo");

let frontImg = document.getElementById("front-logo");

let imgFlip = true;

let pageIndex;

function pageMonochromeShift(base, added, opacity)
{
    let original_a = added.a;
    added.a = added.a * opacity;

    let mix = {};
    mix.a = base.a;

    let luminance = 
    (base.r * 0.2126 + base.g * 0.7152 + base.b * 0.0722)/255
    // /(added.r * 0.2126 + added.g * 0.7152 + added.b * 0.0722) 
     ;
    // console.log(luminance);

    ["r", "g", "b"].forEach(ch =>
    {
        let normal_base = base[ch] / 255;
        let normal_added = added[ch] / 255;

        mix[ch] = (luminance * normal_added * added.a) + (normal_base * (1-added.a));
        // +  (normal_base * (1 - added.a));

        // console.log("before: ",ch , mix[ch]*255);
        mix[ch] = clamp(Math.round(255 * mix[ch]), 0, 255);       
    })

    added.a = original_a
    console.log("end :", mix)
	return mix;
}

function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
}

function parseRGB(rgbString) 
{
        const values = rgbString.substring(4, rgbString.length - 1).split(',').map(Number);
        return {
            r: values[0],
            g: values[1],
            b: values[2]
        };
}


function RBG2Text(rgbFormat)
{
    // console.log(rgbFormat);
    return `rgba(${rgbFormat.r}, ${rgbFormat.g}, ${rgbFormat.b}, ${rgbFormat.a})`;
}

function mouseOver(index)
{
    document.getElementById(button_name[index]).style.backgroundColor = RBG2Text(rainbow[index]);
    
    GetLogo(index);
}

function mouseOut(index)
{
    document.getElementById(button_name[index]).style.backgroundColor = RBG2Text(colorModeRainbow[index]);

    GetLogo(pageIndex);
}

function UpdatePageColor(index)
{
    GetLogo(index);
    let appledColor = rainbow[index]; 
    let newColor = {};
    for(let i = 0; i < 7; i++)
    {
        newColor = pageMonochromeShift(rainbow[i],appledColor, 1);
        // document.getElementById(button_name[i]).style.backgroundColor = RBG2Text(rainbow[i]);

        document.getElementById(button_name[i]).style.backgroundColor = RBG2Text(newColor);

        colorModeRainbow.push(newColor);
    }

    console.log(colorModeRainbow);

    document.body.style.backgroundImage = "linear-gradient(to top, black,"+ RBG2Text(appledColor) + ", black)";

    pageIndex = index
}

function GetLogo(index)
{
    let img;
    let disableImg;
    
    if(imgFlip)
    {
        img = frontImg;
        disableImg = backImg;
    }
    else
    {
        img = backImg;
        disableImg = frontImg;
    }

    switch(index)
    {
        case 0: 
            img.src = "Pictures/Logo_V3_RedFilter.png";
            break;
        case 1: 
            img.src = "Pictures/Logo_V3_OrangeFilter.png";
            break;
        case 2: 
            img.src = "Pictures/Logo_V3_YellowFilter.png";
            break;
        case 3: 
            img.src = "Pictures/Logo_V3_GreenFilter.png";
            break;
        case 4: 
            img.src = "Pictures/Logo_V3_BlueFilter.png";
            break;
        case 5: 
            img.src = "Pictures/Logo_V3_IndigoFilter.png";
            break;
        case 6: 
            img.src = "Pictures/Logo_V3_VioletFilter.png";
            break;
        default:
            img = "Pictures/Logo_V3.png";
    }

    img.style.opacity = 1;
    disableImg.style.opacity = 0;

    imgFlip = !imgFlip;

}



// let testColor = RBG2Text(rainbow[0]);
// let testColor = RBG2Text(pageMonochromeShift(red, yellow, 1));
// // document.getElementById("red-button").style.backgroundColor = testColor;
// // document.getElementById("logo").addEventListener("loadeddata", function() {UpdatePageButtons(1);},
// // {once: true});
// // document.body.style.backgroundColor = RBG2Text(red);
// document.body.style.backgroundColor = testColor;
// document.body.style.backgroundImage = "linear-gradient(to top, black,"+ testColor+", black)"
