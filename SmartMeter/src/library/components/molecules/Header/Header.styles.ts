import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		width: '100%',
		height: 40,
	},
	icon: {
		marginTop: 31,
		marginLeft: 30,
		width: 30,
		position: 'absolute',
	},
	profilePhoto: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginLeft: '80%',
	},
	text: {
		position: 'absolute',
		right: '22%',
		top: 1,
	},
	address: {
		position: 'absolute',
		marginTop: 16,
		right: 1,
	},
	photo: {
		...StyleSheet.absoluteFillObject,
		borderRadius: 20,
	},
});

export default styles;
