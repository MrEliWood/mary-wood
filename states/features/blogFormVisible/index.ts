'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface blogFormState {
	value: boolean;
}

const initialState: blogFormState = {
	value: false
};

export const blogFormSlice = createSlice({
	name: 'blogFormVisible',
	initialState,
	reducers: {
		showBlogForm: (state) => {
			state.value = true;
		},
		hideBlogForm: (state) => {
			state.value = false;
		}
	}
});

export const { showBlogForm, hideBlogForm } = blogFormSlice.actions;

export default blogFormSlice.reducer;
