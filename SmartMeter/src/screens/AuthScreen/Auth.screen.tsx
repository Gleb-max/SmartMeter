import React from 'react';

//effector
import { $session, mergeToSessionEv } from 'models/session';

//modules
import { Auth } from 'library/modules';

//views
import { AuthView } from './Auth.view';

//types
type AuthScreenProps = {

};

export const AuthScreen: React.FC<AuthScreenProps> = ({

}) => {
	//data
	const { setJwtToken } = Auth.useAuth();

	//callbacks
	const _onSendCode = React.useCallback(() => {
		mergeToSessionEv({
			isSignIn: true,
		});

		setJwtToken('jwtToken');
	}, [setJwtToken]);

	return (
		<AuthView onSendCode={_onSendCode} />
	);
};
