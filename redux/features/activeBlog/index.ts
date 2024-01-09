'use client';

import { createSlice } from '@reduxjs/toolkit';

import type { BlogData } from '@/types';

export interface activeBlogState {
	value: BlogData;
}

const initialState: activeBlogState = {
	value: {
		author: {},
		author_id: 0,
		caption: '',
		createdAt: '',
		deleted: false,
		id: 0,
		images: [],
		published: false,
		text: '',
		title: '',
		updatedAt: '',
		publishedAt: ''
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
