import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 30,
		paddingTop: 28,
		paddingBottom: 72,
	},
	header: {
		marginBottom: 12.5,
        marginTop: 37,
	},
	button: {
		marginBottom: 25,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
		width: '100%',
	},
	secondHeader: {
		marginBottom: 18,
	},
	flatListContainer: {
		marginHorizontal: -30,
	},
});

export default styles;
