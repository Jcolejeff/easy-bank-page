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
				<div>
					<h1>Shortly</h1>
					<div className="social-links">
						<FaFacebook />
						<FaTwitter />
						<FaInstagram />
						<FaPinterest />
					</div>
				</div>

				<div>
					<h5>About</h5>
					<h5>Contact</h5>
					<h5>Blog</h5>
				</div>
				<div>
					<h5>Career</h5>
					<h5>Support</h5>
					<h5>Privacy Policy</h5>
				</div>
				<div>
					<h5>Requeust invite</h5>
					<p>© Easybank. All Rights Reserved</p>
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
			transition: var(--transition);
			&:hover {
				color: hsla(136, 65%, 61%, 1);
			}
		}
	}
`;
