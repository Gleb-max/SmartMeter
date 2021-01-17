import React from 'react';

//navigation
import { enableScreens } from 'react-native-screens';

//navigators
import { TestNavigation } from './screens/TestScreen';
import { LoginNavigation } from './screens/LoginScreen';
import { AnnouncementsNavigation } from './screens/AnnouncementsScreen';
import { AuthNavigation } from './screens/AuthScreen';
import { MainNavigation } from 'screens/MainScreen';
import { AdvicesNavigation } from 'screens/AdvicesScreen';
import { ReceiptsNavigation } from 'screens/ReceiptsScreen';
import { NewsNavigation } from 'screens/NewsScreen';
import { InformationNavigation } from 'screens/InformationScreen';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation: React.FC = ({

}) => {
	return (
		<AuthNavigation />
	);
};
