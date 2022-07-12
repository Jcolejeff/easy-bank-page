import styled from "styled-components";
import { articles } from "../data";

const Articles = () => {
	return (
		<Wrapper>
			<header>
				<h1> Latest Articles </h1>
			</header>

			<div className="services-center">
				{articles.map((service) => {
					const { id, image, title, text, author } = service;

					return (
						<article key={id} className="service">
							<div className="image-container">
								<img src={image} alt="" className="icon" />
							</div>
							<div className="text">
								<p>{author}</p>
								{/* <span className="icon">{icon}</span> */}
								<h4>{title}</h4>
								<p>{text}</p>
							</div>
						</article>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default Articles;
const Wrapper = styled.section`
	background-color: hsl(0, 0%, 95%);
	padding-block: 5rem;

	header {
		margin: 10rem;
		margin-inline: auto;

		width: 90%;
	}

	.services-center {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
	.service {
		background: var(--clr-white);
		text-align: left;
		display: grid;
		grid-template-rows: 1fr 1fr;
		border-radius: var(--radius);
		margin-inline: auto;
		margin-block-start: 1rem;
		width: 90%;
		box-shadow: var(--light-shadow);
		.text {
			padding-inline: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			p {
				font-size: 1.3rem;
			}
			h4 {
				font-size: 1.7rem;
				transition: var(--transition);
				&:hover {
					color: hsla(136, 55%, 65%, 1);
				}
			}
		}
		.image-container {
			img {
				width: 100%;
			}
		}
	}

	@media (min-width: 65rem) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			width: 95%;
			margin-inline: auto;
		}
	}
`;
