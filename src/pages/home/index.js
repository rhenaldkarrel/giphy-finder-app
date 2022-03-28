import React from "react";

import GifResult from "../../components/GifResult";

import "./index.css";

const Home = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<GifResult />
				</div>
			</header>
		</div>
	);
};

export default Home;
