import React, { useContext } from "react";

import { Container } from "react-bootstrap";

import HikingContext from "../context/hiking/hikingContext";
import Search from "../components/Search";
import Trails from "../components/Trails";

const Home = () => {
	// Instantiate context
	const { getTrails } = useContext(HikingContext);

	let imageUrl = "https://wallpaperaccess.com/full/1216331.jpg";

	return (
		<div>
			<Container
				className="pt-4 pb-4 border-secondary"
				style={{
					backdropFilter: "blur(2px)",
					WebkitBackdropFilter: "blur(2px)",
				}}
				fluid
			>
				<Search searchFunction={getTrails}></Search>
			</Container>
			<hr className="mt-0" />
			<Trails></Trails>
		</div>
	);
};

export default Home;
