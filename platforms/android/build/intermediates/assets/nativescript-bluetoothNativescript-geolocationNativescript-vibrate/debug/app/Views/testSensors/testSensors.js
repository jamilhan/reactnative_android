var frameModule = require("ui/frame")



function Navigate(var view) {

	var topMost = frameModule.topmost();	
	topMost.navigate(view);
}

exports.testCamera = function() {
	Navigate("Views/testcases/sensors/camera/testCamera");
}

exports.testVibrate = function() {
	Navigate("Views/testcases/sensors/vibrate/testVibrate");
}

exports.testWifi = function() {
	Navigate("Views/testcases/sensors/wifi/testWifi");
}

exports.testBluetooth = function() {
	Navigate("Views/testcases/sensors/bluetooth/testBluetooth");
}

exports.testGPS = function() {
	Navigate("Views/testcases/sensors/gps/testGPS")
}