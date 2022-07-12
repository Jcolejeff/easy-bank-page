import styled from "styled-components";
import services from "../data";

const Services = () => {
	return (
		<Wrapper>
			<header>
				<h1> Why choose Easybank? </h1>
				<p>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</header>

			<div className="services-center">
				{services.map((service) => {
					const { id, icon, title, text } = service;

					return (
						<article key={id} className="service">
							<div className="image-container">
								<img src={icon} alt="" className="icon" />
							</div>
							{/* <span className="icon">{icon}</span> */}
							<h4>{title}</h4>
							<p>{text}</p>
						</article>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default Services;
const Wrapper = styled.section`
	background-color: hsl(0, 0%, 92%);
	padding-block: 6rem;

	header {
		margin-inline: auto;
		width: 90%;
		text-align: center;
		p {
			font-size: 1.5rem;
			color: hsl(0, 0%, 55%);
			font-weight: 500;
		}
	}

	.services-center {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
	.service {
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
		margin-inline: auto;

		width: 90%;
		h4 {
			font-size: 1.7rem;
			font-weight: 700;
			color: hsl(260, 8%, 14%);
			margin-block-start: 2rem;
		}
		p {
			color: hsl(0, 0%, 50%);
			font-size: 1.3rem;
			padding-block-start: 1.5rem;
			font-weight: 400;
		}
	}

	@media (min-width: 65rem) {
		transform: translateY(-20%);
		header {
			margin-inline: auto;
			width: 90%;
			text-align: left;
			p {
				width: 50%;
			}
		}
		.service {
			text-align: left;
		}
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			width: 95%;
			margin-inline: auto;
		}
	}
`;
