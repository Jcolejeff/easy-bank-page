import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Services from "./components/services";
import Articles from "./components/articles";

function App() {
	return (
		<div className="App">
			<Sidebar></Sidebar>
			<Nav></Nav>
			<Hero></Hero>
			<Services></Services>
			<Articles></Articles>
			<Footer></Footer>
		</div>
	);
}

export default App;
