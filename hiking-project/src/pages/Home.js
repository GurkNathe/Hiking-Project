import React, { useContext } from "react";

import { Container } from "react-bootstrap";

import BackdropFilter from "react-backdrop-filter";

import HikingContext from "../context/hiking/hikingContext";
import Search from "../components/Search";
import Trails from "../components/Trails";

const Home = () => {
	// Instantiate context
	const { getTrails } = useContext(HikingContext);

	let imageUrl = "https://wallpaperaccess.com/full/1216331.jpg";

	return (
		<div>
			<BackdropFilter
				className="bluredForm"
				filter={"blur(10px)"}
				html2canvasOpts={{
					allowTaint: true,
				}}
				onDraw={() => {
					console.log("Rendered !");
				}}
			>
				<Container className="pt-4 pb-4" fluid>
					<Search searchFunction={getTrails}></Search>
				</Container>
			</BackdropFilter>
			<hr className="mt-0" />
			<Trails></Trails>
		</div>
	);
};

export default Home;
