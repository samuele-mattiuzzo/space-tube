var nextPlanet = 1,
    videoDuration = 0,
    traveledPlanets,
    step,
    isMoving = false,
    planetImage,
    maxPlanetRadius = 150,
    angle = 1, // we get it back to 0 and stop the animation
    canvasPlanets,
    ctxPlanets;

// where we draw the planets
canvasPlanets = document.getElementById("planets");
ctxPlanets = canvasPlanets.getContext("2d");

function loadPlanets(totalDistance, vd) {
    traveledPlanets = [];
    videoDuration = vd;
    totalDistance = Math.ceil(totalDistance / AU); // let's not be picky

    // creates the traveled planets list
    for (var i=0; i<PLANETS.length; i++) {
        if (PLANETS[i][1] <= totalDistance) {
            traveledPlanets.push(PLANETS[i]);
        }
    }

    // for every planet calculates the % distance and matches it with the video player
    step = Math.floor(videoDuration / traveledPlanets.length);  // in seconds
}

function checkPlanetTime(videoNow) {
    return videoNow >= step * nextPlanet;
}

function panPlanet() {
    ctxPlanets.beginPath();
    ctxPlanets.arc(100,75,50,0,2*Math.PI);
    ctxPlanets.stroke();
    if (nextPlanet <= traveledPlanets.length) {
        var isTime = checkPlanetTime(1);
        if (isTime == true && isMoving == false) {
            var currentPlanet = traveledPlanets[nextPlanet - 1];
            planetImage = PlanetImage(currentPlanet[0], currentPlanet[2]);
            isMoving = true;
            angle = 1; // to reset the animation
        } else {
            if (isMoving == true) {
                if (isTime == false) {
                    isMoving == false;
                    nextPlanet += 1;
                } else {
                    // move the planet here
                    // planet appears in the center of the canvas
                    // enlarges to full size with name in it
                    // deflates to darkness
                    // https://www.kirupa.com/html5/creating_simple_html5_canvas_animation.htm
                    angle += Math.PI / 64;

                }
            }
        }
    }
}

function PlanetImage(name, color) { }
