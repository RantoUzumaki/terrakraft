import { useEffect, useState } from "react";
import axios from "axios";
import { siteURL } from "./woocommerce";
import "../css/cart.css";
import PayMethods from "../assets/pay-methods.png";
import { useNavigate } from "react-router-dom";

function Cart() {
    let Redirect = useNavigate();

    const [cart, setCart] = useState([]);
    const [totals, setTotals] = useState([]);

    useEffect(() => {
        async function getCart() {
            axios
                .get(
                    `${siteURL}/wp-json/cocart/v2/cart/items`,
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    },
                    { withCredentials: true }
                )
                .then((response) => {
					setCart(response.data)
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
		async function getTotal() {
            axios
                .get(
                    `${siteURL}/wp-json/cocart/v2/cart/totals`,
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    },
                    { withCredentials: true }
                )
                .then((response) => {
                    console.log(response);
					setTotals(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getCart();
        getTotal();
    }, []);

    function negative_num(e) {
        // let neg_count = document.getElementById('box_value').value
        // let neg_price = document.getElementById('productPrice').innerHTML
        // if (neg_count === 1) {
        // 	document.getElementById('box_value').value = 1
        // } else {
        // 	neg_count = neg_count - 1
        // 	document.getElementById('box_value').value = neg_count
        // 	document.getElementById('productPrice').innerHTML = (neg_price - 450.99).toFixed(2)
        // }
    }

    function positive_num(e) {
        // let pos_count = document.getElementById('box_value').value
        // let pos_price = document.getElementById('productPrice').innerHTML
        // document.getElementById('box_value').value = +pos_count + 1
        // document.getElementById('productPrice').innerHTML = (+pos_price + 450.99).toFixed(2)
    }

    function continueShopping(e) {
        Redirect("/single-product");
    }

    function checkout(e) {
        Redirect("/checkout");
    }

    return (
        <div>
            {totals ? (
                <div className="cartcartContainer">
                    <div className="cartcartHead">
                        <p>Shopping Cart</p>
                    </div>
                    <div className="cartproductsDiv">
                        <div className="cartproductSubDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th></th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(cart).map((key) => (
                                        <tr key={cart[key].item_key}>
                                            <td className="cartproductImage">
                                                <img
                                                    src={
                                                        cart[key].featured_image
                                                    }
                                                    alt="img"
                                                />
                                            </td>
                                            <td className="cartproductName">
                                                <p
                                                    id="productKey"
                                                    style={{ display: "none" }}
                                                >
                                                    {cart[key].item_key}
                                                </p>
                                                <p
                                                    id="productID"
                                                    style={{ display: "none" }}
                                                >
                                                    {cart[key].id}
                                                </p>
                                                {cart[key].name}
                                            </td>
                                            <td className="cartproductQuantity">
                                                <div>
                                                    <span className="cartnegativeSign">
                                                        <i
                                                            id="negative_num"
                                                            onClick={
                                                                negative_num
                                                            }
                                                            className="cartbi bi-chevron-left"
                                                        ></i>
                                                    </span>
                                                    <input
                                                        className="cartproductQuantityInput"
                                                        id="quantity_value"
                                                        defaultValue={
                                                            cart[key].quantity.value
                                                        }
                                                        onKeyPress={(event) => {
                                                            if (
                                                                !/[0-9]/.test(
                                                                    event.key
                                                                )
                                                            ) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                    <span className="cartpositiveSign">
                                                        <i
                                                            id="positive_num"
                                                            onClick={
                                                                positive_num
                                                            }
                                                            className="cartbi bi-chevron-right"
                                                        ></i>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="cartproductPrice">
                                                Rs. {cart[key].price}
                                            </td>
                                            <td className="cartaddtowishlistButton">
                                                <button type="button">
                                                    <i className="cartbi bi-heart"></i>
                                                    Wishlist
                                                </button>
                                            </td>
                                            <td className="cartproductRemoveButton">
                                                <button type="button">
                                                    <i className="cartbi bi-trash"></i>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="cartcontinueShoppingButton">
                                            <button
                                                type="button"
                                                onClick={continueShopping}
                                            >
                                                <i className="cartbi bi-chevron-left"></i>
                                                Continue shopping
                                            </button>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="cartproductCheckoutButton">
                                            <button
                                                onClick={checkout}
                                                type="button"
                                            >
                                                Checkout
                                                <i className="cartbi bi-chevron-right"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="cartcoupenPriceDiv">
                            <div className="cartcoupenDiv">
                                <div>
                                    <p>Have coupon?</p>
                                    <div>
                                        <input
										  	className="cartInput"
                                            type="text"
                                            placeholder="Coupon Code..."
                                        />
                                        <button type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cartpriceDiv">
                                <div>
                                    <div className="cart">
                                        <p>Total Price:</p>
                                        <p>Discount:</p>
                                        <p>Total:</p>
                                    </div>
                                    <div>
                                        <p>Rs. {totals.subtotal}.00</p>
                                        <p>Rs. {totals.discount_total}</p>
                                        <p>Rs. {totals.total}</p>
                                    </div>
                                    <div></div>
                                    <div>
                                        <img
                                            src={PayMethods}
                                            alt="PayMethods"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Cart;
