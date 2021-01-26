import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { MeterPhotoScreen } from './MeterPhoto.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const MeterPhotoScreenStack = createStackNavigator();

export const MeterPhotoNavigation: React.FC = ({

}) => {
	return (
		<MeterPhotoScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<MeterPhotoScreenStack.Screen
				name='meterphoto'
				component={MeterPhotoScreen} />

			<MeterPhotoScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<MeterPhotoScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</MeterPhotoScreenStack.Navigator>
	);
};
