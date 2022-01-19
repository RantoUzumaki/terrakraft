import Header from "./pages/Header";
import Login from "./pages/login";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayByRazorPay from "./pages/Payment";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import Regitser from "./pages/Register";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Homepage />}></Route>
                    <Route path="/login" exact element={<Login />}></Route>
                    <Route path="/register" exact element={<Regitser />}></Route>
                    <Route
                        path="/single-product"
                        element={<SingleProduct />}
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/payment" element={<PayByRazorPay />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
