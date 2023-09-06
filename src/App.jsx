import { Routes, Route } from "react-router-dom";

import { Nav } from "./components/nav";
import Login from "./components/login";
import Counter from "./components/counter";
import PageNotFound from "./components/pageNotFound";
import Products from "./components/products";
import Home from "./components/home";

const routes = [
	{ path: "/login", element: <Login /> },
	{ path: "/products", element: <Products /> },
	{ path: "/counter", element: <Counter /> },
	{ path: "/", element: <Home /> },
	{ path: "*", element: <PageNotFound /> }
];

function App() {
	return (
		<>
			<Nav />
			<Routes>
				{routes.map((route, i) => {
					<Route key={i} path={route.path} element={route.element} />;
				})}
			</Routes>
		</>
	);
}

export default App;
