import Header from "./pages/Header";
import Login from "./pages/login";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayByRazorPay from "./pages/Paymant";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Login />}></Route>
                    <Route
                        path="/single-product"
                        element={<SingleProduct />}
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/payment" element={<PayByRazorPay />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
