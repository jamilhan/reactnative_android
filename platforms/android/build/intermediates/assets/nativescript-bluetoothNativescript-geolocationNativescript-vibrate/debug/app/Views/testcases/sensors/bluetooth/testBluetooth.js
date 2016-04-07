// require the plugin
var bluetooth = require("nativescript-bluetooth");

bluetooth.isBluetoothEnabled().then(
  function(enabled) {
    console.log("Enabled? " + enabled);
  }
);