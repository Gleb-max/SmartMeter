import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { UserSchedulesScreen } from './UserSchedules.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const UserSchedulesScreenStack = createStackNavigator();

export const UserSchedulesNavigation: React.FC = ({

}) => {
	return (
		<UserSchedulesScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<UserSchedulesScreenStack.Screen
				name='userschedules'
				component={UserSchedulesScreen} />

			<UserSchedulesScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<UserSchedulesScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</UserSchedulesScreenStack.Navigator>
	);
};
