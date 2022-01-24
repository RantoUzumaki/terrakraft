import Header from "./pages/Header";
import Login from "./pages/login";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayByRazorPay from "./pages/Payment";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import Regitser from "./pages/Register";
import Flooring from "./pages/Flooring";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Homepage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Regitser />}></Route>
                    <Route path="/product/flooring" element={<Flooring />}></Route>
                    <Route path="/product/single-product" element={<SingleProduct />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/payment" element={<PayByRazorPay />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
