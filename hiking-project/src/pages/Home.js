import React, { useContext } from "react";

import HikingContext from "../context/hiking/hikingContext";
import Search from "../components/Search";
import Trails from "../components/Trails";

const Home = () => {
	// Instantiate context
	const { getTrails } = useContext(HikingContext);

	const userStyle = {
		borderBottom: "2px solid #eee",
		backgroundColor: "#eee",
	};

	return (
		<div>
			<Search searchFunction={getTrails} style={{ userStyle }}></Search>
			<hr />
			<Trails></Trails>
		</div>
	);
};

export default Home;
