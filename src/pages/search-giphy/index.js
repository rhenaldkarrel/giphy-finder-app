import React, { useEffect } from "react";

// API
import { getData } from "../../api/api";

// Components
import Gifs from "../../components/GifCard/GifCard";
import Search from "../../components/SearchForm/SearchForm";

// Redux
import { setKeyword } from "../../store/keywordSlice";
import { setGifs } from "../../store/gifsSlice";
import {
	useTypedDispatch,
	useTypedSelector,
} from "../../hooks/typedReduxHooks";

// Style
import "./index.css";

const Home = () => {
	// Redux state
	const keyword = useTypedSelector((state) => state.keyword.value);
	const gifs = useTypedSelector((state) => state.gifs.value);

	// Dispatch
	const dispatch = useTypedDispatch();

	// Get initial gifs data onload
	useEffect(() => {
		getData(keyword).then((gifs) => dispatch(setGifs(gifs)));
	}, [dispatch]);

	// Handle input value changes
	const handleChange = (e) => dispatch(setKeyword(e.target.value));

	// Handle submit query
	const handleSubmit = (e) => {
		e.preventDefault();
		getData(keyword).then((gifs) => dispatch(setGifs(gifs)));
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<Search onSubmit={handleSubmit} onChange={handleChange} />
					<div className='result'>
						<Gifs data={gifs} />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
