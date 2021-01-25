import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

//context
import { AuthContext, useAuth, AuthContextType } from './Auth.context';

const initialAuthState = {
	jwtToken: null,
};

const AuthProvider: React.FC = ({
	children,
}) => {
	//state
	const [auth, setAuth] = React.useState<Pick<AuthContextType, 'jwtToken'>>(initialAuthState);

	//callbacks
	const _setJwtToken = React.useCallback(async (newJwtToken: string | null) => {
		setAuth({
			...auth,
			jwtToken: newJwtToken,
		});

		try {
			if (newJwtToken)
				await AsyncStorage.setItem('jwtToken', newJwtToken);
		}
		catch (e) {

		}
	}, [auth]);

	const _clearJwtToken = React.useCallback(async () => {
		setAuth({
			...auth,
			jwtToken: null,
		});

		try {
			await AsyncStorage.removeItem('jwtToken');
		}
		catch (e) {
		}
	}, [auth]);

	const _logout = React.useCallback(() => {
		setAuth(initialAuthState);

		_clearJwtToken();
	}, [_clearJwtToken]);

	const _loadJwtTokenFromStorage = React.useCallback(async () => {
		const token = await getLastToken();

		_setJwtToken(token);

		return token;
	}, [_setJwtToken]);

	return (
		<AuthContext.Provider value={{
			...auth,
			setJwtToken: _setJwtToken,
			logout: _logout,
			loadJwtTokenFromStorage: _loadJwtTokenFromStorage,
		}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const getLastToken = async (): Promise<string | null> => {
	try {
		const token = await AsyncStorage.getItem('jwtToken');

		return token;
	}
	catch (e) {
		// error reading value
		return null;
	}
};

export {
	AuthProvider,
	useAuth,
	getLastToken,
};
