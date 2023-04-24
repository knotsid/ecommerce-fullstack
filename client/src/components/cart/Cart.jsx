import React from "react";
import CartItem from "./CartItem";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Cart = () => {

     const handleIncrement = (item) => {}
     const handleDecrement = (item) => {}

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
			</main>
		</section>
	);
};

export default Cart;
