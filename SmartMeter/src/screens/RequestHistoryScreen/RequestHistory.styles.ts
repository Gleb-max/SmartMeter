import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 28,
		paddingTop: 41,
	},
	card: {
		marginBottom: 30,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
	header: {
		marginBottom: 10,
	},
	flatListContainer: {
		paddingTop: 27,
		paddingHorizontal: 4,
		// marginHorizontal: 5,
	},
});

export default styles;
