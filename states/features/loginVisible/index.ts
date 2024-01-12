'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface loginState {
	value: boolean;
}

const initialState: loginState = {
	value: false
};

export const loginSlice = createSlice({
	name: 'loginVisible',
	initialState,
	reducers: {
		showLogin: (state) => {
			state.value = true;
		},
		hideLogin: (state) => {
			state.value = false;
		}
	}
});

export const { showLogin, hideLogin } = loginSlice.actions;

export default loginSlice.reducer;
