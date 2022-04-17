import React, { useState, useEffect } from "react";

// Styling
import "./index.css";

// API
import { getTrending } from "../../api/api";

// Components
import Gifs from "../../components/GifCard/GifCard";

const Trending = () => {
	const [result, setResult] = useState([]);

	useEffect(() => {
		getTrending().then((gifs) => {
			setResult(gifs);
		});
	}, []);

	return (
		<div className='trending-giphy'>
			<header className='trending-giphy-header'>
				<h2>Trending Giphy</h2>
				<div className='trending-giphy-result'>
					<Gifs data={result} />
				</div>
			</header>
		</div>
	);
};

export default Trending;
