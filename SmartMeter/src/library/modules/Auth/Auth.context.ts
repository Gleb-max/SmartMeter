import React from 'react';

//types
export type AuthContextType = {
	jwtToken: string | null;
	setJwtToken: (newJwtToken: string | null) => void;
	logout: () => void;
	loadJwtTokenFromStorage: () => Promise<string | null>,
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const useAuth = () => React.useContext(AuthContext)!;

export {
	AuthContext,
	useAuth,
};
