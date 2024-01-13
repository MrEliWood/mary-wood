import { useSelector } from 'react-redux';
import type { RootState } from '@/state';

export * from 'react-redux';
export * from './features';
export * from './store';

import { actions } from './features';

export const getState = (feature: keyof RootState) => {
	return useSelector((state: RootState) => state[feature as keyof typeof state].value);
};

export const setState = (action: keyof typeof actions, payload?: any) => {
	return actions[action](payload);
};
