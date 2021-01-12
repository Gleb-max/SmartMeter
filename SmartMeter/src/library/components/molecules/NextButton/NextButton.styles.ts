import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 283,
		height: 39,
		backgroundColor: '#ffffff',
		elevation: 1,
	},
	header: {
		fontFamily: 'Montserrat',
		fontSize: 17,
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
		height: 17,
		backgroundColor: '#005670',
	},
	redMarker: {
		width: 11,
		height: 17,
		backgroundColor: '#FF5B5B',
	},
	image: {
		width: 8.5,
		height: 14.5,
		marginLeft: 250,
		marginTop: 11.74,
		backgroundColor: '#000000',
		position: 'absolute',
	},
});

export default styles;
