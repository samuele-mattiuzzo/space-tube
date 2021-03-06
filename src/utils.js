function convertToDistance(timeSpent, vehicleSpeed) {
    return Math.round(timeSpent * vehicleSpeed);
}

function humanReadableDistance(totalDistance) {
    // converts a long number into 1.234.567 format
    // reverses the string to match it every 3 then re-reverses it
    // otherwise we'd end with something like 123.456.7 rather than 1.234.567
    totalDistance = totalDistance.toString();
    tmp = totalDistance.split("").reverse().join("");
    tmp = tmp.match(/.{3}/g);
    tmp = tmp.join(".");
    tmp = tmp.split("").reverse().join("");
    return tmp
}

function secondsToString(seconds) {
    // makes a bunch of seconds more human readable
    var numyears = Math.floor(seconds / 31536000);
    var numdays = Math.floor((seconds % 31536000) / 86400);
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    return numyears + " years " +  numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";
}
