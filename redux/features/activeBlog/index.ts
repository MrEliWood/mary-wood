'use client';

import { createSlice } from '@reduxjs/toolkit';

import type { BlogType } from '@/types';

export interface activeBlogState {
	value: BlogType;
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
		}
	}
});

export const { setActiveBlog } = activeBlogSlice.actions;

export default activeBlogSlice.reducer;
