import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { MeterSettingsScreen } from './MeterSettings.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const MeterSettingsScreenStack = createStackNavigator();

export const MeterSettingsNavigation: React.FC = ({

}) => {
	return (
		<MeterSettingsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<MeterSettingsScreenStack.Screen
				name='metersettings'
				component={MeterSettingsScreen} />

			<MeterSettingsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<MeterSettingsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</MeterSettingsScreenStack.Navigator>
	);
};
