var frameModule = require("ui/frame")


exports.testCamera = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testcases/sensors/camera/testCamera");
}

exports.testVibrate = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testcases/sensors/vibrate/testVibrate");
}

exports.testWifi = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testcases/sensors/wifi/testWifi");
}

exports.testBluetooth = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testcases/sensors/bluetooth/testBluetooth");
}

exports.testGPS = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testcases/sensors/gps/testGPS")
}