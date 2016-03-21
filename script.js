var tag,
    firstScriptTag,
    player,
    videoId,
    form,
    video,
    viewCount,
    spaceShip, spaceShipSpeed,
    statsDiv;

tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

form = document.forms[0];
statsDiv = document.getElementById('stats');

form.addEventListener("submit", function(evt){
  evt.preventDefault();

  video = form.elements['videoToExplore'].value;
  video = video.replace('https://www.youtube.com/watch?v=', '')

  viewCount = form.elements['viewCount'].value;
  viewCount = viewCount.replace(/,/g, '');
  viewCount = parseInt(viewCount);

  spaceShip = form.elements['spaceShip'];
  spaceShipSpeed = spaceShip.options[spaceShip.selectedIndex].value;
  spaceShipSpeed = parseInt(spaceShipSpeed);
  spaceShip = spaceShip.options[spaceShip.selectedIndex].text;

  spawnPlayer(video, viewCount, spaceShip, spaceShipSpeed);
});

// all the methods!
function spawnPlayer(videoId, viewCount, spaceShip, spaceShipSpeed) {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoId,
    events: {
    'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
    var duration = player.getDuration();
    var timeSpent = viewCount * duration; // in seconds
    timeSpent = timeSpent / 3600; // in hours

    var distance = convertToDistance(timeSpent, spaceShipSpeed);

    var message = "<p>";
    message = message + "We could have traveled " + distance + " km in ";
    message = message + timeSpent + " hours that we spent watching this";
    message = message + "</p>";
    statsDiv.innerHTML = message;

}

function convertToDistance(timeSpent, vehicleSpeed) {
    return timeSpent * vehicleSpeed;
}
