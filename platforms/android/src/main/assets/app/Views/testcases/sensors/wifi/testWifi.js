//USES PERMISSION android.permission.ACCESS_NETWORK_STATE
var connectivity = require("connectivity");
var view = require("ui/core/view");

function TestConnectivity(args) {
	
	var page = args.object;
	var lblResult = view.getViewById(page, "lblResult");
	var connectionType = connectivity.getConnectionType();

	switch (connectionType) {
		case connectivity.connectionType.none:
			lblResult.text = "Geen verbinding";
			break;
		case connectivity.connectionType.wifi:
			lblResult.text = "WIFI verbinding gedetecteerd";
			break;
		case connectivity.connectionType.mobile:
			lblResult.text = "Mobiele verbinding gedetecteerd";
			break;
		default: 
			lblResult.text = "Type verbinding kan niet worden vastgesteld";
	}
}

exports.onLoad = TestConnectivity;