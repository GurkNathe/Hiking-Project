import React, { useContext } from "react";

// Components
import HikingContext from "../context/hiking/hikingContext";
import TrailItem from "../components/TrailItem";

// React Bootstrap Components
import { Spinner, Container } from "react-bootstrap";

const Trails = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { trails, loading } = hikingContext;

	if (loading) {
		return (
			<Container>
				<Spinner
					animation="border"
					style={{ margin: "auto", display: "block" }}
					className="mt-4"
				></Spinner>
			</Container>
		);
	} else {
		return (
			<Container>
				{trails.map((trail, idx) => (
					<TrailItem
						elevation={trail.elevation}
						name={trail.name}
						distance={trail.distance}
						length={trail.length}
						key={idx}
					></TrailItem>
				))}
			</Container>
		);
	}
};

export default Trails;
