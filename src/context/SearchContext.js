import { createContext } from "react";
const SearchContext = createContext({
	keyword: "",
	setKeyword: () => {},
});
export default SearchContext;
