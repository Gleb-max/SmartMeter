import React from 'react';

//navigation
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//screens
import { AnalyticsScreen } from './Analytics.screen';

const AnalyticsNativeStack = createNativeStackNavigator();

export const AnalyticsNavigation: React.FC = ({
}) => {
	return (
		<AnalyticsNativeStack.Navigator screenOptions={{ headerShown: false }}>
			<AnalyticsNativeStack.Screen
				name='analytics'
				component={AnalyticsScreen} />
		</AnalyticsNativeStack.Navigator>
	);
};

