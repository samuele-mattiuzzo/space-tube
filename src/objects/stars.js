// create an image of random stars
var backImage,
    offsetLeft = 0,
    background,
    bkCtx;

// where we draw the stars
background = document.getElementById("background");
bkCtx = background.getContext("2d");


function loadStars() { backImage = RandomStarsImage(); }

function panStars() {
    // increase the left offset
    offsetLeft += 1;
    if(offsetLeft > backImage.width){ offsetLeft = 0; }

    // draw the starfield image and draw it again
    // to fill the empty space on the right of the first image
    bkCtx.clearRect(0, 0, background.width, background.height);
    bkCtx.drawImage(backImage, -offsetLeft, 0);
    bkCtx.drawImage(backImage, backImage.width-offsetLeft, 0);
}

function RandomStarsImage() {

    // draw a random starfield on the canvas
    bkCtx.beginPath();
    bkCtx.fillStyle = "black";
    bkCtx.rect(0, 0, background.width, background.height);
    bkCtx.fill();
    bkCtx.beginPath();

    for(var n=0; n<100; n++){
        var x = parseInt(Math.random()*background.width),
            y = parseInt(Math.random()*background.height),
            radius = Math.random()*3;

        bkCtx.arc(x, y, radius, 0, Math.PI*2, false);
        bkCtx.closePath();
    }
    bkCtx.fillStyle = "white";
    bkCtx.fill();

    // create an new image using the starfield canvas
    var img = document.createElement("img");
    img.src = background.toDataURL();
    return(img);
}
