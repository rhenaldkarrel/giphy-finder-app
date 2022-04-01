import React, { useState } from "react";

import { getData } from "../../auth/api";

import GifCard from "../../components/GifCard";
import Search from "../../components/Search";

import "./index.css";

const Home = () => {
	const [result, setResult] = useState([]);
	const [search, setSearch] = useState("");

	const handleChange = (e) => setSearch(e.target.value);

	const getResult = () => {
		getData(search).then((gifs) => setResult(gifs.data));
	};

	const data = result.map((gif) => (
		<GifCard
			id={gif.id}
			title={gif.title}
			images={gif.images.fixed_width.url}
		/>
	));

	const handleSubmit = (e) => {
		e.preventDefault();
		getResult();
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<Search onSubmit={handleSubmit} onChange={handleChange} />
					<div className='result'>{data}</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
