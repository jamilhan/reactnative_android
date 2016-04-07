
function Vibrate() {
	var vibrator = require("nativescript-vibrate");
	vibrator.vibration(3000); 
}

exports.pageLoaded = Vibrate;