import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { NewsScreen } from './News.screen';
import { InformationNavigation } from '../InformationScreen';
import { NotificationsNavigation } from '../NotificationsScreen';
import { ProfileNavigation } from '../ProfileScreen';

const NewsScreenStack = createStackNavigator();

export const NewsNavigation: React.FC = ({

}) => {
    return (
        <NewsScreenStack.Navigator screenOptions={{ headerShown: false }}>
			<NewsScreenStack.Screen
				name='news'
				component={NewsScreen} />

			<NewsScreenStack.Screen
				name='info'
				component={InformationNavigation} />
			
			<NewsScreenStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<NewsScreenStack.Screen
				name='profile'
				component={ProfileNavigation} />
		</NewsScreenStack.Navigator>
    );
};
