import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { NewsScreen } from './News.screen';
import { InformationNavigation } from '../InformationScreen';

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
		</NewsScreenStack.Navigator>
    );
};
