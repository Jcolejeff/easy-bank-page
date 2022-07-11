import React from "react";
import styled from "styled-components";
import {
	FaPinterest,
	FaTwitter,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
const Footer = () => {
	return (
		<Wrapper>
			<section className="footer-links">
				<h1>Shortly</h1>

				<div>
					<h5>Features</h5>
					<ul>
						<li> Link Shortening</li>
						<li>Branded Links </li>
						<li> Analytics</li>
					</ul>
				</div>
				<div>
					<h5>Resources</h5>
					<ul>
						<li> Blog</li>
						<li>Developers</li>
						<li> Support</li>
					</ul>
				</div>
				<div>
					<h5>Company</h5>
					<ul>
						<li> About</li>
						<li> Our Team</li>

						<li> Careers</li>
						<li> Contact</li>
					</ul>
				</div>
				<div className="social-links">
					<FaFacebook />
					<FaTwitter />
					<FaInstagram />
					<FaPinterest />
				</div>
			</section>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	background-color: hsl(260, 8%, 14%);

	.footer-links {
		padding: 3rem;
		background-color: hsl(260, 8%, 14%);
		color: var(--clr-white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		@media (min-width: 65rem) {
			flex-direction: row;
			justify-content: space-around;
		}
		div {
			text-align: center;
			font-size: 1.2rem;
			color: hsl(257, 7%, 63%);
		}
		h5 {
			font-size: 1.5rem;
			color: var(--clr-white);
		}
	}
	.social-links {
		display: flex;
		gap: 3rem;
		svg {
			font-size: 2.5rem;
			color: var(--clr-white);
		}
	}
`;
