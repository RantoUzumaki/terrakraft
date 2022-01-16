import { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { siteURL, api } from "./woocommerce";

const dataTest = JSON.stringify({
    payment_method: "cod",
    payment_method_title: "Cash on delivery",
    set_paid: false,
    billing: {
        first_name: "rocky",
        last_name: "",
        address_1: "bangladesh ",
        address_2: "",
        city: "dhaka",
        state: "Chittagong ",
        postcode: "4590",
        country: "",
        email: "mdroky360@gmail.com",
        phone: "01683946462",
    },
    shipping: {
        first_name: "md roky",
        last_name: "",
        address_1: "bangladesh ",
        address_2: "",
        city: "rangamati ",
        state: "Chittagong ",
        postcode: "4590",
        country: "US",
    },
    line_items: [{ product_id: 7578, quantity: 2 }],
    shipping_lines: [
        { method_id: "flat_rate", method_title: "Flat Rate", total: "80" },
    ],
});

function Checkout() {
    function getCkeckoutDetails(e) {
        console.log(dataTest);
        // axios
        //     .post(
        //         `${siteURL}/wp-json/wc/v3/orders`, dataTest,
        //         {
        //             headers: {
        //                 "Authorization": `Bearer ${localStorage.getItem(
        //                     "token"
        //                 )}`,
        //             },
        //         },
        //         { withCredentials: true }
        //     )
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        api.post("orders", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }, dataTest }).then((res)=> {console.log(res)})
    }

    return (
        <div>
            <button onClick={getCkeckoutDetails}> Activate Lasers</button>
        </div>
    );
}

export default Checkout;
