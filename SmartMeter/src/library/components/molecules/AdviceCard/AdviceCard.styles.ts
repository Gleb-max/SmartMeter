import { DimensionsManager } from 'library/modules/DimensionsManager';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: DimensionsManager.horizontalScale(136),
		height: DimensionsManager.horizontalScale(152),
		backgroundColor: '#F2F4FF',
		borderRadius: 12,
		elevation: 1,
		padding: 12,
		marginTop: 24,
	},
	text: {
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 18,
		color: '#005670',
	},
});

export default styles;
