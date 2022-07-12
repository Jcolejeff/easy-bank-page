import styled from "styled-components";
import hero from "../images/image-mockups.png";

const Hero = () => {
	return (
		<Wrapper>
			<section className="hero">
				<div className="image-container">
					<picture>
						<img src={hero} alt="hero" />
					</picture>
				</div>
				<div className="desc">
					<h1> Next generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<button>Request Invite</button>
				</div>
			</section>
		</Wrapper>
	);
};

export default Hero;

const Wrapper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	overflow: hidden;
	.hero {
		text-align: center;

		picture {
			height: 40vh;
			img {
				width: 90%;
				transform: translateY(-30%);
			}
		}
		.desc {
			margin-inline: auto;
			text-align: center;
			width: 90%;
			margin-block-start: -10rem;
			padding-block-end: 10rem;
			h1 {
				font-weight: 400;
				font-size: 3.5rem;
			}
			p {
				font-size: 1.8rem;
				color: hsl(0, 0%, 75%);
				margin-block-end: 3rem;
				line-height: 1.8;
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
				}
			}
		}
		@media (min-width: 65rem) {
			display: flex;
			flex-direction: row-reverse;
			margin-inline: 8rem;
			width: 80%;
			gap: 3rem;

			& > * {
				flex: 1;
			}
			.desc {
				margin: 0;
				display: flex;
				flex-direction: column;
				padding-block-start: 13rem;

				align-items: flex-start;
				text-align: left;
				h1 {
					font-size: 4rem;
				}
			}
			picture {
				img {
					width: 120%;
					transform: translateY(-10%);
				}
			}
		}
	}
`;
