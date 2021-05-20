import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import HikingContext from "../context/hiking/hikingContext";

// React-Bootstrap components
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

const Trail = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { getTrail, loading } = hikingContext;

	// useParams retrieves the trail name from the URL parameters.
	let { param } = useParams();

	// On mount, calls getTrail with the param of the hike in the url.
	useEffect(() => {
		if (param) {
			try {
				getTrail(param);
			} catch (error) {
				// TODO - Error Handling
				// Trail is not in database.
				// Reroute user to <trail not found> page
				console.error(error.message);
			}
		} else {
			console.error("No URL parameters given...");
			// Route user to <trail not found> page
		}
	}, []);

	if (!loading && !isEmpty(hikingContext.trail)) {
		const { elevation, length, name, url, coordinates, features } =
			hikingContext.trail;

		// Nullish coalescing. If left side is null or undefined, return right side
		const highestPoint = elevation["Highest Point"] ?? "N/A";
		const gain = elevation["Gain"] ?? "N/A";

		// TODO - handle length not displaying properly

		return (
			<Container>
				<Row className="">
					<Col xs={6}>
						<h1>{name}</h1>
					</Col>
					<Col className="d-flex justify-content-end">
						<Col className="d-flex-inline text-right">
							<span>Length</span> <br />
							<span style={{ fontWeight: "bold" }}>{length}</span>
						</Col>
						<Col className="d-flex-inline text-right">
							<span>Highest Point</span> <br />
							<span style={{ fontWeight: "bold" }}>{highestPoint}</span>
						</Col>
						<Col className="d-flex-inline text-right">
							<span>Gain</span> <br />
							<span style={{ fontWeight: "bold" }}>{gain}</span>
						</Col>
					</Col>
				</Row>

				<Carousel className="mt-4 mb-4" interval={null}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/10/500/200"
						></img>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/10/500/200"
						></img>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/10/500/200"
							style={{ maxWidth: "100%", maxHeight: "100%" }}
						></img>
					</Carousel.Item>
				</Carousel>

				<Row>
					<Col xs={8}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum est
						beatae ducimus ab, doloremque quasi facere fugiat architecto sit,
						reprehenderit illo eligendi blanditiis, quod eveniet. Itaque illo
						facilis enim tempore possimus incidunt minus earum quae magni
						voluptatum, quis in vitae eos ab? Quidem ullam, accusantium, maxime
						laborum earum quod, recusandae voluptate perferendis quas id optio
						quo quam rerum. Quas eos debitis id, corporis fugit quasi vero neque
						minima ipsa. Nesciunt autem, explicabo hic, neque reiciendis
						perferendis quaerat consectetur saepe voluptatum quasi sequi id.
						Dolore atque quam, ea est architecto, voluptatibus incidunt tenetur
						culpa quos, autem sit sed delectus iure molestias.
					</Col>

					<Col style={{ alignItems: "stretch" }}>
						<Button variant="primary" block href="/">
							Button 1
						</Button>
						<Button variant="primary" block>
							Button 2
						</Button>
						<Button variant="primary" block>
							Button 3
						</Button>
					</Col>
				</Row>
			</Container>
		);
	} else {
		return <h1>loading...</h1>;
	}
};

// Check if an object is empty.
const isEmpty = (obj) => {
	let value = false;

	if (typeof obj === "undefined") {
		value = true;
	} else if (obj == null) {
		value = true;
	} else if (Object.keys(obj).length === 0) {
		value = true;
	}

	return value;
};

// TODO - ensuring object is not empty. double rendering. object is empty at first, then re render creates proper object?..

export default Trail;
