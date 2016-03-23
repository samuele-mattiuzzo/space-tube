// Paul Irish's great RAF shim
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// the main loop
var fps = 60;

function loop() {

    videoNow = player.getCurrentTime();

    panStars();
    //panPlanet();
    animateSpaceship();

    setTimeout(function() {
        requestAnimFrame(loop);
    }, 1000 / fps);
}
