import React from 'react';

//effector
import { $session } from 'models/session';

//modules
import { Auth } from 'library/modules';

//navigation
import { enableScreens } from 'react-native-screens';

//navigators
import { HomeNavigation } from 'screens/main';
import { AuthNavigation } from 'screens/AuthScreen';
import { CallingMasterNavigation } from 'screens/CallingMasterScreen';
import { MeterSettingsNavigation } from 'screens/MeterSettingsScreen';
import { RegistarionRequestNavigation } from 'screens/RegistrationRequest';
import { ProfileNavigation } from 'screens/ProfileScreen';
import { SupportNavigation } from 'screens/SupportScreen';
import { RequestDetailsNavigation } from 'screens/RequestDetailsScreen';
import { MeterPhotoNavigation } from 'screens/MeterPhotoScreen';
import { UserSchedulesNavigation } from 'screens/UserSchedulesScreen';
import { AccountNavigation } from 'screens/AccountScreen';
import { NotificationsNavigation } from 'screens/NotificationsScreen';
import { NewNumberNavigation } from 'screens/NewNumberScreen';
import { DeleteNumberNavigation } from 'screens/DeleteNumberScreen';

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

export const AppNavigation: React.FC = ({

}) => {
	//state
	const [signIn, setSignIn] = React.useState(false);
	const [jwtToken, setJwtToken] = React.useState<string | null>(null);
	// const [loading, setLoading] = React.useState(false);

	//data
	Auth.getLastToken().then((res) => {
		setJwtToken(res);
	});

	React.useEffect(() => {
		$session.watch(({ isSignIn }) => {
			setSignIn(isSignIn);
			// setLoading(isLoading);
		});
	}, []);

	// if (loading)
	// 	return null;

	if (!signIn && jwtToken === null)
		return 	<AuthNavigation />;

	else
		return <NewNumberNavigation />;
};
