var tag,
    firstScriptTag,
    player,
    videoId,
    form;

tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

form = document.forms[0]

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  var video = form.elements['videoToExplore'].value;
  video = video.replace('https://www.youtube.com/watch?v=', '')
  spawnPlayer(video);
});

// all the methods!
function spawnPlayer(videoId) {
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
    alert(duration);
}
