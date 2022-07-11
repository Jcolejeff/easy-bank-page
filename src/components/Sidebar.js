import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import useGlobalContext from "../context";
import logo from "../images/logo.svg";
const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<SidebarContainer>
			<aside
				className={`${
					isSidebarOpen ? "sidebar-wrapper show" : " sidebar-wrapper"
				}`}
			>
				<div className="sidebar-header">
					<div className="sidebar-header-logo">
						<img src={logo} alt="logo" />
					</div>
					<button type="button" className="close-btn" onClick={closeSidebar}>
						<FaTimes></FaTimes>
					</button>
				</div>
				<div className="sidebar">
					<div className="links">
						<h5> Home</h5>
						<h5>About</h5>
						<h5>Contact</h5>
						<h5>Carees</h5>
						<h5>Blogs</h5>
					</div>
				</div>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	.close-btn {
		font-size: 2.4rem;
		font-weight: 200;
		background: transparent;
		border-color: transparent;
		color: var(--Grayish-Blue);
		transition: var(--transition);
		cursor: pointer;
	}
	.close-btn:hover {
		color: var(--clr-red-light);
	}
	.logo {
		justify-self: center;
		height: 80px;
	}
	.links {
		color: white;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		h5 {
			font-size: 2rem;
			color: black;
			font-weight: 400;
		}
	}

	.sidebar-header {
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 6rem;
		padding: 3rem;
	}
	/* sidebar */
	.sidebar-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		visibility: hidden;
		z-index: -1;
		transition: var(--transition);
		transform: translateX(-100%);
		background: rgba(0, 0, 0, 0.5);
		background: linear-gradient(
			180deg,
			hsla(233, 26%, 24%, 0.89),
			hsla(0, 0%, 100%, 0.3)
		);
	}
	.sidebar-wrapper.show {
		visibility: visible;
		z-index: 2;
		transform: translateX(0);
	}
	.sidebar {
		width: 90vw;
		height: 50vh;
		max-width: var(--fixed-width);
		background: var(--clr-white);
		border-radius: var(--radius);
		box-shadow: var(--dark-shadow);
		position: relative;
		margin-inline: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		transform: translateY(-30%);
	}
`;

export default Sidebar;
