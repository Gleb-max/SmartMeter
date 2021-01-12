import React from 'react';

//navigation
import { enableScreens } from 'react-native-screens';

//navigators
import { TestNavigation } from './screens/TestScreen';
import { LoginNavigation } from './screens/LoginScreen';
import { AnnouncementsNavigation } from './screens/AnnouncementsScreen';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation: React.FC = ({

}) => {
	return (
		<AnnouncementsNavigation />
	);
};
