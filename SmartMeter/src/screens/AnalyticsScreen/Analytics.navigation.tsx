import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { AnalyticsScreen } from './Analytics.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const AnalyticsScreenStack = createStackNavigator();

export const AnalyticsNavigation: React.FC = ({

}) => {
	return (
		<AnalyticsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<AnalyticsScreenStack.Screen
				name='analytics'
				component={AnalyticsScreen} />

			<AnalyticsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<AnalyticsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</AnalyticsScreenStack.Navigator>
	);
};
