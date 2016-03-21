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
  panStars();
});
