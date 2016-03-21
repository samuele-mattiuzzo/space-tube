var tag,
    firstScriptTag,
    player,
    videoId,
    form,
    video,
    viewCount,
    spaceShip;

tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

form = document.forms[0]

form.addEventListener("submit", function(evt){
  evt.preventDefault();

  video = form.elements['videoToExplore'].value;
  video = video.replace('https://www.youtube.com/watch?v=', '')

  viewCount = form.elements['viewCounts'].value;

  spaceShip = form.elements['spaceShip'].value;

  spawnPlayer(video, viewCount, spaceShip);
});

// all the methods!
function spawnPlayer(videoId, viewCount, spaceShip) {
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


}
