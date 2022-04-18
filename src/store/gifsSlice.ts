import { createSlice } from "@reduxjs/toolkit";

export const gifsSlice = createSlice({
	name: "gifs",
	initialState: {
		value: [],
	},
	reducers: {
		setGifs: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setGifs } = gifsSlice.actions;
export default gifsSlice.reducer;
