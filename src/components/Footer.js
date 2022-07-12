import React from "react";
import styled from "styled-components";
import {
	FaPinterest,
	FaTwitter,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
import logo from "../images/logo2.svg";
const Footer = () => {
	return (
		<Wrapper>
			<section className="footer-links">
				<div>
					<img src={logo} alt="" />
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
					<button>Request invite</button>
					<p>© Easybank. All Rights Reserved</p>
				</div>
			</section>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	background-color: hsl(233, 26%, 24%);

	.footer-links {
		padding: 3rem;
		background-color: hsl(233, 26%, 24%);
		color: var(--clr-white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
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
			transition: var(--transition);
			&:hover {
				color: hsla(136, 65%, 61%, 1);
				cursor: pointer;
			}
		}
	}
	.social-links {
		display: flex;
		gap: 3rem;
		margin-block-start: 2rem;
		svg {
			font-size: 2.5rem;
			color: var(--clr-white);
			transition: var(--transition);
			&:hover {
				color: hsla(136, 65%, 61%, 1);
				cursor: pointer;
			}
		}
	}
	button {
		background: linear-gradient(
			90deg,
			hsla(136, 65%, 51%, 0.89),
			rgba(43, 183, 218, 0.932)
		);
		color: var(--clr-white);
		border: none;
		padding: 1.5rem;
		font-size: 1.8rem;
		font-weight: 700;
		padding-inline: 4.5rem;
		border-radius: 30px;
		transition: var(--transition);
		&:hover {
			opacity: 0.5;
			cursor: pointer;
		}
	}
	p {
		font-size: 1.2rem;
		margin-block-start: 2rem;
		color: hsl(233, 8%, 62%);
	}
`;
