import { createSlice } from "@reduxjs/toolkit";

export const keywordSlice = createSlice({
	name: "keyword",
	initialState: "naruto",
	reducers: {
		setKeyword: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
