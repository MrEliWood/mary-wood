'use client';

import { createSlice } from '@reduxjs/toolkit';

import type { FilteredBlogs } from '@/types';

export interface activeBlogState {
	value: FilteredBlogs;
}

const initialState: activeBlogState = {
	value: {
		published: [],
		drafts: [],
		deleted: []
	}
};

export const allBlogsSlice = createSlice({
	name: 'allBlogs',
	initialState,
	reducers: {
		setAllBlogs: (state, action) => {
			state.value = action.payload;
		}
	}
});

const allBlogs = allBlogsSlice.reducer;
const { setAllBlogs } = allBlogsSlice.actions;

export { allBlogs, setAllBlogs };
