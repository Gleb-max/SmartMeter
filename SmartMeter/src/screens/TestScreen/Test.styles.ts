import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#DCDCDC',
	},
	cursor: {
		// position: 'absolute',
		// bottom: 0,
		// height: 13,
		// borderTopLeftRadius: 100,
		// borderTopRightRadius: 100,
		// backgroundColor: '#005670',
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderBottomWidth: 30,
		borderBottomColor: '#005670',
		borderLeftWidth: 30,
		borderRightWidth: 30,
		borderTopStartRadius: 30,
		borderTopEndRadius: 30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderRightColor: 'transparent',
		borderLeftColor: 'transparent',
	},
});

export default styles;
