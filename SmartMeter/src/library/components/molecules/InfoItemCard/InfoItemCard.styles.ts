import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		alignSelf: 'stretch',
		paddingHorizontal: 27,
	},
	contentContainer: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		shadowColor: 'rgba(0, 0, 0, 0.04)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		elevation: 4,
		alignSelf: 'stretch',
		marginVertical: 9,
		alignItems: 'center',
	},
	contentText: {
		color: '#000000',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingRight: 24,
		paddingTop: 9,
		paddingBottom: 10,
		lineHeight: 20,
		fontStyle: 'normal',
		fontWeight: '500',
	},
	mark: {
		alignSelf: 'flex-start',
		backgroundColor: '#005670',
	},
	date: {
		marginTop: 16,
		marginBottom: 5,
		fontSize: 17,
		lineHeight: 21,
		color: '#000000',
	},
});

export default styles;
