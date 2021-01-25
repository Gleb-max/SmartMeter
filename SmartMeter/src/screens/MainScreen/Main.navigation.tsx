import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { MainScreen } from './Main.screen';
import { AnalyticsNavigation } from '../AnalyticsScreen';

// const ShowcaseStack = createNativeStackNavigator();
const MainScreenStack = createStackNavigator();

export const MainNavigation: React.FC = ({

}) => {
	return (
		<MainScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<MainScreenStack.Screen
				name='main'
				component={MainScreen} />

			<MainScreenStack.Screen
				name='analytics'
				component={AnalyticsNavigation} />
		</MainScreenStack.Navigator>
	);
};
