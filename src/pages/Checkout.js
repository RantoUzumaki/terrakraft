import { api } from "./woocommerce";
import "../css/checkout.css";
import { useNavigate } from "react-router-dom";


const data = JSON.stringify({
    customer_id: 5,
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
    },
    shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
    },
    line_items: [
        {
            product_id: 7578,
            quantity: 2,
        },
    ],
    shipping_lines: [
        {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "10",
        },
    ],
});

function Checkout() {

	let Redirect = useNavigate();

    function getCkeckoutDetails(e) {
        api.post(
            "orders",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
            data,
            { withCredentials: true }
        ).then((res) => {
            console.log(res);
        });
    }

    function billingFunction() {
        if (document.getElementById("same").checked) {
            document.getElementById("billaddress-one").value =
                document.getElementById("address-one").value;
            document.getElementById("billaddress-two").value =
                document.getElementById("address-two").value;
            document.getElementById("billcity").value =
                document.getElementById("city").value;
            document.getElementById("billstate").value =
                document.getElementById("state").value;
            document.getElementById("billzip").value =
                document.getElementById("zip").value;
            document.getElementById("billcountry").value =
                document.getElementById("country").value;
        } else {
            document.getElementById("billaddress-one").value = "";
            document.getElementById("billaddress-two").value = "";
            document.getElementById("billcity").value = "";
            document.getElementById("billstate").value = "";
            document.getElementById("billzip").value = "";
            document.getElementById("billcountry").value = "";
        }
    }

	function paymentConfirm(e) {
        Redirect("/payment");
    }

    return (
        <div>
            {/* <button onClick={getCkeckoutDetails}> Activate Lasers</button> */}
            <div className="checkoutcontainer">
                <span className="checkoutright-icon"></span>
                <div className="checkoutform__name">
                    Installation and Billing Details{" "}
                </div>
                <div className="checkoutform__container">
                    <section className="checkoutform__personal">
                        <div className="checkoutsections">
                            <div className="checkoutbox">1</div>
                            <span>Personal Information</span>
                        </div>
                        <div className="checkoutpersonal--form">
                            <form className="checkoutform--name" action="">
                                <div className="checkoutfirst">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
										className="checkoutInput"
                                        name="first-name"
                                        required="required"
                                        autoComplete="on"
                                        placeholder="First Name"
                                        id="firstname"
                                        type="text"
                                    />
                                </div>
                                <div className="checkoutlast">
                                    <label htmlFor="firstname">Last Name</label>
                                    <input
										className="checkoutInput"
                                        name="last-name"
                                        required="required"
                                        autoComplete="on"
                                        placeholder="Last Name"
                                        id="firstname"
                                        type="text"
                                    />
                                </div>
                                <div className="checkoutnumber">
                                    <label htmlFor="firstname">Mobile Number</label>
                                    <input
										className="checkoutInput"
                                        name="mobilenumber"
                                        required="required"
                                        autoComplete="on"
                                        pattern="[0-9]*"
                                        maxLength="10"
                                        placeholder="e.g. XXXXXXXXXX"
                                        id="mobilenumber"
                                        type="mobilenumber"
                                    />
                                </div>

                                <div className="checkoutemail">
                                    <label htmlFor="firstname">Email</label>
                                    <input
										className="checkoutInput"
                                        name="email"
                                        required="required"
                                        autoComplete="on"
                                        placeholder="e.g. xyz@gmail.com"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="checkoutform__billing">
                        <div className="checkoutsections">
                            <div className="checkoutbox billing">2</div>
                            <span>Installation Address</span>
                        </div>
                        <div className="checkoutshipping--form">
                            <form className="checkoutform--shipping" action="">
                                <div className="checkoutrow one">
                                    <div className="checkoutaddress">
                                        <label htmlFor="address-one">
                                            Address Line 1
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="address1"
                                            required="required"
                                            placeholder="e.g. 1 Infinite Loop"
                                            id="address-one"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutaddress-two">
                                        <label htmlFor="address-two">
                                            Address Line 2
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="address2"
                                            id="address-two"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="checkoutrow two">
                                    <div className="checkoutcity">
                                        <label htmlFor="city">City</label>
                                        <input
											className="checkoutInput"
                                            name="city"
                                            required="required"
                                            placeholder="e.g. Mumbai"
                                            id="city"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutstate">
                                        <label htmlFor="state">
                                            State / Province / Region
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="state"
                                            required="required"
                                            placeholder="e.g. Maharashtra"
                                            id="state"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="checkoutrow three">
                                    <div className="checkoutzip">
                                        <label htmlFor="zip">
                                            Zip / Postal Code
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="zipcode"
                                            required="required"
                                            pattern="[0-9]*"
                                            maxLength="6"
                                            placeholder="e.g. 220001"
                                            id="zip"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutcountry">
                                        <label htmlFor="country">Country</label>
                                        <input
											className="checkoutInput"
                                            name="country"
                                            required="required"
                                            placeholder="e.g. INDIA"
                                            id="country"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="checkoutform__shipping">
                        <div className="checkoutsections">
                            <div className="checkoutbox">3</div>
                            <span>Billing Address</span>
                        </div>
                        <div className="checkoutshipping--form">
                            <form className="checkoutform--shipping" action="">
                                <div className="checkoutrow one">
                                    <div className="checkoutaddress">
                                        <label htmlFor="address-one">
                                            Address Line 1
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="billaddress1"
                                            placeholder=""
                                            id="billaddress-one"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutaddress-two">
                                        <label htmlFor="address-two">
                                            Address Line 2
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="billaddress2"
                                            id="billaddress-two"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="checkoutrow two">
                                    <div className="checkoutcity">
                                        <label htmlFor="city">City</label>
                                        <input
											className="checkoutInput"
                                            name="billcity"
                                            placeholder=""
                                            id="billcity"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutstate">
                                        <label htmlFor="state">
                                            State / Province / Region
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="billstate"
                                            placeholder=""
                                            id="billstate"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="checkoutrow three">
                                    <div className="checkoutzip">
                                        <label htmlFor="zip">
                                            Zip / Postal Code
                                        </label>
                                        <input
											className="checkoutInput"
                                            name="billzipcode"
                                            pattern="[0-9]*"
                                            maxLength="6"
                                            placeholder=""
                                            id="billzip"
                                            type="text"
                                        />
                                    </div>
                                    <div className="checkoutcountry">
                                        <label htmlFor="country">Country</label>
                                        <input
											className="checkoutInput"
                                            name="billcountry"
                                            placeholder=""
                                            id="billcountry"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <div className="checkoutform__question">
                        <input
							className="checkoutInput"
                            type="checkbox"
                            id="same"
                            name="same"
                            onChange={billingFunction}
                        />
                        <p>
                            Is your shipping address the same as your billing
                            address ?
                        </p>
                    </div>
                    <div className="checkoutform__confirmation">
                        <button className="checkoutButton" onClick={paymentConfirm}>Confirm Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
