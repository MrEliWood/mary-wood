'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface blogFilterState {
	value: string;
}

const initialState: blogFilterState = {
	value: 'all'
};

export const blogFilterSlice = createSlice({
	name: 'blogFilter',
	initialState,
	reducers: {
		filterAll: (state) => {
			state.value = 'all';
		},
		filterDrafts: (state) => {
			state.value = 'drafts';
		},
		filterPublished: (state) => {
			state.value = 'published';
		},
		filterDeleted: (state) => {
			state.value = 'deleted';
		}
	}
});

export const { filterAll, filterDrafts, filterPublished, filterDeleted } = blogFilterSlice.actions;

export default blogFilterSlice.reducer;
