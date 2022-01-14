import { useEffect, useState } from "react";
import axios from "axios";
import siteURL from "./woocommerce";
import "../css/cart.css";
import img from "../assets/product-image1.png";
import PayMethods from "../assets/pay-methods.png";
import { useCookies } from "react-cookie";

function Cart() {
    useEffect(() => {
        async function getCart() {
            axios
                .get(
                    `${siteURL}/wp-json/cocart/v2/cart/items`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    },
                    { withCredentials: true }
                )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getCart();
    }, []);

    const [cart, setCart] = useState(null);
    const [cookies, setCookie] = useCookies();

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

    return (
        <div className="cartContainer">
            <div className="cartHead">
                <p>Shopping Cart</p>
            </div>
            <div className="productsDiv">
                <div className="productSubDiv">
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
                            <tr>
                                <td className="productImage">
                                    <img src={img} alt="img" />
                                </td>
                                <td className="productName">
                                    Test Name
                                </td>
                                <td className="productQuantity">
                                    <div>
                                        <span className="negativeSign">
                                            <i
                                                id="negative_num"
                                                onClick={negative_num}
                                                className="bi bi-chevron-left"
                                            ></i>
                                        </span>
                                        <input
											className="productQuantityInput"
                                            id="quantity_value"
                                            defaultValue={1}
                                            onKeyPress={(event) => {
                                                if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                                            }}
                                        />
                                        <span className="positiveSign">
                                            <i
                                                id="positive_num"
                                                onClick={positive_num}
                                                className="bi bi-chevron-right"
                                            ></i>
                                        </span>
                                    </div>
                                </td>
                                <td className="productPrice">Rs. 5099.00</td>
                                <td className="addtowishlistButton">
                                    <button type="button">
                                        <i className="bi bi-heart"></i>
										Wishlist
                                    </button>
                                </td>
                                <td className="productRemoveButton">
                                    <button type="button"><i className="bi bi-trash"></i>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <button type="button">
                                        <i className="bi bi-chevron-left"></i>
                                        Continue shopping
                                    </button>
                                </td>
                                <td>
                                    <button type="button">
                                        Make Purchase
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="coupenPriceDiv">
                    <div className="coupenDiv">
                        <div>
                            <p>Have coupon?</p>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Coupon Code..."
                                />
                                <button type="button">Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className="priceDiv">
                        <div>
                            <div className="">
                                <p>Total Price:</p>
                                <p>Discount:</p>
                                <p>Total:</p>
                            </div>
                            <div>
                                <p>Rs. 5099.00</p>
                                <p>Rs. 5099.00</p>
                                <p>Rs. 5099.00</p>
                            </div>
                            <div></div>
                            <div>
                                <img src={PayMethods} alt="PayMethods" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
