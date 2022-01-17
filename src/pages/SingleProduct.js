import { useState, useEffect } from "react";

import Warrenty from "../assets/warrenty.png";
import Shipping from "../assets/free-shipping.png";
import PayMethods from "../assets/pay-methods.png";

import { useNavigate } from "react-router-dom";
import { api, coCartApi, siteURL } from "./woocommerce";
import axios from "axios";

let cssLoaded = false

function SingleProduct() {

	
	let Redirect = useNavigate();
	
    const [product, setProduct] = useState();
	
    useEffect(() => {
		
		if (cssLoaded === false) {
			cssLoaded = true;
			import('../css/singleproduct.css');
		}

        async function getProduct() {
            api.get(
                "products/7578",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                },
                { withCredentials: true }
            ).then((res) => {
                console.log(res);
                setProduct(res.data);
            });
        }

        getProduct();
    }, []);

    function prodImg(e) {
        var source_src = document.getElementById("productimage1").src;
        var source_alt = document.getElementById("productimage1").alt;

        document.getElementById("productimage1").src = e.target.src;
        document.getElementById("productimage1").alt = e.target.alt;

        document.getElementById(e.target.id).src = source_src;
        document.getElementById(e.target.id).alt = source_alt;
    }

    function negative_num(e) {
        let neg_count = document.getElementById("box_value").value;
        let neg_price = document.getElementById("productPrice").innerHTML;

        if (neg_count === 1) {
            document.getElementById("box_value").value = 1;
        } else {
            neg_count = neg_count - 1;
            document.getElementById("box_value").value = neg_count;
            document.getElementById("productPrice").innerHTML = (
                neg_price - 450.99
            ).toFixed(2);
        }
    }

    function positive_num(e) {
        let pos_count = document.getElementById("box_value").value;
        let pos_price = document.getElementById("productPrice").innerHTML;
        document.getElementById("box_value").value = +pos_count + 1;
        document.getElementById("productPrice").innerHTML = (
            +pos_price + 450.99
        ).toFixed(2);
    }

    function popImg(e) {
        document.getElementById("imagePopup").style.display = "block";
        document.getElementById("poppedupImg").src = e.target.src;
    }

    function closePop(e) {
        document.getElementById("imagePopup").style.display = "none";
    }

    function addToCart(e) {
        var prodId = e.target.attributes["data-index"].value;
        var cart_key = localStorage.getItem("cart_key");
        var data = {
            id: prodId,
            quantity: "1",
        };

        axios
            .post(
                `${siteURL}/wp-json/cocart/v2/cart/add-item`,
                data,
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
                localStorage.setItem("cart_key", response.data.cart_key);
                alert("Product Added to cart");
                // Redirect("/cart");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function GoToCart(e) {
        console.log("Go to Cart");
        Redirect("/cart");
    }

    return (
        <div>
            {product ? (
                <div>
                    <div className="main-div">
                        <div className="product-img-row">
                            <div className="product-main-img">
                                <img
                                    onClick={popImg}
                                    id="productimage1"
                                    className="product-img1"
                                    src={product.images[0].src}
                                    alt={product.images[0].name}
                                />
                            </div>
                            <div className="product-sub-img">
                                <img
                                    onClick={prodImg}
                                    id="productimage2"
                                    className="product-img2"
                                    src={product.images[1].src}
                                    alt={product.images[1].name}
                                />
                                <img
                                    onClick={prodImg}
                                    id="productimage3"
                                    className="product-img3"
                                    src={product.images[2].src}
                                    alt={product.images[2].name}
                                />
                                <img
                                    onClick={prodImg}
                                    id="productimage4"
                                    className="product-img4"
                                    src={product.images[3].src}
                                    alt={product.images[3].name}
                                />
                            </div>
                            <div className="add-to-cart-btn-div">
                                <button
                                    className="add-to-cart-btn"
                                    type="button"
                                >
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                        <div className="product-details-row">
                            <div className="product-details-sub-row">
                                <div className="product-title-div">
                                    <p id="productTitle">{product.name}</p>
                                </div>
                                <div className="product-details-div">
                                    <div className="plank-size-div">
                                        <div>
                                            <p>Plank Size</p>
                                        </div>
                                        <div>
                                            <p id="plankSize">
                                                {
                                                    product.attributes[0]
                                                        .options[0]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-contains-div">
                                        <div>
                                            <p>1 Box Contains</p>
                                        </div>
                                        <div>
                                            <p id="boxContains">
                                                {
                                                    product.attributes[1]
                                                        .options[0]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-sqft-div">
                                        <div>
                                            <p>Price / Sqft</p>
                                        </div>
                                        <div>
                                            <p id="priceSqft">
                                                {
                                                    product.attributes[2]
                                                        .options[0]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-box-div">
                                        <div>
                                            <p>Price / Box</p>
                                        </div>
                                        <div>
                                            <p id="priceBox">
                                                {
                                                    product.attributes[3]
                                                        .options[0]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="features-div">
                                        <div>
                                            <p>Features</p>
                                        </div>
                                        <div>
                                            <p id="features">
                                                {
                                                    product.attributes[4]
                                                        .options[0]
                                                }
                                                <br />
                                                {
                                                    product.attributes[0]
                                                        .options[1]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="no-of-boxes-div">
                                        <div>
                                            <p>No. of boxes</p>
                                        </div>
                                        <div className="no-of-box-input">
                                            <span>
                                                <i
                                                    id="negative_num"
                                                    onClick={negative_num}
                                                    className="bi bi-chevron-left"
                                                ></i>
                                            </span>
                                            <input
                                                id="box_value"
                                                defaultValue={1}
                                                onKeyPress={(event) => {
                                                    if (
                                                        !/[0-9]/.test(event.key)
                                                    ) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                            <span>
                                                <i
                                                    id="positive_num"
                                                    onClick={positive_num}
                                                    className="bi bi-chevron-right"
                                                ></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="area-of-floor-div">
                                        <div>
                                            <p>
                                                Or enter the area of the floor
                                            </p>
                                        </div>
                                        <div className="area-of-floor-input">
                                            <input
                                                id=""
                                                onKeyPress={(event) => {
                                                    if (
                                                        !/[0-9]/.test(event.key)
                                                    ) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="area-of-floor-dropdown">
                                            <select className="selectpicker">
                                                <option>Sq.ft</option>
                                                <option>Sq.mtr</option>
                                                <option>Sq.m</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="how-to-calculate-div">
                                        <a href="/cal">How to Calculate ?</a>
                                    </div>
                                    <div className="total-price-div">
                                        <div>
                                            <p>Total Price</p>
                                        </div>
                                        <div className="price">
                                            <div>
                                                <p>Rs.</p>
                                                <p id="productPrice">
                                                    {product.price}
                                                </p>
                                                <p>/-</p>
                                            </div>
                                            <p>
                                                Offer price ends in{" "}
                                                <span>
                                                    2 days 11 hours 20 mins
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="apply-coupon-div">
                                        <button type="button">
                                            Apply Coupon
                                        </button>
                                    </div>
                                    <div className="cart-div">
                                        <div>
                                            <button
                                                key={product.id}
                                                data-index={product.id}
                                                onClick={addToCart}
                                                type="button"
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={GoToCart}
                                                type="button"
                                            >
                                                Go to cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="warrenty-shipping-div">
                                        <div>
                                            <img
                                                src={Warrenty}
                                                alt="Warrenty"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                src={Shipping}
                                                alt="Shipping"
                                            />
                                        </div>
                                    </div>
                                    <div className="paymethods-div">
                                        <div>
                                            <img
                                                src={PayMethods}
                                                alt="PayMethods"
                                            />
                                        </div>
                                    </div>
                                    <div className="more-details-div">
                                        <div>
                                            <p>More Details</p>
                                        </div>
                                        <div className="seperator"></div>
                                        <div>
                                            <p id="productDescription">
                                                {product.short_description}
                                            </p>
                                        </div>
                                        <div>
                                            <button type="button">
                                                Show More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="imagePopup" className="img-popup">
                        <span onClick={closePop} className="img-close">
                            &times;
                        </span>
                        <img
                            className="popped-up-img"
                            id="poppedupImg"
                            alt="close"
                        />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SingleProduct;
