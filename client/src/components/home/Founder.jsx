import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me2.png";

const Founder = () => {
	const options = {
		initial: {
			x: "-100%",
			opacity: 0,
		},
		whileInView: {
			x: 0,
			opacity: 1,
		},
	};
	return (
		<section className="founder">
			<motion.div {...options}>
				<img src={me} alt="Founder" height={200} width={330} />
				<h3>Siddhartha Kumar</h3>
				<p>
					Hey, Everyone I am Siddhartha, the founder of Ridiculous Burger{" "}
					<br />
					Our aim is to create the most satisfatory burger for you all.
				</p>
			</motion.div>
		</section>
	);
};

export default Founder;
