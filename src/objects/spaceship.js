function animateSpaceship() {
    var img = new Image();
    //drawing of the test image - img1
    img.onload = function () {
        //draw background image
        ctx.drawImage(img, 50, 120);
    };
    img.src = 'assets/missile.gif'
}
