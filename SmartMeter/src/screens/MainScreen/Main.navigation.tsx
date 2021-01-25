import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { MainScreen } from './Main.screen';
import { AnalyticsNavigation } from '../AnalyticsScreen';

// const ShowcaseStack = createNativeStackNavigator();
const ShowcaseStack = createStackNavigator();

export const ShowcaseNavigation: React.FC = ({

}) => {
	return (
		<ShowcaseStack.Navigator screenOptions={{ headerShown: false }}>
			<ShowcaseStack.Screen
				name='main'
				component={MainScreen} />

			<ShowcaseStack.Screen
				name='analytics'
				component={AnalyticsNavigation} />
		</ShowcaseStack.Navigator>
	);
};
