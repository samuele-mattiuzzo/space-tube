var planet,
    planetImage,
    startPos = 1000,
    endPos = 0,
    x = startPos,
    y = 200,
    dx = 1.5, // step
    nextPlanet = 1,
    videoDuration = 0,
    traveledPlanets = [],
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
    for (var i=0; i<traveledPlanets.length; i++) {
        var planetDistance = Math.ceil(traveledPlanets[i][1] / AU),
            step = Math.ceil((planetDistance * 100) / totalDistance);
        traveledPlanets[i].push(step); // in %
    }
}

function checkPlanetTime(videoNow) {
    // videoNow is the current % of the video
    var isTime = videoNow >= traveledPlanets[nextPlanet -1][3];
    if (isTime == true) {
        planet = traveledPlanets[nextPlanet - 1];
        nextPlanet += 1;
        x = startPos;
        PlanetImage(planet[0], planet[2], planet[3]);
    }
    return isTime;
}

function panPlanet() {
    ctxPlanets.clearRect(0, 0, 1000, 450);
    x -= dx;
    if (x < endPos) { return false; }
    PlanetImage(planet[0], planet[2], planet[3]);
    return true;
}

function PlanetImage(name, color, percent) {
    ctxPlanets.beginPath();
    ctxPlanets.arc(x, y, 100, 0, 2 * Math.PI, false);
    ctxPlanets.fillStyle = color;
    ctxPlanets.fill();
    ctxPlanets.lineWidth = 5;
    ctxPlanets.strokeStyle = '#003300';
    ctxPlanets.stroke();
    ctxPlanets.font = "14px Arial";
    ctxPlanets.fillText(name + " (" + percent + "%)", x, y);
}
