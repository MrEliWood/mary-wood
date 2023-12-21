'use client';

import { configureStore } from '@reduxjs/toolkit';

import activeBlogReducer from './features/activeBlog';
import backgroundReducer from './features/background';
import blogDataReducer from './features/blogData';
import blogFilterReducer from './features/blogFilter';
import blogFormReducer from './features/blogFormVisible';
import loginReducer from './features/loginVisible';
import tokenReducer from './features/token';

export const store = configureStore({
	reducer: {
		activeBlog: activeBlogReducer,
		background: backgroundReducer,
		blogData: blogDataReducer,
		blogFilter: blogFilterReducer,
		blogFormVisible: blogFormReducer,
		loginVisible: loginReducer,
		token: tokenReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
