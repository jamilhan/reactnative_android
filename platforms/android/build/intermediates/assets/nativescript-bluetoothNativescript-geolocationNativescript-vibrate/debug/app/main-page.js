var application = require("application");
//application.start();
	
var frameModule = require("ui/frame");


exports.testUI = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testUI/testUI");
}

exports.testSensors = function() {
	var topMost = frameModule.topmost();
	topMost.navigate("Views/testSensors/testSensors");
} 