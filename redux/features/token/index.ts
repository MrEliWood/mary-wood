'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface tokenState {
	value: string | null;
}

const initialState: tokenState = {
	value: null
};

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		createToken: (state, action) => {
			state.value = action.payload;
		},
		destroyToken: (state) => {
			state.value = null;
		}
	}
});

export const { createToken, destroyToken } = tokenSlice.actions;

export default tokenSlice.reducer;
