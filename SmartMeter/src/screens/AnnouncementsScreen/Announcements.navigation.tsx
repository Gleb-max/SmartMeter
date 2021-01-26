import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { AnnouncementsScreen } from './Announcements.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const AnalyticsScreenStack = createStackNavigator();

export const AnnouncementsNavigation: React.FC = ({

}) => {
	return (
		<AnalyticsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<AnalyticsScreenStack.Screen
				name='announcements'
				component={AnnouncementsScreen} />

			<AnalyticsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<AnalyticsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</AnalyticsScreenStack.Navigator>
	);
};
