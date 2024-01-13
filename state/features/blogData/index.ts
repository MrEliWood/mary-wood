'use client';

import { createSlice } from '@reduxjs/toolkit';

import type { Blogs } from '@/types';

export interface blogDataState {
	value: Blogs;
}

const initialState: blogDataState = {
	value: { published: [], drafts: [], deleted: [] }
};

export const blogDataSlice = createSlice({
	name: 'blogData',
	initialState,
	reducers: {
		setBlogs: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { setBlogs } = blogDataSlice.actions;

export default blogDataSlice.reducer;
