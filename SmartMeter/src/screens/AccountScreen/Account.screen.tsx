import React from 'react';

//views
import { AccountView } from './Account.view';

//types
type AccountScreenProps = {

};

//constants
const userData = {
	address: 'ул. Ленина 56',
	phone: '+79122345678',
};

export const AccountScreen: React.FC<AccountScreenProps> = ({

}) => {
	return (
		<AccountView
			userData={userData} />
	);
};
