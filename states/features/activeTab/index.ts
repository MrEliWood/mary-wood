'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface activeTabState {
	value: string;
}

const initialState: activeTabState = {
	value: 'all'
};

export const activeTabSlice = createSlice({
	name: 'activeTab',
	initialState,
	reducers: {
		setActiveTab: (state, action) => {
			state.value = action.payload;
		}
	}
});

const activeTab = activeTabSlice.reducer;
const { setActiveTab } = activeTabSlice.actions;

export { activeTab, setActiveTab };
