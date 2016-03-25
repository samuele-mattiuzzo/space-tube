var statsDiv,
    viewCount,
    videoDuration,
    spaceShip,
    spaceShipSpeed,
    totalDistance,
    player;

statsDiv = document.getElementById('stats');

// all the methods!
function spawnPlayer(videoId, vc, ssp, ss) {
  spaceShip = ss;
  spaceShipSpeed = ssp;
  viewCount = vc;

  player = new YT.Player('player', {
    width: '100%',
    heihgt: '100%',
    videoId: videoId,
    events: {
        'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
    videoDuration = player.getDuration();
    playerReady = true;
    printMessage();

    // loading...
    loadStars();
    loadSpaceship();
    preFlight(player);
    //loadPlanets(totalDistance, videoDuration);

    // begin loop
    loop();
}

function printMessage() {
    var timeSpent = viewCount * videoDuration,
        message;
    totalDistance = convertToDistance(timeSpent/3600, spaceShipSpeed),

    readableDistance = humanReadableDistance(totalDistance);
    timeSpent = secondsToString(timeSpent);

    message = "<p>";
    message = message + spaceShip + " could have traveled " + readableDistance + " miles at " + spaceShipSpeed + " miles per hour</p><p>";
    message = message + timeSpent + " have been spent watching this";
    message = message + "</p>";
    statsDiv.innerHTML = message;
}
