import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { ScheduleSettingsScreen } from './ScheduleSettings.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const ScheduleSettingsScreenStack = createStackNavigator();

export const ScheduleSettingsNavigation: React.FC = ({

}) => {
	return (
		<ScheduleSettingsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<ScheduleSettingsScreenStack.Screen
				name='schedulesettings'
				component={ScheduleSettingsScreen} />

			<ScheduleSettingsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<ScheduleSettingsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</ScheduleSettingsScreenStack.Navigator>
	);
};
