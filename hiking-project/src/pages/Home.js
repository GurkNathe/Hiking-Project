import React, { useContext } from "react";

import HikingContext from "../context/hiking/hikingContext";
import Search from "../components/Search";
import Trails from "../components/Trails";

const Home = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { getTrails } = hikingContext;

	return (
		<div>
			<Search searchFunction={getTrails}></Search>
			<br></br>
			<Trails></Trails>
		</div>
	);
};

export default Home;
