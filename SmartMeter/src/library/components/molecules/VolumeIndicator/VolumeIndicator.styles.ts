import { StyleSheet } from 'react-native';

export const HOT_COLOR = '#FF5B5B';
export const COLD_COLOR = '#005670';

const styles = StyleSheet.create({
	container: {
		width: 206,
		height: 206,
		borderRadius: 135,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
	ellipse: {
		backgroundColor: '#ffffff',
		width: 162,
		height: 162,
		borderRadius: 145,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dateText: {
		color: '#747474',
	},
});

export default styles;

