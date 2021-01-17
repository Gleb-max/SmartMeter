import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		alignSelf: 'stretch',
		paddingHorizontal: 27,
	},
	contentContainer: {
		backgroundColor: '#FFFFFF',
		marginVertical: 1,
		flexDirection: 'row',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 2),
	},
	contentText: {
		color: '#000000',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingRight: 24,
	},
	contentContainer: {
		backgroundColor: '#FFFFFF',
		shadowColor: 'rgba(0, 0, 0, 0.04)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		elevation: 4,
		alignSelf: 'stretch',
		marginVertical: 9,
		flexDirection: 'row',
		alignItems: 'center',
	},
	mark: {
		alignSelf: 'flex-start',
		marginTop: 0,
		marginLeft: 0,
		backgroundColor: '#005670',
	},
	contentText: {
		color: '#000000',
		fontFamily: 'Montserrat-Medium',
		fontStyle: 'normal',
		fontWeight: '500',
		paddingTop: 9,
		paddingBottom: 10,
		paddingRight: 21,
		lineHeight: 20,
	},
	mark: {
		alignSelf: 'flex-start',
		marginTop: 0,
		marginLeft: 0,
		backgroundColor: '#005670',
	},
	date: {
		color: '#000000',
		marginTop: 26,
		alignSelf: 'center',
	},
	date: {
		color: '#000000',
		fontFamily: 'Gilroy-Medium',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 17,
		lineHeight: 21,
		marginBottom: 16,
	},
});

export default styles;
