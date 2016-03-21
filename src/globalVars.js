var tag,
    firstScriptTag,
    player,
    videoId,
    form,
    video,
    viewCount,
    spaceShip, spaceShipSpeed,
    statsDiv;

var canvas,
    ctx,
    background,
    bkCtx,
    backImage;

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
background=document.getElementById("background");
bkCtx=background.getContext("2d");
