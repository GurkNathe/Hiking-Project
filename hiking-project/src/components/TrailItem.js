import React from "react";
import PropTypes from "prop-types";

import { Card } from "react-bootstrap";

/*
elevation = elevation gain
  name = name of trail
  distance = distance from input location
  length = length of trail
  */
function TrailItem({ elevation, name, haversine, length }) {
	const onClick = () => {
		console.log(elevation);
		console.log(name);
		console.log(haversine);
	};

	// Rounds the haversine
	const distance = Number.parseFloat(haversine).toFixed(2);

	const link = "/trails/" + name;

	return (
		<Card
			onClick={onClick}
			style={{ cursor: "pointer" }}
			className="mb-3"
			href="/trails/123"
		>
			<Card.Body as="a" href={link}>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{distance} Miles
				</Card.Subtitle>
				<Card.Text>
					Highest Point: {elevation["Highest Point"] ?? "N/A"} <br></br> Length:{" "}
					{length ?? "N/A"}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

TrailItem.propTypes = {
	name: PropTypes.string.isRequired,
	haversine: PropTypes.number.isRequired,
	elevation: PropTypes.object,
};

export default TrailItem;
