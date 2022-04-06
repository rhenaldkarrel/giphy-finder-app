import React, { useState, useMemo } from "react";
import SearchContext from "./context/SearchContext";

import Navigation from "./components/Navigation";

const App = () => {
	const [keyword, setKeyword] = useState("naruto");
	const value = useMemo(() => ({ keyword, setKeyword }), [keyword]);

	return (
		<SearchContext.Provider value={value}>
			<Navigation />
		</SearchContext.Provider>
	);
};

export default App;
