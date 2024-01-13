'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface editorScrolledState {
	value: boolean;
}

const initialState: editorScrolledState = {
	value: false
};

export const editorScrolledSlice = createSlice({
	name: 'editorScrolled',
	initialState,
	reducers: {
		setEditorScrolled: (state, action) => {
			state.value = action.payload;
		}
	}
});

const editorScrolled = editorScrolledSlice.reducer;
const { setEditorScrolled } = editorScrolledSlice.actions;

export { editorScrolled, setEditorScrolled };
