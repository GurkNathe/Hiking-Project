import React, { useContext } from "react";

// Components
import HikingContext from "../context/hiking/hikingContext";
import TrailItem from "../components/TrailItem";

// React Bootstrap Components
import { Spinner, Container } from "react-bootstrap";

const Trails = () => {
	// Instantiate context
	const { trails, loading } = useContext(HikingContext);

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
						haversine={trail.haversine}
						length={trail.length}
						idx={idx}
						key={idx}
					></TrailItem>
				))}
			</Container>
		);
	}
};

export default Trails;
