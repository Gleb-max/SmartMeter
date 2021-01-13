import { DimensionsManager } from 'library/modules/DimensionsManager';
import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		padding: 31,
	},
	indicator: {
		marginTop: DimensionsManager.horizontalScale(90),
		marginBottom: DimensionsManager.horizontalScale(12),
		alignSelf: 'center',
	},
	dropdown: {
		width: 142,
		height: 31,
		alignSelf: 'center',
		elevation: 1,
	},
	button: {
		height: 52,
		width: 258,
		backgroundColor: '#ffffff',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
	buttons: {
		marginTop: DimensionsManager.horizontalScale(19),
		justifyContent: 'space-between',
		height: 194,
		width: 258,
		alignSelf: 'center',
	},
	numberCon: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: '#005670',
	},
	number: {
		fontFamily: 'Gilroy-Medium',
		fontSize: 14,
		color: '#ffffff',
	},
	text: {
		color: '#000000',
		fontFamily: 'Gilroy-Medium',
		fontSize: 17,
	},
	list: {
		width: 142,
		alignSelf: 'center',
		elevation: 1,
	},
});

export default styles;
