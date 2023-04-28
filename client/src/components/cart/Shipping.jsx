import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
	return (
		<section className="shipping">
			<main>
				<h1>Shipping Details</h1>
				<form>
					<div>
						<label>House No.</label>
						<input type="text" placeholder="Enter house no." />
					</div>
					<div>
						<label>City</label>
						<input type="text" placeholder="Enter city" />
					</div>
					<div>
						<label>Country</label>
						<select>
							<option value="">Country</option>
							{Country &&
								Country.getAllCountries().map((i) => (
									<option value={i.isoCode} key={i.isoCode}>
										{i.name}
									</option>
								))}
						</select>
					</div>
					<div>
						<label>State</label>
						<select>
							<option value="">State</option>
							{State &&
								State.getStatesOfCountry("IN").map((i) => (
									<option value={i.isoCode} key={i.isoCode}>
										{i.name}
									</option>
								))}
						</select>
					</div>
					<div>
						<label>Pin Code</label>
						<input type="number" placeholder="Enter Pincode" />
					</div>
					<div>
						<label>Phone No.</label>
						<input type="number" placeholder="Enter phone no" />
					</div>
					<button type="Submit">Confirm Order</button>
				</form>
			</main>
		</section>
	);
};

export default Shipping;
