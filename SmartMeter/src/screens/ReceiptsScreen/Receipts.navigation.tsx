import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { ReceiptsScreen } from './Receipts.screen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const ReceiptsScreenStack = createStackNavigator();

export const ReceiptsNavigation: React.FC = ({

}) => {
	return (
		<ReceiptsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<ReceiptsScreenStack.Screen
				name='receipts'
				component={ReceiptsScreen} />

			<ReceiptsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<ReceiptsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</ReceiptsScreenStack.Navigator>
	);
};
