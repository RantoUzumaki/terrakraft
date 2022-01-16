// import React, { useEffect } from "react";

// const PayByRazorPay = () => {
//     const options = {
//         key: "rzp_test_jcT4ReV63CRlqs",
//         amount: "100", //  = INR 1
//         name: "Acme shop",
//         description: "some description",
//         image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
//         handler: function (response) {
//             alert(response.razorpay_payment_id);
//         },
//         prefill: {
//             name: "Gaurav",
//             contact: "9999999999",
//             email: "demo@demo.com",
//         },
//         notes: {
//             address: "some address",
//         },
//         theme: {
//             color: "blue",
//             hide_topbar: false,
//         },
//     };

//     const openPayModal = () => {
//         var rzp1 = new window.Razorpay(options);
//         rzp1.open();
//     };
//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.async = true;
//         document.body.appendChild(script);
//     }, []);

//     return (
//         <>
//             <button onClick={openPayModal}>Pay with Razorpay</button>
//         </>
//     );
// };

// export default PayByRazorPay;

import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

function PayByRazorPay() {
    // const Razorpay = useRazorpay();

    // function handlePayment() {
    //     // const order = createOrder(params);

    //     const options: RazorpayOptions = {
    //         key: "IiN61HUHw24WH4",
    //         amount: "3000",
    //         currency: "INR",
    //         name: "Acme Corp",
    //         description: "Test Transaction",
    //         image: "https://example.com/your_logo",
    //         // order_id: order.id,
    //         handler: (res) => {
    //             console.log(res);
    //         },
    //         prefill: {
    //             name: "Piyush Garg",
    //             email: "piyushgarg.dev@gmail.com",
    //             contact: "9999999999",
    //         },
    //         notes: {
    //             address: "Razorpay Corporate Office",
    //         },
    //         theme: {
    //             color: "#3399cc",
    //         },
    //     };

    //     const rzpay = new Razorpay(options);
    //     rzpay.open();
    // }

    return (
        <div className="App">
            <button >Click</button>
        </div>
    );
}

export default PayByRazorPay;