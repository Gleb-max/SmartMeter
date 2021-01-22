import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFDFD',
		paddingTop: 41,
		paddingHorizontal: 29,
	},
	header: {
		fontWeight: '600',
		fontStyle: 'normal',
		lineHeight: 38,
		marginBottom: 37,
	},
	cardContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
		paddingLeft: 15,
		paddingVertical: 6,
	},
	cardHeader: {
		lineHeight: 22,
		fontStyle: 'normal',
		fontWeight: '500',
		color: '#747474',
	},
	cardText: {
		lineHeight: 29.11,
		fontWeight: '500',
		fontStyle: 'normal',
		color: '#000000',
	},
	review: {
		marginBottom: 40,
		width: '100%',
		height: 50,
	},
	masterInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	phoneText: {
		color: '#005670',
		marginLeft: 'auto',
		marginRight: 15,
	},
	qrButton: {
		marginTop: 50,
		borderRadius: 15,
		width: '100%',
	},
	ratingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	ratingText: {
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 21.09,
		color: '#747474',
		marginBottom: 17,
	},
	ratingStar: {
		marginHorizontal: 6,
	},
	modalContainer: {
		flex: 1,
	},
	qrOpacity: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},

});

export default styles;
