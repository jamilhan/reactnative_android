var cameraModule = require("camera");
var imgModule = require("ui/image");
var lblResult;

function TestCamera(args) {
	cameraModule.takePicture().then(function(picture) {
		var image = new imageModule.Image();
		image.imageSource = picture;
	}); 
}

exports.startTest = TestCamera;


exports.pageLoaded = function(args) {
	page = args.object;
	lblResult = page.getViewById("lblResult");
}

