import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	root: {
		padding: 20,
		minHeight: 300,
	},
	title: {
		textAlign: 'center',
		fontSize: 30,
	},
	codeFieldRoot: {
		marginTop: 20,
		width: 280,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	cellRoot: {
		width: 55,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#005670',
		borderBottomWidth: 1,
	},
	cellRootEmpty: {
		width: 55,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	cellText: {
		color: '#005670',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 42,
		lineHeight: 49,
		textAlign: 'center',
	},
	focusCell: {
		borderBottomColor: '#005670',
		borderBottomWidth: 2,
	},
});

export default styles;
