import { configureStore } from "@reduxjs/toolkit";

// Reducer
import keywordReducer from "./keywordSlice";
import gifsReducer from "./gifsSlice";

export default configureStore({
	reducer: {
		keyword: keywordReducer,
		gifs: gifsReducer,
	},
});
