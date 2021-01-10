import React from 'react';
import { View, Text } from 'react-native';

//other deps

//components

//styles
import styles from './Test.styles';

//types
type TestViewProps = {

};

export const TestView: React.FC<TestViewProps> = ({

}) => {
	return (
		<View style={styles.container}>
			<Text>
				Test screen
			</Text>
		</View>
	);
};
