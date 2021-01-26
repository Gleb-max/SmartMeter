import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 30,
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	title: {
		marginTop: 37,
		marginBottom: 37,
	},
	button: {
		borderRadius: 10,
		height: 52,
		marginBottom: 32,
	},
	buttonText: {
		fontFamily: 'Gilroy-Medium',
		fontSize: 19,
	},
	plus: {
		backgroundColor: '#005670',
		width: 66,
		height: 66,
		borderRadius: 33,
		position: 'absolute',
		bottom: 90,
		right: 30,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,
	},
});

export default styles;
