import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFDFD',
		paddingHorizontal: 30,
		paddingTop: 44,
	},
	nameText: {
		color: '#000000',
		fontStyle: 'normal',
		lineHeight: 22,
		textDecorationLine: 'underline',
		fontWeight: '600',
	},
	profileInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	photo: {
		width: 68,
		height: 68,
		borderRadius: 34,
		marginRight: 14,
	},
	settingsItem: {
		marginBottom: 25,
		// height: 60,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
	},
});

export default styles;
