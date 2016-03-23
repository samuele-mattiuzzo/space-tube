var nextPlanet = 1,
    totalTravel,
    traveledPlanets,
    step,
    isMoving = false,
    planetImage;

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
    var videoNow = player.getCurrentTime();
    return (videoNow >= step * nextPlanet);
}

function panPlanet() {
    if (nextPlanet <= traveledPlanets.length) {
        var isTime = checkPlanetTime();
        if (isTime == true && isMoving == false) {
            var currentPlanet = traveledPlanets[nextPlanet - 1];
            planetImage = PlanetImage(currentPlanet[0], currentPlanet[2]);
            isMoving = true;
        } else {
            if (isMoving == true) {
                if (isTime == false) {
                    isMoving == false;
                    nextPlanet += 1;
                } else {
                    // move the planet here
                }
            }
        }
    }
}

function PlanetImage(name, color) { }
