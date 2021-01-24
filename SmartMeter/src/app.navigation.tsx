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
import { AdviceItemNavigation } from 'screens/AdviceItemScreen';
import { NewsNavigation } from 'screens/NewsScreen';
import { InformationNavigation } from 'screens/InformationScreen';
import { AnalyticsNavigation } from 'screens/AnalyticsScreen';
import { DevicesNavigation } from 'screens/DevicesScreen';
import { NewDeviceNavigation } from 'screens/NewDeviceScreen';
import { ContactsNavigation } from 'screens/ContactsScreen';
import { CallingMasterNavigation } from 'screens/CallingMasterScreen';
import { MeterSettingsNavigation } from 'screens/MeterSettingsScreen';
import { RegistarionRequestNavigation } from 'screens/RegistrationRequest';
import { ProfileNavigation } from 'screens/ProfileScreen';
import { SupportNavigation } from 'screens/SupportScreen';
import { RequestDetailsNavigation } from 'screens/RequestDetailsScreen';
import { MeterPhotoNavigation } from 'screens/MeterPhotoScreen';
import { UserSchedulesNavigation } from 'screens/UserSchedulesScreen';
import { NotificationsNavigation } from 'screens/NotificationsScreen';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation: React.FC = ({

}) => {
	return (
		<AnnouncementsNavigation />
	);
};
