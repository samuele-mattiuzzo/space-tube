// all the methods!
function spawnPlayer(videoId) {
  player = new YT.Player('player', {
    width: '100%',
    heihgt: '100%',
    videoId: videoId,
    events: {
    'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
    var duration = player.getDuration();
    var timeSpent = viewCount * duration; // in seconds

    var distance = convertToDistance(timeSpent/3600, spaceShipSpeed);
    timeSpent = secondsToString(timeSpent);

    var message = "<p>";
    message = message + spaceShip + " could have traveled " + distance + " miles at " + spaceShipSpeed + " miles per hour</p><p>";
    message = message + timeSpent + " have been spent watching this";
    message = message + "</p>";
    statsDiv.innerHTML = message;

}
