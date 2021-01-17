import { DimensionsManager } from 'library/modules/DimensionsManager';
import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFDFD',
	},
	mainContainer: {
		flex: 1,
		backgroundColor: '#FDFDFD',
		paddingHorizontal: 30,
		alignContent: 'stretch',
	},
	indicator: {
		marginTop: DimensionsManager.horizontalScale(90),
		marginBottom: DimensionsManager.horizontalScale(12),
		alignSelf: 'center',
	},
	dropdown: {
		borderRadius: 8,
		paddingHorizontal: 10,
	},
	dropdownContainer: {
		alignSelf: 'stretch',
		height: 39,
	},
	button: {
		height: 52,
		width: 258,
		backgroundColor: '#ffffff',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
	buttons: {
		marginTop: DimensionsManager.horizontalScale(19),
		justifyContent: 'space-between',
		height: 194,
		width: 258,
		alignSelf: 'center',
	},
	numberCon: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: '#005670',
	},
	number: {
		fontFamily: 'Gilroy-Medium',
		fontSize: 14,
		color: '#ffffff',
	},
	text: {
		color: '#000000',
		fontFamily: 'Gilroy-Medium',
		fontSize: 17,
	},
	cardContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 13,
		marginRight: 27.58,
		width: 114,
		height: 132,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
		paddingLeft: 9.36,
		marginVertical: 6,
	},
	allCardsView: {
		paddingLeft: 31,
		paddingRight: 31,
	},
	cardTitleText: {
		fontWeight: '500',
		fontStyle: 'normal',
		lineHeight: 21,
		color: '#000000',
	},
	analyticsText: {
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: 19.59,
		color: '#747474',
	},
	oneLineTextContainer: {
		flexDirection: 'row',
	},
	simpleCardText: {
		fontStyle: 'normal',
		fontWeight: '500',
		color: '#747474',
	},
	announcementsText: {
		
	},
	receiptsText: {
		fontStyle: 'normal',
		fontWeight: '500',
	},
	lastMeterCard: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 17,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 6),
		paddingHorizontal: 21,
		paddingTop: 10,
		marginTop: 33,
	},
	lastMeterValue: {
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: 68,
		marginTop: 27.42,
	},
	lastMeterDate: {
		color: '#747474',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: 27,
	},
	allCardsContainer: {
		marginBottom: 93,
	},
	headContainer: {
		flexDirection: 'row',
		paddingTop: 44,
		marginBottom: 28.64,
	},
	greetingText: {
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: 24.2,
	},
	nameText: {
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: 25.3,
	},
	profilePhoto: {
		height: 52,
		width: 52,
		borderRadius: 26,
		marginLeft: 14.23,
	},
	notifIconandPhotoContainer: {
		flexDirection: 'row',
		marginLeft: 'auto',
	},
	switchText: {
		fontWeight: '500',
		lineHeight: 16,
		fontStyle: 'normal',
		fontFamily: 'Gilroy-Medium',
	},
	switchStyle: {
		backgroundColor: '#EEEEEE',
		borderRadius: 13,
		paddingVertical: 3.64,
		paddingHorizontal: 3.29,
	},
	switchButtonStyle: {
		borderRadius: 13,
		height: 36.72
	},
	lastMeterContainer: {
		flex: 1,
		marginTop: 33,
		marginBottom: 19,
	},
	lastMeterContentContainer: {
		flex: 1, 
		marginTop: -66,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	cardIconContainer: {
		height: 34.85,
		width: 34.85,
		borderRadius: 7.26,
		marginTop: 9.15,
		marginBottom: 12.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardContentContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default styles;
