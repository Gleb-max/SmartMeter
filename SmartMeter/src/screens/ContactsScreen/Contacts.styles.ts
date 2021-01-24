import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {
		marginTop: 47,
		marginBottom: 10,
		marginLeft: 30,
	},
	description: {
		marginTop: 79,
		opacity: 0.7,
		color: '#000000',
		textAlign: 'center',
	},
	addButton: {
		marginTop: 32,
	},
	addButtonContaier: {
		position: 'absolute',
		width: 66,
		height: 66,
		borderRadius: 33,
		bottom: 90,
		right: 30,
		backgroundColor: '#005670',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
