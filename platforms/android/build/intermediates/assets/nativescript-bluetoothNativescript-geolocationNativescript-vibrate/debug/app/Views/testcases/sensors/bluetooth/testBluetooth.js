// require the plugin
var bluetooth = require("nativescript-bluetooth");



function CheckBluetooth()
{
	bluetooth.isBluetoothEnabled().then(
	  function(enabled) {
		  
		  if (enabled) {
			console.log("Enabled? " + enabled);
			alert("Bluetooth staat aan");
		  } else {
			  alert("Bluetooth staat uit");
		  }
	  }
	);
}


exports.pageLoaded = CheckBluetooth;