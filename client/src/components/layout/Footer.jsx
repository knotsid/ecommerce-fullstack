import React from "react";

import {
	AiFillInstagram,
	AiFillGithub,
	AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div>
				<h2>Ridiculous Burger</h2>
				<p>We are trying to give you the most ridiculously best burger.</p>
				<br />
				<em>We give attention to genuine feedback.</em>
				<strong>All rights received @ridiculousburger</strong>
				
			</div>
               <aside>
					<h4>Follow Us </h4>
					<a href="https://instagram.com/not._sid">
						<AiFillInstagram />
					</a>
					<a href="https://twitter.com/notsidreads">
						<AiFillTwitterCircle />
					</a>
					<a href="https://github.com/knotsid">
						<AiFillGithub />
					</a>
				</aside>
		</footer>
	);
};

export default Footer;
