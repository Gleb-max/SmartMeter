import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { NotificationsScreen } from './Notifications.screen';
import { ProfileNavigation } from '../ProfileScreen';

const NotificationsScreenStack = createStackNavigator();

export const NotificationsNavigation: React.FC = ({

}) => {
	return (
		<NotificationsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<NotificationsScreenStack.Screen
				name='notifications'
				component={NotificationsScreen} />

			<NotificationsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</NotificationsScreenStack.Navigator>
	);
};
