import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import Home from "./index";

test("Home Page", () => {
	render(
		<Provider store={store}>
			<Home />
		</Provider>
	);
	const inputPlaceholder = screen.getByPlaceholderText(/find a giphy/i);
	expect(inputPlaceholder).toBeInTheDocument();
});
