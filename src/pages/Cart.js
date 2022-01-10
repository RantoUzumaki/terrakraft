import { useEffect, useState } from "react"
import axios from "axios"
import siteURL from "./woocommerce"

const ProductData = {
	token: localStorage.getItem('token')
}

function Cart() {

	useEffect(() => {
		getCart()
	}, [])

	const [cart, setCart] = useState(null)

	const getCart = async () => {
		axios.get(`${siteURL}/wp-json/cocart/v2/cart/items`, { headers: { "Authorization": `Bearer ${ProductData.token}` } })
			.then(
				response => {
					console.log(response)
					setCart(response.data)
				}
			).catch(
				error => {
					console.log(error)
				}
			)
	}

	return(
		<div>
			{ console.log(cart) }
			<p>Cart page</p>
		</div>
	)
}

export default Cart