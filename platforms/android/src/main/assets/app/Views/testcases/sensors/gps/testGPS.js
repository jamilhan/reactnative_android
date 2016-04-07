// require the plugin
var geolocation = require("nativescript-geolocation");

function buttonGetLocationTap(args) {
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            alert("Current location is: " + loc);
        }
    }, function(e){
        alert("Error: " + e.message);
    });
}
exports.buttonGetLocationTap = buttonGetLocationTap;