import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 28,
		paddingHorizontal: 30,
		backgroundColor: '#FDFDFD',
	},
	scroll: {
		paddingTop: 5,
	},
	header: {
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: 38,
		color: '#000000',
		marginTop: 37,
		marginBottom: 8,
	},
	cardContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
		marginHorizontal: 4,
		marginBottom: 30,
		paddingLeft: 18,
		paddingBottom: 15,
		paddingTop: 18,
	},
	cardHeader: {
		color: '#747474',
		fontStyle: 'normal',
		lineHeight: 29.11,
		fontWeight: '500',
		marginBottom: 16,
	},
	photoCardHeader: {
		color: '#000000',
		lineHeight: 24,
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 20,
	},
	scenarioType: {
		color: '#000000',
		lineHeight: 28,
		fontWeight: '500',
		fontStyle: 'normal',
		fontSize: 23,
	},
	cardEditableContantContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginRight: 18,
		alignItems: 'center',
	},
	changeText: {
		color: '#747474',
		lineHeight: 22,
		fontWeight: '500',
		fontStyle: 'normal',
		textDecorationLine: 'underline',
	},
	changeContainer: {
		marginLeft: 'auto',
	},
	dropdown: {
		height: 60,
		maxHeight: 60,
		marginHorizontal: 4,
		marginBottom: 30,
	},
	list: {
		marginHorizontal: 4,
	},
});

export default styles;
