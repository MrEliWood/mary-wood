import { useSelector } from 'react-redux';
import type { RootState } from '@/redux';

export * from 'react-redux';
export * from './features';
export * from './store';

export const getState = (feature: keyof RootState) => {
	return useSelector((state: RootState) => state[feature as keyof typeof state].value);
};
