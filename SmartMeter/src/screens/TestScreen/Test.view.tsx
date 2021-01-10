import React from 'react';
import { View, Text } from 'react-native';

//other deps

//components
import { SMIcons } from 'library/components/atoms';

//styles
import styles from './Test.styles';

//types
type TestViewProps = {

};

export const TestView: React.FC<TestViewProps> = ({

}) => {
	return (
		<View style={styles.container}>
			<SMIcons
				size={25}
				color='#017C61'
				name='ic_profile' />

			<Text>
				Test screen
			</Text>
		</View>
	);
};
