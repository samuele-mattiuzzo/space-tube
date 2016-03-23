var tag,
    firstScriptTag,
    player,
    videoId,
    form,
    video,
    viewCount,
    spaceShip = 'missile',
    spaceShipSpeed,
    statsDiv,
    videoDuration,
    videoNow;

var canvas,
    ctx,
    canvasPlanets,
    ctxPlanets,
    background,
    bkCtx;

// where we draw the spaceship
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

// where we draw the planets
canvasPlanets = document.getElementById("planets");
ctxPlanets = canvasPlanets.getContext("2d");

// where we draw the stars
background = document.getElementById("background");
bkCtx = background.getContext("2d");

// space variables (in miles)
var AU = 92957130.3587,
    PLANETS = [
        ['Moon', 0.00031197621, ''],
        ['Mars', 0.52, ''],
        ['Sun', 1, ''],
        ['Jupiter', 4.2, ''],
        ['Saturn', 8.52, ''],
        ['Uranus', 18.21, ''],
        ['Neptune', 29.09, ''],
    ];
