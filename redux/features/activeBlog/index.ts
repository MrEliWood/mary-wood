'use client';

import { createSlice } from '@reduxjs/toolkit';

import type { BlogData } from '@/types';

export interface activeBlogState {
	value: BlogData;
}

const initialState: activeBlogState = {
	value: {
		author: {},
		author_id: 1,
		caption: '',
		deleted: false,
		id: null,
		images: [],
		published: false,
		text: '',
		title: '',
		publishedAt: null
	}
};

export const activeBlogSlice = createSlice({
	name: 'activeBlog',
	initialState,
	reducers: {
		setActiveBlog: (state, action) => {
			state.value = action.payload;
		},
		newActiveBlog: (state) => {
			state.value = initialState.value;
		}
	}
});

const activeBlog = activeBlogSlice.reducer;

const { setActiveBlog, newActiveBlog } = activeBlogSlice.actions;

export { activeBlog, setActiveBlog, newActiveBlog };
