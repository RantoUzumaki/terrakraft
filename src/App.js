import { Header } from "./pages/Header";
import Login from './pages/login'
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom"

function App() {
	return (
		<div>
			<Header />
			<Router>
				<Routes>
					<Route path="/" exact element={<Login/>} ></Route>
					<Route path="/single-product" element={<SingleProduct/>} ></Route>
					<Route path="/cart" element={<Cart/>} ></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;