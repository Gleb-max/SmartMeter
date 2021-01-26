import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { InformationScreen } from './Information.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const InformationScreenStack = createStackNavigator();

export const InformationNavigation: React.FC = ({

}) => {
	return (
		<InformationScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<InformationScreenStack.Screen
				name='information'
				component={InformationScreen} />

			<InformationScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<InformationScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</InformationScreenStack.Navigator>
	);
};
