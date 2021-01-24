import React from 'react';
import { View, Text } from 'react-native';

//other deps
import Axios from 'axios';

//modules
import { SMIcons, Button } from 'library/components/atoms';
import { LoaderOverlay, TabBar } from 'library/components/molecules';

//components
import { VolumeIndicator } from 'library/components/molecules/VolumeIndicator';

//styles
import styles from './Test.styles';

//types
type TestViewProps = {

};

const _tabsData = [{
	iconName: 'ic_tabbar_home_active',
	currentIndex: 0,
	onPress: () => {},
}, {
	iconName: 'ic_tabbar_uk_active',
	currentIndex: 1,
	onPress: () => { },
}, {
	iconName: 'ic_tabbar_graphics_active',
	currentIndex: 2,
	onPress: () => { },
}, {
	iconName: 'ic_tabbar_drop_active',
	currentIndex: 3,
	onPress: () => { },
}, {
	iconName: 'ic_tabbar_account_active',
	currentIndex: 4,
	onPress: () => { },
}];

//types
type LoginResponse = {
	verificationId: string;
};

export const TestView: React.FC<TestViewProps> = ({

}) => {
	const getSync = React.useCallback(async () => {
		// const result = await Axios.get('https://smartmetr.glitch.me/api/v1/users/sync', {
		// 	headers: {
		// 		'Authorization': 'Authorization 123',
		// 	},
		// })
		// 	.catch((er) => {
		// 		console.log(er);
		// 	}).then((res) => {
		// 		console.log(res);
		// 	});
		// console.log(result);

		// return result;

		const instance = Axios.create({
			baseURL: 'https://smartmetr.glitch.me',
			method: 'GET',
			headers: { 'Authorization': 'Authorization 123' },
		});
		instance.get('/api/v1/users/analytics?idSensor=123&mode=day', {
			timeout: 5000,
		})
			.catch((er) => {
				console.log(er);
			}).then((res) => {
				if (res)
					console.log(res.data.result[0].value);
			});
		// console.log('--->', instance);
		return instance;
	}, []);

	return (
		<View style={styles.container}>
			{/* <Button
				header='Press'
				onPress={getSync} /> */}

			<TabBar
				style={{ bottom: 20, alignSelf: 'center' }}
				currentIndex={0}
				tabsData={_tabsData} />
		</View>
	);
};
