var img,
    startPos = 230,
    endPos = 120,
    dy = 0.8, // step
    x = 50,
    y = startPos,
    asset;

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
    y += dy;
    if (y < endPos || y > startPos) {
        dy = -dy;
    }
    ctx.drawImage(img, x, y);

}
