// Paul Irish's great RAF shim
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var background=document.getElementById("background");
var bkCtx=background.getContext("2d");

// create an image of random stars
var backImage=RandomStarsImage();

// draw on the front canvas
ctx.beginPath();
ctx.fillStyle="red";
ctx.rect(75,100,100,50);
ctx.arc(175,125,25,0,Math.PI*2,false);
ctx.closePath();
ctx.fill();

// start panning the random stars image across the background canvas
var fps = 60;
var offsetLeft=0;

function panStars() {

    // increase the left offset
    offsetLeft+=1;
    if(offsetLeft>backImage.width){ offsetLeft=0; }

    // draw the starfield image and draw it again
    // to fill the empty space on the right of the first image
    bkCtx.clearRect(0,0,background.width,background.height);
    bkCtx.drawImage(backImage,-offsetLeft,0);
    bkCtx.drawImage(backImage,backImage.width-offsetLeft,0);

    setTimeout(function() {
        requestAnimFrame(panStars);
    }, 1000 / fps);
}

function RandomStarsImage(){

    // draw a random starfield on the canvas
    bkCtx.beginPath();
    bkCtx.fillStyle="black";
    bkCtx.rect(0,0,background.width,background.height);
    bkCtx.fill();
    bkCtx.beginPath();
    for(var n=0;n<100;n++){
        var x=parseInt(Math.random()*canvas.width);
        var y=parseInt(Math.random()*canvas.height);
        var radius=Math.random()*3;
        bkCtx.arc(x,y,radius,0,Math.PI*2,false);
        bkCtx.closePath();
    }
    bkCtx.fillStyle="white";
    bkCtx.fill();

    // create an new image using the starfield canvas
    var img=document.createElement("img");
    img.src=background.toDataURL();
    return(img);
}
