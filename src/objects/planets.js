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
        var planet = PLANETS[i];
        if (planet[1] <= totalDistance) {
            var step = Math.ceil( (planet[1] * 100) / totalDistance );
            planet.push(step);
            traveledPlanets.push(planet);
        }
    }

    // done with planets, extend to galaxies
    var totalDistanceLY = totalDistance / 63241;  // in LightYears
    for (var i=0; i<GALAXIES.length; i++) {
        var galaxy = GALAXIES[i];
        if (galaxy[1] <= totalDistanceLY) {
            var step = Math.ceil( (galaxy[1] * 100) / totalDistanceLY );
            galaxy.push(step);
            traveledPlanets.push(galaxy);
        }
    }
}

function checkPlanetTime(videoNow) {
    // videoNow is the current % of the video
    if (traveledPlanets.length >= nextPlanet) {
        var isTime = videoNow >= traveledPlanets[nextPlanet -1][3];
        if (isTime == true) {
            planet = traveledPlanets[nextPlanet - 1];
            nextPlanet += 1;
            x = startPos;
            PlanetImage(planet[0], planet[2], planet[3]);
        }
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

    // text
    ctxPlanets.font = "20px Arial sans-serif";
    ctxPlanets.fillStyle = "#000";
    var text = name + " (" + percent + "%)";
    var width = ctxPlanets.measureText(text).width;
    var height = ctxPlanets.measureText("w").width; // this is a GUESS of height
    ctxPlanets.fillText(text, x - (width/2) , y + (height/2));
}
