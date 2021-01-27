import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
		paddingTop: 28,
		backgroundColor: '#FDFDFD',
	},
	headContainer: {
		flexDirection: 'row',
		marginBottom: 37,
	},
	chart: {
		flex: 1,
	},
	dropdownView: {
		flex: 1,
		alignItems: 'stretch',
		alignContent: 'center',
	},
	chartSettings: {
		flexDirection: 'row',
		marginBottom: 33.75,
	},
	dropdown: {
		paddingHorizontal: 11,
	},
	dropdownContainer: {
		height: 32,
	},
	profileInfoContainer: {
		flexDirection: 'row',
		marginLeft: 'auto',
	},
	nameAdressTextContainer: {
		alignItems: 'flex-end',
		marginRight: 12,
	},
	headText: {
		fontFamily: 'Gilroy-Semibold',
		fontWeight: '600',
		fontStyle: 'normal',
		fontSize: 31,
		lineHeight: 38,
		marginBottom: 10.5,
		marginTop: 5,
	},
	nameText: {
		fontFamily: 'Gilroy-Semibold',
		fontWeight: '600',
		fontStyle: 'normal',
		fontSize: 16,
		lineHeight: 20,
		color: '#000000',
	},
	addressText: {
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: 12,
		lineHeight: 14,
		color: '#747474',
	},
	profilePhoto: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
	predictionText: {
		fontFamily: 'Gilroy-Medium',
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 18,
		lineHeight: 21,
		alignSelf: 'center',
		marginBottom: 10,
		color: '#747474',
	},
	graphicContainer: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 87,
		marginHorizontal: -10,
	},
	filterContainer: {
		flex: 1,
	},
	filterButtonContainer: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
		borderRadius: 7.25,
		paddingHorizontal: 11,
	},
	filterText: {
		fontFamily: 'Gilroy-Medium',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 18,
	},
	filterButton: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		// paddingLeft: 11,
	},
	filterIcon: {
		marginLeft: 'auto',
	},
	filterGroupContainer: {
		// marginTop: 10,
	},
	filterGroupTitleText: {
		fontFamily: 'Gilroy-Medium',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: 18,
		lineHeight: 21.6,
	},
	filterChipsContainer: {
		flexDirection: 'row',
		marginBottom: 10,
		flexWrap: 'wrap',
	},
	chipContainer: {
		backgroundColor: '#D7D7D7',
		borderRadius: 14,
		marginRight: 9,
		justifyContent: 'center',
		alignItems: 'center',
		// paddingHorizontal: 15,
		// paddingVertical: 5,
		marginTop: 10,
	},
	chipText: {
		fontFamily: 'Gilroy-Regular',
		color: '#858585',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: 14,
		lineHeight: 16.8,
		marginHorizontal: 15,
		marginVertical: 5,
	},
	optionsModalStyle: {
		paddingHorizontal: 14,
		paddingBottom: 100,
	},
	calendarModalStyle: {
		backgroundColor: 'red',

		paddingTop: 10,
		paddingHorizontal: 14,
		maxHeight: 50,
	},
	modalContainer: {
		flex: 1,
	},
	calendarContainer: {
		borderRadius: 5,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#FFFFFF',
	},
	calendarOpacity: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	applyPeriodButtonContainer: {
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		marginTop: -1,
	},
	applyPeriodButton: {
		borderRadius: 5,
		marginVertical: 11,
		height: 40,
		marginHorizontal: 30,
	},
});

export default styles;
