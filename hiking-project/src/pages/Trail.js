import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import HikingContext from "../context/hiking/hikingContext";
import ReturnButton from "../components/trailPageComponents/TrailReturn";
import TrailCarousel from "../components/trailPageComponents/TrailCarousel";

// React-Bootstrap components
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

const Trail = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { getTrail, loading, alert, setAlert } = hikingContext;

	// useParams retrieves the trail name from the URL parameters.
	let { param } = useParams();

	// Image URLs to be passed into TrailCarousel component
	let images = [
		"https://picsum.photos/id/10/600/200",
		"https://picsum.photos/id/10/600/200",
		"https://picsum.photos/id/10/600/200",
	];

	// On mount, calls getTrail with the param of the hike in the url.
	useEffect(() => {
		// Scroll to the top of the page.
		window.scrollTo(0, 0);

		if (param) {
			try {
				getTrail(param);
			} catch (error) {
				// TODO - Error Handling
				// Trail is not in database.
				// Reroute user to <trail not found> page
				setAlert(error.message);
			}
		} else {
			setAlert("No URL parameters given...");
			// Route user to <trail not found> page
		}
	}, []);

	if (alert) {
		// TODO - route user to <trail not found> page
		return <h1>YOU FUCKED UP</h1>;
	} else if (!loading && !isEmpty(hikingContext.trail)) {
		const { elevation, length, name, features, url, coordinates } =
			hikingContext.trail;
		const { lat, lon } = coordinates;

		// Nullish coalescing. If left side is null or undefined, return right side
		const highestPoint = elevation["Highest Point"] ?? "N/A";
		const gain = elevation["Gain"] ?? "N/A";

		return (
			<Container
				className="p-4 border-left border-right"
				style={{
					backgroundColor: "rgba(250,250,250, 1)",

					height: window.height,
				}}
			>
				<Row className="mb-3"></Row>
				<Row className="mb-4">
					<Col xs={12}>
						<h1>{name}</h1>
					</Col>
				</Row>

				<TrailCarousel images={images}></TrailCarousel>

				<Row>
					<Col xs={8}>
						<Col className="d-flex justify-content-end p-0">
							<Col className="d-flex-inline text-left p-0">
								<span>Length</span> <br />
								<span style={{ fontWeight: "bold", fontSize: "large" }}>
									{length}
								</span>
							</Col>
							<Col className="d-flex-inline text-left p-0">
								<span>Highest Point</span> <br />
								<span style={{ fontWeight: "bold", fontSize: "large" }}>
									{highestPoint}
								</span>
							</Col>
							<Col className="d-flex-inline text-left p-0">
								<span>Gain</span> <br />
								<span style={{ fontWeight: "bold", fontSize: "large" }}>
									{gain}
								</span>
							</Col>
						</Col>

						<hr />

						{features.map((feature, idx) => (
							<Badge
								key={idx}
								pill
								variant="success"
								className="p-2 mt-1 mr-2 mb-1"
								style={{
									fontSize: "small",
									fontWeight: "normal",
									backgroundColor: "#fafafa",
									color: "#428a13",
									borderStyle: "solid",
									borderWidth: "1px",
								}}
							>
								{feature}
							</Badge>
						))}

						<hr />
						<span>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
							ab quidem dignissimos dolore esse aspernatur, provident ut magni.
							Doloribus id dolorum facere eligendi cum, dignissimos, voluptatum
							vel ex harum nisi doloremque maxime enim repudiandae? Pariatur,
							quae dolore recusandae, qui ullam ipsam asperiores reiciendis
							laudantium sequi nostrum, tempora ratione quo voluptate! Nesciunt
							dignissimos distinctio itaque quas, qui est sit earum culpa eaque
							tempora voluptates. Molestiae laboriosam atque dicta hic aliquam
							qui veritatis perferendis deserunt, voluptates iusto accusamus!
							Natus facilis architecto quibusdam adipisci excepturi illo odio
							recusandae quidem voluptates, cum nam incidunt reiciendis
							voluptate ut pariatur, assumenda, nihil ab. Illum, fuga facere.
						</span>
					</Col>

					<Col style={{ alignItems: "center" }} className="border-left">
						<Button
							variant="primary"
							href={`https://www.google.com/maps?q=${lat},${lon}`}
							target="_blank"
							block
						>
							Open in Google Maps
						</Button>
						<Button variant="primary" href={url} target="_blank" block>
							Learn More at WTA
						</Button>
						<ReturnButton></ReturnButton>
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
