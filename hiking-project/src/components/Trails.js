import React, { useContext } from "react";

// Components
import HikingContext from "../context/hiking/hikingContext";
import TrailItem from "../components/TrailItem";

// React Bootstrap Components
import { Spinner, Container, Alert } from "react-bootstrap";

const Trails = () => {
	// Instantiate context
	const { trails, errors, alert, loading } = useContext(HikingContext);

	if (alert) {
		return (
			<Container>
				{errors.map((error, idx) => (
					<Alert key={idx} variant="danger">
						{error}
					</Alert>
				))}
			</Container>
		);
	} else if (loading) {
		return (
			<Container>
				<Spinner
					animation="border"
					style={{ margin: "auto", display: "block" }}
					className="mt-4"
					variant="light"
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
