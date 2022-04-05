import "./Search.css";

const Search = ({ onSubmit, onChange }) => {
	return (
		<form action='#' onSubmit={onSubmit}>
			<input
				type='text'
				id='search'
				placeholder='Find a giphy...'
				autoComplete='off'
				onChange={onChange}
			/>
			<button>Search</button>
		</form>
	);
};

export default Search;
