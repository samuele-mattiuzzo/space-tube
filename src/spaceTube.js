// Paul Irish's great RAF shim
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// the main loop
var fps = 60,
    ytp,
    videoNow;

function preFlight(player) {
    ytp = player;
}

function loop() {
    // the stars panning and the spaceship keep going
    panStars();
    animateSpaceship();

    setTimeout(function() {
        requestAnimFrame(loop);
    }, 1000 / fps);
}

function planetLoop() {
    // the planet should appear just when it's time
    // and if the player is playing
    videoNow = ytp.getCurrentTime();
    if (checkPlanetTime(videoNow)) {
        panPlanet();
    }

    setTimeout(function() {
        requestAnimFrame(planetLoop);
    }, 1000 / fps);
}
