import { createSlice } from "@reduxjs/toolkit";

export const keywordSlice = createSlice({
	name: "keyword",
	initialState: {
		value: "naruto",
	},
	reducers: {
		setKeyword: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
