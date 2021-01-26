import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { MainScreen } from './Main.screen';
import { AnalyticsNavigation } from '../AnalyticsScreen';
import { AnnouncementsNavigation } from '../AnnouncementsScreen';
import { ReceiptsNavigation } from '../ReceiptsScreen';
import { CallingMasterNavigation } from '../CallingMasterScreen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

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

			<MainScreenStack.Screen
				name='announcements'
				component={AnnouncementsNavigation} />

			<MainScreenStack.Screen
				name='receipts'
				component={ReceiptsNavigation} />

			<MainScreenStack.Screen
				name='mastercall'
				component={CallingMasterNavigation} />

			<MainScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<MainScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</MainScreenStack.Navigator>
	);
};
