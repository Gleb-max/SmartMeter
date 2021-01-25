//effector
import { createStore, createEvent } from 'effector';

//type
type StoreProps = {
	isLoading: boolean;
	isSignIn: boolean;
}

//events
export const updateSessionEv = createEvent<Partial<StoreProps>>();
export const mergeToSessionEv = createEvent<Partial<StoreProps>>();
export const resetSession = createEvent();

//store
const defaultSession = {
	isLoading: true,
	isSignIn: false,
};
export const $session = createStore<StoreProps>(defaultSession)
	.on(mergeToSessionEv, (state, newStateData) => {
		state = { ...state, ...newStateData };

		return state;
	})
	.reset(resetSession);
