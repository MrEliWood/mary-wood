'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface userState {
	value: {
		token: string | null;
		user: any | null;
	};
}

const initialState: userState = {
	value: {
		token: null,
		user: null
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},

		logout: (state) => {
			state.value = {
				token: null,
				user: null
			};
		}
	}
});

const user = userSlice.reducer;

const { login, logout } = userSlice.actions;

export { user, login, logout };
