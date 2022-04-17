import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// API
import { getData } from "../../api/api";

// Components
import Gifs from "../../components/GifCard/GifCard";
import Search from "../../components/SearchForm/SearchForm";

// Redux
import store from "../../store/store";
import { setKeyword } from "../../store/keywordSlice";

// Style
import "./index.css";

const Home = () => {
	// Dispatch
	const dispatch = useDispatch();

	// State
	const [result, setResult] = useState([]);
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		getData(keyword).then((gifs) => {
			setResult(gifs);
		});
	}, []);

	const handleChange = (e) => setKeyword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		getData(keyword).then((gifs) => setResult(gifs));
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
