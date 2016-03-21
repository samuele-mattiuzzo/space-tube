var BASE_URL = 'https://noembed.com/embed?url=https://www.youtube.com/watch?v=';

function getVideoStats(videoId, callback){
    var xmlhttp,
        url = BASE_URL + videoId;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function callback(resp) {
    alert(resp);
}
