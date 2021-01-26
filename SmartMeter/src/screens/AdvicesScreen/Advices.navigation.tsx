import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { AdvicesScreen } from './Advices.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const AdvicesScreenStack = createStackNavigator();

export const AdvicesNavigation: React.FC = ({

}) => {
	return (
		<AdvicesScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<AdvicesScreenStack.Screen
				name='advices'
				component={AdvicesScreen} />

			<AdvicesScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<AdvicesScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</AdvicesScreenStack.Navigator>
	);
};
