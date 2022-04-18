import React, { useEffect } from "react";

// Styling
import "./index.css";

// API
import { getTrending } from "../../api/api";

// Components
import Gifs from "../../components/GifCard/GifCard";

// Redux
import { setGifs } from "../../store/gifsSlice";
import {
	useTypedDispatch,
	useTypedSelector,
} from "../../hooks/typedReduxHooks";

const Trending = () => {
	// Redux state
	const gifs = useTypedSelector((state) => state.gifs.value);

	// Dispatch
	const dispatch = useTypedDispatch();

	useEffect(() => {
		getTrending().then((gifs) => dispatch(setGifs(gifs)));
	}, [dispatch]);

	return (
		<div className='trending-giphy'>
			<header className='trending-giphy-header'>
				<h2>Trending Giphy</h2>
				<div className='trending-giphy-result'>
					<Gifs data={gifs} />
				</div>
			</header>
		</div>
	);
};

export default Trending;
