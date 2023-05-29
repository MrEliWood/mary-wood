'use client';

import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './features/token';
import loginReducer from './features/loginVisible';

export const store = configureStore({
	reducer: {
		token: tokenReducer,
		loginVisible: loginReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
