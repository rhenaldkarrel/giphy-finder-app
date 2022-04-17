import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styling
import styles from "./Navigation.module.css";

// Pages
import Trending from "../pages/trending-giphy";
import Home from "../pages/search-giphy";

const Navigation = () => {
	return (
		<Router>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link to='/'>Search</Link>
					</li>
					<li>
						<Link to='/trending-giphy'>Trending</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path='/trending-giphy'>
					<Trending />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigation;
