import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { api } from "./woocommerce";

export default function PayByRazorPay() {
	let data = JSON.parse(localStorage.getItem("order_details"))

    const Razorpay = useRazorpay();
	var razorpayOrderID = []

	function createOrder() {
		api.post("razorpay/create_order", {
			payment_method: "razorpay",
			amount: parseInt(data.total * 100),
			currency: data.currency,
		}).then((res) => {
			console.log("create order razorpay",res)
			razorpayOrderID.push(res.data)
			handlePayment()
		}).catch((error) => {
			console.log(error)
		})
	}
	
	function handlePayment() {
		const options: RazorpayOptions = {
			key: "rzp_test_asblbxpb7zcRbJ",
			amount: data.total * 100,
			currency: data.currency,
			name: "Acme Corp",
			description: "Test Transaction",
			image: "https://example.com/your_logo",
			order_id: razorpayOrderID[0],
			handler: (res) => {
				paymentConfirmation(res)
				console.log("handle payment razorpay",res);
			},
			prefill: {
				name: "Piyush Garg",
				email: "piyushgarg.dev@gmail.com",
				contact: "9999999999",
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#3399cc",
			},
		};
		console.log(options)
		const rzpay = new Razorpay(options);
		rzpay.open();
	}

	function paymentConfirmation(res) {
		console.log("order_id of razorpay",razorpayOrderID)
		api.post("razorpay/payment", {
			"order_id": res.razorpay_order_id,
			"payment_token": res.razorpay_payment_id,
			"razorpay_signature": res.razorpay_signature,
			"woocom_order_id": data.id
		}).then((res) => {
			console.log(res)
		}).catch((error) => {
			console.log(error)
		})
	}

    return (
        <div className="App">
            <button onClick={createOrder}>Click</button>
        </div>
    );
}
