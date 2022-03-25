import React from "react";

import Search from "../../components/Search";
import GifResult from "../../components/GifResult";

import "./index.css";

const Home = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<Search />
					<GifResult />
				</div>
			</header>
		</div>
	);
};

export default Home;
