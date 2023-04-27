import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Cart = () => {
	const handleIncrement = (item) => {};
	const handleDecrement = (item) => {};

	return (
		<section className="cart">
			<main>
				<CartItem
					title={"Cheese Burger"}
					img={burger1}
					value={0}
					increment={() => handleIncrement(1)}
					decrement={() => handleDecrement(1)}
				/>
				<CartItem
					title={"Spicy Cheese Burger"}
					img={burger2}
					value={0}
					increment={() => handleIncrement(2)}
					decrement={() => handleDecrement(2)}
				/>
				<CartItem
					title={"Chicken Burger"}
					img={burger3}
					value={0}
					increment={() => handleIncrement(3)}
					decrement={() => handleDecrement(3)}
				/>
				<article>
					<div>
						<h4>Sub Total</h4>
						<p>INR {2000}</p>
					</div>
					<div>
						<h4>Tax</h4>
						<p>INR {2000 * 0.18}</p>
					</div>
					<div>
						<h4>Shipping Charges</h4>
						<p>INR {200}</p>
					</div>
					<div>
						<h4>Total</h4>
						<p>INR {2000 + 200 * 0.18 + 200}</p>
					</div>
					<Link to="/shipping">Checkout</Link>
				</article>
			</main>
		</section>
	);
};

export default Cart;
