import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';
import { DimensionsManager } from 'library/modules/DimensionsManager';

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		height: DimensionsManager.horizontalScale(60),
		backgroundColor: '#ffffff',
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
	containerWithoutMarker: {
		alignSelf: 'stretch',
		height: DimensionsManager.horizontalScale(40),
		backgroundColor: '#ffffff',
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
		justifyContent: 'center',
	},
	header: {
		color: '#000000',
		marginLeft: 18,
		position: 'absolute',
	},
	text: {
		fontFamily: 'Roboto',
		fontSize: 14,
		color: '#747474',
		marginLeft: 18,
	},
	blueMarker: {
		width: 11,
		height: 27,
		backgroundColor: '#005670',
	},
	redMarker: {
		width: 11,
		height: 27,
		backgroundColor: '#FF5B5B',
	},
	icon: {
		marginLeft: 300,
		marginTop: 23,
		position: 'absolute',
	},
	iconWithoutMarker: {
		marginLeft: 290,
		marginTop: 13,
		position: 'absolute',
	},
	withoutMarkerText: {
		color: '#000000',
		fontFamily: 'Montserrat-Medium',
		fontSize: 14,
		marginLeft: 18,
		position: 'absolute',
	},
});

export default styles;
