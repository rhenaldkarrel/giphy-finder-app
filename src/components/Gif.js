import React, { useState, useEffect } from "react";

import "./Gif.css";

const Gif = () => {
	const [result, setResult] = useState([]);
	// const [search, setSearch] = useState();

	const getData = async (keyword) => {
		try {
			const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`;
			const res = await fetch(url, { method: "GET" });
			const gifs = await res.json();
			setResult(gifs.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSearch = (e) => {
		e.preventDefault();
		const inputValue = document.getElementById("search").value;
		getData(inputValue);
	};

	const data = result.map((gif) => (
		<figure key={gif.id}>
			<img src={gif.images.fixed_width.url} alt='Result' />
			<figcaption className='gif-title'>{gif.title}</figcaption>
		</figure>
	));

	return (
		<div>
			<form action='#' onSubmit={handleSearch}>
				<input type='text' id='search' placeholder='Find a giphy...' />
				<button type='button'>Search</button>
			</form>
			<div className='result'>{data}</div>
		</div>
	);
};

export default Gif;
