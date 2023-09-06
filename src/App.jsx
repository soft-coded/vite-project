import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nav } from "./components/nav";
import Login from "./components/login";
import Counter from "./components/counter";
import PageNotFound from "./components/pageNotFound";
import Products from "./components/products";
import Home from "./components/home";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="" element={<Home />} />,
				<Route path="login" element={<Login />} />,
				<Route path="products" element={<Products />} />,
				<Route path="counter" element={<Counter />} />,
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
