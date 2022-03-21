import React from "react";

const SearchGiphy = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<form action=''>
						<input type='text' placeholder='Find a giphy...' />
						<button>Search</button>
					</form>
					<div className='result'>
						<img
							src='https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif'
							alt='Result'
						/>
					</div>
				</div>
			</header>
		</div>
	);
};

export default SearchGiphy;
