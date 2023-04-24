import React from "react";

const CartItem = ({ value, title, img, increment, decrement }) => {
	return (
		<div>
			<div className="cartItem">
				<div>
					<h4>{title}</h4>
					<img src={img} alt="burgers" />
				</div>
				<div>
					<button onClick={decrement}> - </button>
					<input type="number" readOnly value={value} />
					<button onClick={increment}> + </button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
