import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me2 from "../../assets/me2.png";

const About = () => {
	return (
		<section className="about">
			<main>
				<h1>About Us</h1>
				<article>
					<h4>Ridiculous Burgers</h4>
					<p>
						Our aim is to create the most satisfatory burger for you all.{" "}
					</p>
					<p>
						Give yourself a ridiculously amazing burger. Chechout our
						ridiculous menu below.
					</p>
					<Link to="/">
						<RiFindReplaceLine />
					</Link>
				</article>
				<div>
					<h2>Founder</h2>
					<article>
						<div>
							<img src={me2} alt="Founder" />
							<h3>NotSid</h3>
						</div>
						<p>
							Digital Craftsman (Web Developer/Front-End Developer) Hello
							there! I'm a self-taught Software-Engineer building the
							best version of myself one step at a time. All projects are
							built from ground up, with the aim of getting better at
							backend management. I'm currently working on personal
							projects and improving on everything Front-End related.
						</p>
					</article>
				</div>
			</main>
		</section>
	);
};

export default About;
