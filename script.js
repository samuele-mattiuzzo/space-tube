var tag,
    firstScriptTag,
    form;

tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

form = document.forms[0];

form.addEventListener("submit", function(evt){
  evt.preventDefault();

  var videoId = form.elements['videoToExplore'].value;
  videoid = videoId.replace('https://www.youtube.com/watch?v=', '')

  var viewCount = form.elements['viewCount'].value;
  viewCount = viewCount.replace(/,/g, '');
  viewCount = parseInt(viewCount);

  var spaceShip = form.elements['spaceShip'];
  var spaceShipSpeed = spaceShip.options[spaceShip.selectedIndex].value;
  spaceShipSpeed = parseInt(spaceShipSpeed);
  spaceShip = spaceShip.options[spaceShip.selectedIndex].text;

  spawnPlayer(videoId, viewCount, spaceShipSpeed, spaceShip);
});
