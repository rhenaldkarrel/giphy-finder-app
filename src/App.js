import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
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
			</header>
		</div>
	);
}

export default App;
