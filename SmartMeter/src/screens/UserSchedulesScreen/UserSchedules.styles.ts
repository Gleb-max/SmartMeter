import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		paddingTop: 28,
		backgroundColor: '#FDFDFD',
	},
	header: {
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: 38,
		color: '#000000',
		marginTop: 37,
		marginBottom: 3,
	},
	emptyListContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 74.23,
	},
	emptyListText: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 20,
		lineHeight: 24.38,
		marginBottom: 48,
	},
	schedulesContainer: {
		flex: 1,
	},
	itemContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		height: 44,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
		marginHorizontal: 4,
		marginBottom: 32,
	},
	schedulesList: {
		flex: 1,
	},
	addButtonContaier: {
		backgroundColor: '#FFFFFF',
		position: 'absolute',
		width: 66,
		height: 66,
		borderRadius: 33,
		bottom: 90,
		right: 30,
	},
	addButtonOpacity: {
		backgroundColor: '#005670',
		position: 'absolute',
		width: '100%',
		height: '100%',
		borderRadius: 33,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
