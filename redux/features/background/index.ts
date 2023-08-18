'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface backgroundState {
	value: string;
}

const initialState: backgroundState = {
	value: '../public/assets/images/header-background-b.jpg'
};

export const backgroundSlice = createSlice({
	name: 'background',
	initialState,
	reducers: {
		setBackground: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { setBackground } = backgroundSlice.actions;

export default backgroundSlice.reducer;
