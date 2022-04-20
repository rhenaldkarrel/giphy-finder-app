import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

test("check the navigation link", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = screen.getByText(/trending/i);
	expect(linkElement).toBeInTheDocument();
});
