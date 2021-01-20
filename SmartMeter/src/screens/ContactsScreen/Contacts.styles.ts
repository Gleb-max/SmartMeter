import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		backgroundColor: '#FFFFFF',
	},
	header: {
		marginTop: 47,
		marginBottom: 10,
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
	addButtonContainer: {
		position: 'absolute',
		bottom: 90,
		right: 30,
		width: 66,
		height: 66,
		borderRadius: 33,
		backgroundColor: '#005670',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,
	},
});

export default styles;
