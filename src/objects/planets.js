var nextPlanet = 1,
    totalTravel,
    traveledPlanets,
    step,
    isMoving = false,
    planetImage,
    maxPlanetRadius = 150,
    angle = 1; // we get it back to 0 and stop the animation

function loadPlanets() {
    traveledPlanets = [];
    totalTravel = convertToDistance(
        (viewCount * videoDuration)/3600, spaceShipSpeed);
    totalTravel = Math.ceil(totalTravel / AU); // let's not be picky

    for (var i=0; i<PLANETS.length; i++) {
        if (PLANETS[i][1] <= totalTravel) {
            traveledPlanets.push(PLANETS[i]);
        }
    }

    step = Math.floor(videoDuration / traveledPlanets.length);  // in seconds
}

function checkPlanetTime() {
    return videoNow >= step * nextPlanet;
}

function panPlanet() {
    if (nextPlanet <= traveledPlanets.length) {
        var isTime = checkPlanetTime();
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
