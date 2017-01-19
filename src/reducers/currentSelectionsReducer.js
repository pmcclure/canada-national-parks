let default_state = {
	key: null, //name of the currently selected park
	position: null, //position of the currently selected park on the map
	showInfoWindow: false //whether to show the info window or not
};

export default function currentSelectionsReducer (state = default_state, action) {
	if (action.type === 'UPDATE_SELECTION') {
		return {
			key: action.key,
			position: action.position,
			showInfoWindow: action.showInfoWindow
		};
	}
	return state;
}