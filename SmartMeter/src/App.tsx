import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app.navigation';

//modules
import { Auth } from 'library/modules';

declare const global: {HermesInternal: null | {}};

console.disableYellowBox = true;

const App = () => {
	return (
		<Auth.AuthProvider>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Auth.AuthProvider>
	);
};

export default App;
