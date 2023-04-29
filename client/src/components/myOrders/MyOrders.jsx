import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<section className="tableClass">
			<main>
				<table>
					<thead>
						<tr>
							<th>Order Id</th>
							<th>Order Status</th>
							<th>Item Qty.</th>
							<th>Amount</th>
							<th>Payment Method</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{arr.map((i) => (
							<tr key={i}>
								<td>#312312312</td>
								<td>Processing</td>
								<td>23</td>
								<td>INR{32323}</td>
								<td>Online</td>
								<td>
									<Link to={`/order/${"312312312"}`}>
										<AiOutlineEye />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</section>
	);
};

export default MyOrders;
