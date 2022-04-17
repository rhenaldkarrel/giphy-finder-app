import styles from "./SearchForm.module.css";

const Search = ({ onSubmit, onChange }) => {
	return (
		<form action='#' className={styles.form} onSubmit={onSubmit}>
			<input
				type='text'
				id='search'
				placeholder='Find a giphy...'
				autoComplete='off'
				onChange={onChange}
				className={styles.input}
			/>
			<button className={styles.button}>Search</button>
		</form>
	);
};

export default Search;
