import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		flex: 1,
		alignItems: 'center',
	},
	viewContainer: {
		backgroundColor: '#005670',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fieldsContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		paddingHorizontal: 29,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		paddingTop: 34,
	},
	welcomeContainer: {
		alignSelf: 'flex-start',
	},
	formContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerContainer: {
		width: '100%',
		height: '29%',
		maxHeight: '29%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		marginLeft: 7,
		fontFamily: 'Gilroy',
		fontStyle: 'normal',
		fontSize: 31,
		lineHeight: 38,
	},
	codeContainer: {
		paddingTop: 13,
		alignItems: 'center',
		marginBottom: 6,
	},
	codeText: {
		fontFamily: 'Roboto',
		fontWeight: '300',
		lineHeight: 21,
		color: '#747474',
		marginHorizontal: 25,
	},
	authTextCommon: {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 15,
		lineHeight: 18,
	},
	authTextContainer: {
		flexDirection: 'row',
		marginTop: 18,
	},
	authText: {
		color: '#747474',
	},
	authButton: {
		color: '#005670',
		textDecorationLine: 'underline',
	},
	changeNumText: {
		color: '#000000',
		textDecorationLine: 'underline',
		fontStyle: 'normal',
		fontWeight: '300',
		lineHeight: 20,
	},
	getCodeText: {
		lineHeight: 19,
		fontStyle: 'normal',
		fontWeight: '300',
	},
	timeText: {
		lineHeight: 19,
		fontStyle: 'normal',
		fontWeight: '500',
		marginTop: 7,
	},
	sendCode: {
		marginBottom: 10,
	},
	newCode: {
		marginBottom: 20,
	},
});

export default styles;
