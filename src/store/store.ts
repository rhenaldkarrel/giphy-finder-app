import { configureStore } from "@reduxjs/toolkit";
import keywordReducer from "./keywordSlice";

export default configureStore({
	reducer: {
		keyword: keywordReducer,
	},
});
