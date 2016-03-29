var img,
    sstartPos = 230,
    sendPos = 120,
    dy = 0.8, // step
    sx = 50,
    sy = sstartPos,
    asset,
    ctx,
    canvas;

// where we draw the spaceship
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

function loadSpaceship() {
    img = new Image();
    asset = spaceShip.toLowerCase();
    asset = asset.replace(' ', '-');

    img.onload = function() {
        //draw background image
        ctx.drawImage(img, x, y);
    }
    img.src = 'assets/' + asset + '.gif'
}

function animateSpaceship() {

    // down and up, continuously
    ctx.clearRect(0, 0, 1000, 450);
    sy += dy;
    if (sy < sendPos || sy > sstartPos) {
        dy = -dy;
    }
    ctx.drawImage(img, sx, sy);

}
