import React from 'react';
import { View, Text } from 'react-native';

//other deps

//modules
import { LoaderOverlay } from 'library/components/molecules';

//components
import { VolumeIndicator } from 'library/components/molecules/VolumeIndicator';

//styles
import styles from './Test.styles';
import { Button } from 'library/components';

//types
type TestViewProps = {

};

export const TestView: React.FC<TestViewProps> = ({

}) => {
	return (
		<View style={styles.container}>
			<Button
				style={{
					width: '100%',
				}}
				header='Press me'
				onPress={() => {}} />
		</View>
	);
};
