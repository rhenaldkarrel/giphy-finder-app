import React from "react";
import SearchContext from "./context/SearchContext";

import Search from "./pages/search/index";

const App = () => {
	return (
		<SearchContext.Provider value={"naruto"}>
			<Search />
		</SearchContext.Provider>
	);
};

export default App;
