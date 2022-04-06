import React, { useState, useContext, useEffect } from "react";

// API
import { getData } from "../../api/api";

// Components
import Gifs from "../../components/GifCard";
import Search from "../../components/Search";

// Context
import SearchContext from "../../context/SearchContext";

// Style
import "./index.css";

const Home = () => {
	// State
	const [result, setResult] = useState([]);
	const { keyword, setKeyword } = useContext(SearchContext);

	useEffect(() => {
		getData(keyword).then((gifs) => {
			setResult(gifs);
		});
	}, []);

	const handleChange = (e) => setKeyword(e.target.value);

	const getResult = () => {
		getData(keyword).then((gifs) => setResult(gifs));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getResult();
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<Search onSubmit={handleSubmit} onChange={handleChange} />
					<div className='result'>
						<Gifs data={result} />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
