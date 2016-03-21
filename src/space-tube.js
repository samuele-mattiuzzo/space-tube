// Paul Irish's great RAF shim
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// start panning the random stars image across the background canvas
var fps = 60;
var offsetLeft=0;

function loop() {

    panStars();
    animateSpaceship();

    setTimeout(function() {
        requestAnimFrame(loop);
    }, 1000 / fps);
}
