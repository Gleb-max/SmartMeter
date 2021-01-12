import React from 'react';
import { View, Text } from 'react-native';

//other deps

//modules
import { LoaderOverlay } from 'library/components/molecules';

//components
import { SMIcons } from 'library/components/atoms';
import { AdviceCard } from 'library/components/atoms/AdviceCard/';
import { Button } from 'library/components/atoms/Button/';
import { HeadlineText } from 'library/components/atoms/HeadlineText';
import { GilroyText } from 'library/components/atoms/GilroyText';
import { RobotoText } from 'library/components/atoms/RobotoText';
import { VolumeIndicator } from 'library/components/molecules/VolumeIndicator';

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

			<View style={{
				width: '100%',
				height: 500,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			>
				<VolumeIndicator hot = {true} volume = '319' date = '02.01.2021 20:37' />
			</View>
		</View>
	);
};
